// import { useState } from 'react';
import { useSelector } from 'react-redux';
import Container from 'react-bootstrap/Container';

const Home = () => {
  const currentUser = useSelector((state) => state.auth.currentUser);

  return (
    <Container>
      <div className='d-flex justify-content-center my-5'>
        {currentUser && currentUser ? (
          <h1 className='text-primary '>ESTOY LOGEADO</h1>
        ) : (
          <h1 className='text-danger'>NO ESTOY LOGEADO</h1>
        )}
      </div>
      <ul>
        {/* {listo.map((value) => {
          return <li>{value.userName}</li>;
        })} */}
      </ul>
    </Container>
  );
};

export default Home;
