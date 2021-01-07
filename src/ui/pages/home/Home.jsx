import Container from 'react-bootstrap/Container';
import { listUsers, onHome } from '../../../socketServices/socketService';
import { useState } from 'react';

let observer = null;
let list = [];
onHome();
//lo que va a llegar del evento e sla lista de usuario y con esta lista voy a hbacer las graficas
const Home = () => {
  const [listo, setListo] = useState([]);

  if (!observer) {
    console.log('creando subscribe');
    observer = listUsers();
    observer.subscribe((listOfUsers) => {
      if (listOfUsers.length > 0) {
        setListo(listOfUsers);
        // list = listOfUsers;
        console.log('list_users josue:', list);
      }
    });
  }

  const HomeStyle = {
    color: 'red',
  };

  console.log('listo iteracion', listo);

  return (
    <Container>
      <h1 style={HomeStyle}>Home</h1>
      <ul>
        {listo.map((value) => {
          return <li>{value.username}</li>;
        })}
      </ul>
    </Container>
  );
};

export default Home;
