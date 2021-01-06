import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Layout from '../container/Layout';
import Home from '../pages/home/Home';
import About from '../pages/about/About';
import Register from '../components/register/Register';
import Login from '../components/login/Login';
function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/register' component={Register} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
