import { Layout, theme } from 'antd';
import Top from './Top';
import NavBar from './NavBar';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Habit from './Habit';
import HabitTracker from './HabitTracker';
import IconList from './IconList';

const { Content } = Layout;

const Home = () => {
    const navigate = useNavigate();
    const [collapsed, setCollapsed] = useState(false);
    const [habitSelected, setHabitSelected] = useState(0)
    const toggleNavBar = () => {
        setCollapsed(!collapsed);
    };

    const {
        token: { colorBgContainer },
    } = theme.useToken();

    const checkTokenExpiration = () => {
        const tokenExpiration = window.localStorage.getItem('tokenExpiration');
        const currentTime = new Date().getTime();
        if (tokenExpiration && tokenExpiration < currentTime) {
            alert('Your session has expired, please log in again.');
            window.localStorage.clear();
            navigate('/login');
        }
    };
    useEffect(() => {
        checkTokenExpiration();
    }, []);

    return (
        <Layout className="site-layout" style={{ height: '140vh', marginLeft: 0 }}>
            <NavBar handleHabitSelect={(selected) => setHabitSelected(selected)} style={{ margin: 0 }} />
            <Layout className>
                <Top toggleNavBar={toggleNavBar} />
                <Content
                    style={{
                        margin: '16px 16px 16px 16px',
                        padding: 30,
                        background: colorBgContainer,
                        overflow: 'auto'
                    }}
                >
                    {habitSelected === 3 && <HabitTracker />}
                    {habitSelected === 4 && <Habit />}
                    {(habitSelected === 1 || habitSelected === 2) && <IconList />}
                </Content>
            </Layout>
        </Layout>
    );
};

export default Home;
