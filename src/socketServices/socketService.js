import * as socketIo from 'socket.io-client';
import { Observable } from 'rxjs';
const socket = socketIo('http://localhost:8080');

const createUser = (user) => {
  socket.emit('CREATE_USER', user);
};

const listUsers = () => {
  return new Observable((observer) => {
    socket.on('LIST_USER', (data) => observer.next(data));
  });
};

export { createUser, listUsers };
