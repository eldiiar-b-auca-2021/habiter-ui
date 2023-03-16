import { Layout, theme } from 'antd';
import Top from './Top';
import NavBar from './NavBar';
import { useState } from 'react';
import HabitCard from './HabitCard';
const { Content } = Layout;

const Home = () => {
    const [selectedMenu, setSelectedMenu] = useState('1');

    const {
        token: { colorBgContainer },
    } = theme.useToken();

    return (
        <Layout className="site-layout" style={{ height: '140vh', marginLeft: 0 }}>
            <NavBar style={{ marginLeft: 0, marginRight: 0 }} />
            <Layout className>
                <Top />
                <Content
                    style={{
                        margin: '16px 16px 16px 16px',
                        padding: 24,
                        background: colorBgContainer,
                    }}
                >
                    Content
                </Content>
            </Layout>
        </Layout>
    );
};

export default Home;
