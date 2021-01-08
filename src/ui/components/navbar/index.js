import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { auth } from '../../../firebase/firebase.config';
import { useSelector } from 'react-redux';

const Navigation = () => {
  const state = useSelector((state) => state);

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
          <Link to='/login' style={LinkStyles}>
            Login
          </Link>
          <Link to='/register' style={LinkStyles}>
            Register
          </Link>
          {state.auth.currentUser && state.auth.currentUser ? (
            <Button onClick={() => auth.signOut()} variant='warning'>
              Logout
            </Button>
          ) : null}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
