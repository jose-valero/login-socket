import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import { Link, useHistory } from 'react-router-dom';
import { auth } from '../../../firebase/firebase.config';
import { useSelector, useDispatch } from 'react-redux';
import { resetApp } from '../../../redux/actions/auth.actions';

const Navigation = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const isUser = state.auth.currentUser;
  let history = useHistory();

  const onLogOut = (e) => {
    dispatch(resetApp());
    auth.signOut();
    if (isUser) {
      history.push('/login');
    }
  };

  const LinkStyles = {
    margin: '0.5rem',
    textDecoration: 'none',
    color: '#ffff',
  };

  return (
    <Navbar collapseOnSelect expand='lg' bg='dark' variant='dark'>
      <Navbar.Toggle aria-controls='responsive-navbar-nav' />
      <Navbar.Collapse id='responsive-navbar-nav'>
        <Nav className='mr-auto'>
          <Link to='/' style={LinkStyles}>
            Home
          </Link>
          <Link to='/about' style={LinkStyles}>
            About
          </Link>
        </Nav>
        <Nav>
          {isUser && isUser ? (
            <Button onClick={onLogOut} variant='warning'>
              Logout
            </Button>
          ) : (
            <Nav>
              <Link to='/login' style={LinkStyles}>
                Login
              </Link>
              <Link to='/register' style={LinkStyles}>
                Register
              </Link>
            </Nav>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
