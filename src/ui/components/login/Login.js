import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link, useHistory } from 'react-router-dom';
import { auth } from '../../../firebase/firebase.config.js';
const Login = () => {
  let history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSummit = (event) => {
    event.preventDefault();
    setEmail('');
    setPassword('');

    history.push('/');

    auth
      .signInWithEmailAndPassword(email, password)
      .then((user) => console.log(user))
      .catch((err) => console.error(err));

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
      </Form>
    </Container>
  );
};

export default Login;
