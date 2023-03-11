import { Layout, theme } from 'antd';
import Top from './Top'
const { Content } = Layout;
const Home = () => {
    const {
        token: { colorBgContainer },
    } = theme.useToken();
    return (
        <Layout className="site-layout">
            <Top />
            <Content
                style={{
                    margin: '24px 16px',
                    padding: 24,
                    minHeight: 280,
                    background: colorBgContainer,
                }}
            >
                Content
            </Content>
        </Layout>
    );
};
export default Home;
