import { useSelector } from 'react-redux';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { onHome } from '../../../socketServices/socketService';
import User from './User/User';
import ChartsContainer from './charts/ChartsContainer';

onHome();
const Home = () => {
  const currentUser = useSelector((state) => state.auth.currentUser);
  const userCollection = useSelector((state) => state.auth.allUsers);
  const januaryLogs = useSelector((state) => state.auth.januaryLogs);

  console.log(userCollection);

  return (
    <Container className='bg-light'>
      <div className='d-flex justify-content-center py-5'>
        {currentUser && currentUser ? (
          <h1 className='text-primary '>IM LOGED IN</h1>
        ) : (
          <div className='text-center'>
            <h1 className='text-danger'>IM NOT LEGED IN</h1>
            <h2>Por favor loegate para poder comenzar</h2>
          </div>
        )}
      </div>
      {currentUser && (
        <div className='text-center pb-5'>
          <h3>
            you are loged in with:
            <span className='text-primary ml-3'>
              {currentUser && currentUser.email}
            </span>
          </h3>
          <h3>
            you are loged in with UID:
            <span className='text-primary ml-3'>
              {currentUser && currentUser.uid}
            </span>
          </h3>
        </div>
      )}
      <Container fluid className=' d-flex '>
        <Row className='justify-content-center'>
          {userCollection.length > 0 &&
            currentUser &&
            userCollection.map((user) => (
              <User
                className='m-auto'
                key={user.uid}
                email={user.email}
                uid={user.uid}
              />
            ))}
        </Row>
      </Container>
      {currentUser && <ChartsContainer januaryLogs={januaryLogs} />}
    </Container>
  );
};

export default Home;
