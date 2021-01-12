import { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Spinner from 'react-bootstrap/Spinner';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { userAuth, setJanuaryLogs } from '../../../redux/actions/auth.actions';
import { db } from '../../../firebase/firebase.config';

const LogIn = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const history = useHistory();
  const isUser = state.auth.currentUser;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [dailyLogs, setDailyLogs] = useState(0);
  const [renderAgain, setRenderAgain] = useState(false);

  const nowDate = new Date();
  const day = nowDate.getDate().toString();
  const month = (nowDate.getMonth() + 1).toString();

  //summit to the database and state
  const handleSummit = (event) => {
    event.preventDefault();
    dispatch(userAuth(email, password));
    setLogOnDataBase();
    setEmail('');
    setPassword('');
    console.log(`LOGIN_: email:${email} - password:${password}`);
  };

  //write data
  const setLogOnDataBase = () => {
    db.ref()
      .child(month)
      .update({
        [day]: dailyLogs + 1,
      });
    setRenderAgain(true);
  };

  // read data
  useEffect(() => {
    if (isUser) {
      history.push('/');
    }
    var daydailyLogs = db.ref(`${month}`);
    daydailyLogs.on('value', (snapshot) => {
      const logs = snapshot.val();
      setDailyLogs(logs[day]);
      dispatch(setJanuaryLogs(logs));
    });
    setRenderAgain(false);
  }, [renderAgain, isUser, history, day, dispatch, month]);

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
