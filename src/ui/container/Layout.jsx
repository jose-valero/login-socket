import Navigation from '../components/navbar';

const Layout = ({ children }) => {
  return (
    <div>
      <Navigation />
      {children}
    </div>
  );
};

export default Layout;
