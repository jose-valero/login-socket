import { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Spinner from 'react-bootstrap/Spinner';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { userAuth } from '../../../redux/actions/auth.actions';

const LogIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const isUser = state.auth.currentUser;
  const history = useHistory();

  useEffect(() => {
    if (isUser) {
      history.push('/');
    }
  }, [isUser, history]);

  const handleSummit = (event) => {
    event.preventDefault();
    dispatch(userAuth(email, password));
    setEmail('');
    setPassword('');
    console.log(`LOGIN_: email:${email} - password:${password}`);
  };

  return (
    <Container className=''>
      <h1 style={{ textAlign: 'center', color: '#3b5998' }} className='my-4'>
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
          if you dont have account please
          <Link
            to='/register'
            style={{ color: '#accafa', marginLeft: '0.5rem' }}
          >
            register
          </Link>
        </Form.Text>
        <Button variant='primary' type='submit' className='my-4'>
          Submit
        </Button>
        {state.auth.errorAuth && (
          <p className='text-warning'>
            There is no user record corresponding to this identifier. Please try
            again or
            <Link to='/register' className='text-warning ml-1'>
              register
            </Link>
          </p>
        )}
      </Form>
    </Container>
  );
};

export default LogIn;
