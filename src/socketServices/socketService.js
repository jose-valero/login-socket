import * as socketIo from 'socket.io-client';
import { Observable } from 'rxjs';
const socket = socketIo('http://localhost:8080');

const createUser = (user) => {
  socket.emit('CREATE_USER', user);
};

const deleteUser = (user) => {
  socket.emit('DELETE_USER', user);
};

const editUser = (uid, email) => {
  console.log('EDIT', {uid, email});
  socket.emit('EDIT_USER', uid, email);
};

//prevent the infinity loop
const onHome = () => {
  socket.emit('ON_HOME');
};

const listUsers = () => {
  return new Observable((observer) => {
    socket.on('LIST_USER', (data) => observer.next(data));
  });
};

export { deleteUser, createUser, listUsers, onHome, editUser };
