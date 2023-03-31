import { Layout, theme } from 'antd';
import Top from './Top';
import NavBar from './NavBar';
const { Content } = Layout;

const Home = () => {
    const {
        token: { colorBgContainer },
    } = theme.useToken();

    return (
        <Layout className="site-layout" style={{ height: '140vh', marginLeft: 0 }}>
            <NavBar style={{ margin: 0 }} />
            <Layout className>
                <Top />
                <Content
                    style={{
                        margin: '16px 16px 16px 16px',
                        padding: 30,
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
