import { Layout } from 'antd';

import NavigationBar from './components/NavigationBar';
import Home from './components/Home';
import './components/components.css';

const App = () => (
    <>
        <Layout className='layout'>
            <NavigationBar />
            <Home />
        </Layout>
    </>
);
export default App;