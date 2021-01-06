import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';

const Navigation = () => {
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
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
