import { Layout, theme } from 'antd';
import Top from './Top'
import NavBar from './NavBar';
const { Content } = Layout;

const Home = () => {
    const {
        token: { colorBgContainer },
    } = theme.useToken();
    return (
        <Layout className="site-layout" style={{ height: '100vh', margin: '0px 0px' }}>
            <NavBar />
            <Top style={{ height: '800px' }} />
            <Content
                style={{
                    margin: '24px 16px',
                    padding: 24,
                    background: colorBgContainer,
                }}
            >
                Content
            </Content>
        </Layout>
    );
};
export default Home;
