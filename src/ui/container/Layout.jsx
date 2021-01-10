import Navigation from '../components/navbar/Navbar';
import { listUsers } from '../../socketServices/socketService';
import { useDispatch } from 'react-redux';
import { storeUsers } from '../../redux/actions/auth.actions';

const Layout = ({ children }) => {
  const dispatch = useDispatch();

  listUsers().subscribe((listuser) => {
    console.log('list:', listuser.users);
    dispatch(storeUsers(listuser.users));
  });
  return (
    <div>
      <Navigation />
      {children}
    </div>
  );
};

export default Layout;
