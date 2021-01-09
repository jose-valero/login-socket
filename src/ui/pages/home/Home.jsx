// import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Container from 'react-bootstrap/Container';
import { listUsers, onHome } from '../../../socketServices/socketService';

console.log(onHome);
let lista = null;
onHome();
const Home = ({  listuser }) => {
  const currentUser = useSelector((state) => state.auth.currentUser);

  listUsers().subscribe((listuser) => {
    lista = listuser;
    console.log('list:', listuser.users);
  });

  return (
    <Container>
      <div className='d-flex justify-content-center my-5'>
        {currentUser && currentUser ? (
          <h1 className='text-primary '>ESTOY LOGEADO</h1>
        ) : (
          <h1 className='text-danger'>NO ESTOY LOGEADO</h1>
        )}
      </div>
      <div>
        <h3>
          you are loged in with:
          <span className='text-primary ml-3'>
            {currentUser && currentUser.email}
          </span>
        </h3>
      </div>
      <div>
        <h3>
          you are loged in with UID:
          <span className='text-info ml-3'>
            {currentUser && currentUser.uid}
          </span>
        </h3>
      </div>
      <div>
        <ul>
       {/* map */}
        </ul>
      </div>
    </Container>
  );
};

export default Home;
