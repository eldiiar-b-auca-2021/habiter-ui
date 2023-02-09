import { Layout, theme } from 'antd';
import React from 'react';
import './components.css';
const { Header, Content } = Layout;
const Home = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout>
      <Header
        style={{
          padding: 0,
          background: colorBgContainer,
        }}
      />
      <Content
        style={{
          margin: '24px 16px 0',
        }}
      >
        <div
          style={{
            padding: 24,
            minHeight: 650,
            background: colorBgContainer,
          }}
        >
          content
        </div>
      </Content>
    </Layout>
  );
};
export default Home;