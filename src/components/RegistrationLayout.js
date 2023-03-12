import React from 'react';
import { Layout } from 'antd';
import RegistrationPage from './RegistrationPage';

const { Content } = Layout;

const RegistrationLayout = () => {
    return (
        <Layout className='container' style={{ height: '100vh', margin: 0 }}>
            <Content
                style={{
                    margin: 0,
                    padding: 24,
                    minHeight: 280,
                }}
            >
                <RegistrationPage />
            </Content>
        </Layout>
    );
};

export default RegistrationLayout;
