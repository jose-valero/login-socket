const express = require('express');
const socket = require('socket.io');
const { createServer } = require('http');
const mockDb = require('./db/mockDB');
const events = require('./events/eventEnum');

// App setup
const PORT = 8080;
const app = express();
const server = createServer(app);
const io = socket(server);

server.listen(PORT, function () {
  console.log(`Listening on port ${PORT}`);
  console.log(`http://localhost:${PORT}`);
});

io.on('connect', function (sockets) {
  console.log('Made socket connection');
  sockets.on(events.DELETE_USER, (userTodelete) => {
    mockDb.deleteUser(userTodelete);
    io.emit(events.LIST_USER, mockDb.listUsers());
    console.log('a DELETE_USER');
  });

  sockets.on(events.DISCONNECT, (socket) => {
    console.log('a DISCONNECT');
  });

  sockets.on(events.EDIT_USER, (userToEdit) => {
    mockDb.editUser(userToEdit);
    io.emit(events.LIST_USER, mockDb.listUsers());
    console.log('a EDIT_USER');
  });

  sockets.on(events.CREATE_USER, (userToCreate) => {
    console.log('a user created', userToCreate);
    mockDb.createUser(userToCreate);
    io.emit(events.LIST_USER, mockDb.listUsers());
  });
});
