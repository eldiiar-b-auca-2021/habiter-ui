
import { Layout, Switch } from 'antd';
import NavBar from './components/NavBar';
import Home from './components/Home';
import RegistrationPage from './components/RegistrationPage';
import { Route } from 'react-router-dom';
const App = () => {
  return (
    <Switch>
      <Route path="/register">
        <RegistrationPage />
      </Route>
      <Route path="/">
        <Layout className='container' style={{ height: '100vh' }}>
          <NavBar />
          <Home />
        </Layout>
      </Route>
    </Switch>
  );
};
export default App;
