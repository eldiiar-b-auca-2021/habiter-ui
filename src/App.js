import React from 'react';
import { Layout } from 'antd';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import IntroductionPage from './components/IntroductionPage';
import Home from './components/Home';
import './css/main.css';

const { Content } = Layout;

const App = () => {
  return (
    <BrowserRouter>
      <Layout className='container' style={{ marginLeft: 0, marginRight: 0 }} >
        <Content>
          <Routes>
            <Route exact path="/" element={<IntroductionPage />} />
            <Route path="/home" element={<Home />} />
          </Routes>
        </Content>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
