import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Layout from '../ui/container/Layout';
import Home from '../ui/pages/home/Home';
import About from '../ui/pages/about/About';
import Register from '../ui/components/register/SingUp';
import LogIn from '../ui/components/login/SingIn';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/login' component={LogIn} />
          <Route exact path='/register' component={Register} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
