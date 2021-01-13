const express = require('express');
const socket = require('socket.io');
const { createServer } = require('http');
const events = require('./events/eventEnum');

// App setup
const PORT = 8080;
const app = express();
const server = createServer(app);
const io = socket(server);

var admin = require('firebase-admin');

var serviceAccount = require('../src/firebase/serviceAccountKey.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://wispro-app-default-rtdb.firebaseio.com',
});

const listAllUsers = (nextPageToken) => {
  // List batch of users, 1000 at a time.
  admin
    .auth()
    .listUsers(100, nextPageToken)
    .then((listUsersResult) => {
      io.emit(events.LIST_USER, listUsersResult);
    })
    .catch((error) => {
      console.log('Error listing users:', error);
    });
};

// Start listing users from the beginning, 1000 at a time.

server.listen(PORT, function () {
  console.log(`Listening on port ${PORT}`);
  console.log(`http://localhost:${PORT}`);
});

io.on('connect', function (sockets) {
  console.log('Made socket connection');
  //METODO DELETE USER
  sockets.on(events.DELETE_USER, (uid) => {
    console.log(uid, 'onEVENTSDELETE');
    admin
      .auth()
      .deleteUser(uid)
      .then(() => {
        console.log('Successfully deleted user');
        listAllUsers();
      })
      .catch((error) => {
        console.log('Error deleting user:', error);
      });

    listAllUsers();
    console.log('a DELETE_USER');
  });

  sockets.on(events.DISCONNECT, (socket) => {
    console.log('a DISCONNECT');
  });
  
  //METODO EDIT USER
  sockets.on(events.EDIT_USER, (uid, email) => {
    console.log(email, 'EMAIL PARAMS');
    admin
      .auth() // OBJECTO DE EJEMPLO
      .updateUser(uid, {
        email: email,
      })
      .then((userRecord) => {
        // See the UserRecord reference doc for the contents of userRecord.
        console.log('Successfully updated user', userRecord.toJSON());
        listAllUsers();
      })
      .catch((error) => {
        console.log('Error updating user:', error);
      });

    console.log('a EDIT_USER');
  });
  //METODO ON HOME
  sockets.on(events.ON_HOME, () => {
    listAllUsers();
  });
});
