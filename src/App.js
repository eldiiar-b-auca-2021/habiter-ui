import { Layout } from 'antd';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './components/Home';
import RegistrationPage from './components/RegistrationPage';
import './css/main.css'
const { Content } = Layout;

const App = () => {
  const path = window.location.pathname;
  let content;

  if (path === '/main') {
    content = <Home />;
  } else {
    content = <RegistrationPage />;

  }


  return (
    <BrowserRouter>
      <Layout className='container' style={{ marginLeft: 0, marginRight: 0 }} >
        <Content>
          {content}
        </Content>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
