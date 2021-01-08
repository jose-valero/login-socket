import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useHistory } from 'react-router-dom';
import { auth } from '../../../firebase/firebase.config.js';
// import { createUser } from '../../../socketServices/socketService';

const Register = () => {
  let history = useHistory();
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');

  const handleSummit = (event) => {
    event.preventDefault();

    //reset the state
    setName('');
    setLastName('');
    setEmail('');
    setPassword('');

    //validation firebase
    if (password === passwordConfirmation) {
      auth
        .createUserWithEmailAndPassword(email, password)
        .then((user) => console.log(user))
        .catch((err) => console.error(err));
    } else {
      alert('Password do not match');
    }

    //socket.io
    // createUser({
    //   username: email,
    //   password: password,
    // });

    //redirect to login view
    history.push('/login');

    console.log(
      `REGISTER_: name:${name} - lastname:${lastName} - email:${email} - password:${password}`
    );
  };

  //styles
  const TitleStyle = {
    textAlign: 'center',
    color: '#3b5998',
  };
  return (
    <Container>
      <h1 style={TitleStyle} className='my-4'>
        Register
      </h1>
      <Form className='login__container' onSubmit={handleSummit}>
        <Form.Group>
          <Form.Label>First name</Form.Label>
          <Form.Control
            required
            type='text'
            placeholder='First name'
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
          <Form.Label>Lastname</Form.Label>
          <Form.Control
            required
            type='text'
            placeholder='Lastname'
            onChange={(e) => setLastName(e.target.value)}
            value={lastName}
          />
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type='email'
            placeholder='Enter email'
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <Form.Text>We'll never share your email with anyone else.</Form.Text>
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
        <Form.Group controlId='formBasicPasswordConfirmation'>
          <Form.Label>Password Confirmation</Form.Label>
          <Form.Control
            type='password'
            placeholder='password Confirmation'
            onChange={(e) => setPasswordConfirmation(e.target.value)}
            value={passwordConfirmation}
          />
        </Form.Group>
        <Button variant='primary' type='submit'>
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default Register;
