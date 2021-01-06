import Navigation from '../components/navbar/Navigation';

const Layout = ({ children }) => {
  return (
    <div>
      <Navigation />
      {children}
    </div>
  );
};

export default Layout;
