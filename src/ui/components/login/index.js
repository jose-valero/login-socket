import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Spinner from 'react-bootstrap/Spinner';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { userAuth } from '../../../redux/actions/auth.actions';

const LogIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  // let history = useHistory();

  const handleSummit = (event) => {
    event.preventDefault();
    setEmail('');
    setPassword('');
    dispatch(userAuth(email, password));
    // history.push('/');
    console.log(`LOGIN_: email:${email} - password:${password}`);
  };

  const TitleStyle = {
    textAlign: 'center',
    color: '#3b5998',
  };
  return (
    <Container className=''>
      <h1 style={TitleStyle} className='my-4'>
        Login
      </h1>
      {state.auth.isLoading ? (
        <div className='d-flex justify-content-center'>
          <Spinner animation='border' variant='primary' />
        </div>
      ) : null}

      <Form className='login__container' onSubmit={handleSummit}>
        <Form.Group controlId='formBasicEmail' required>
          <Form.Label>Email address</Form.Label>
          <Form.Control
            placeholder='Enter Email'
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </Form.Group>

        <Form.Group controlId='formBasicPassword'>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type='password'
            placeholder='Password'
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </Form.Group>
        <Form.Text>
          if you dont have account please{' '}
          <Link to='/register' style={{ color: '#accafa' }}>
            register
          </Link>
        </Form.Text>
        <Button variant='primary' type='submit' className='mt-4'>
          Submit
        </Button>
        {state.auth.errorAuth && (
          <p>
            There is no user record corresponding to this identifier. The user
            may have been deleted.
          </p>
        )}
      </Form>
    </Container>
  );
};

export default LogIn;
