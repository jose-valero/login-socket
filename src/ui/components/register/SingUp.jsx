import { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { userReg } from '../../../redux/actions/auth.actions';

const Register = () => {
  const [displayName, setDisplayName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const isUser = state.auth.isReg;
  const history = useHistory();

  useEffect(() => {
    if (isUser) {
      history.push('/login');
    }
  }, [isUser, history]);

  const handleSummit = (event) => {
    event.preventDefault();
    //validation firebase
    if (password === passwordConfirmation) {
      dispatch(userReg(email, password));
    } else {
      alert('Password do not match');
    }
    setDisplayName('');
    setLastName('');
    setEmail('');
    setPassword('');
    setPasswordConfirmation('');

    console.log(
      `REGISTER_: name:${displayName} - lastname:${lastName} - email:${email} - password:${password}`
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
            onChange={(e) => setDisplayName(e.target.value)}
            value={displayName}
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
