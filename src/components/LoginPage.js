import React, { useState, useEffect } from 'react';
import { Button, Card, Form, Input } from 'antd';
import { useNavigate } from 'react-router-dom';

const layout = {
    labelCol: {
        span: 8,
    },
    wrapperCol: {
        span: 16,
    },
};

const tailLayout = {
    wrapperCol: {
        offset: 8,
        span: 16,
    },
};

const LoginPage = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [token, setToken] = useState('');
    const today = new Date();

    const handleLogin = (values) => {
        console.log('Success:', values);
        setLoading(true);
        fetch('http://localhost:8080/api/auth/signin', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(values)
        })
            .then(response => {
                console.log(response)
                if (response.ok) {
                    response.json().then(data => {
                        console.log(data)
                        if (data) {
                            // console.log(data.map.token)
                            window.localStorage.setItem('token', data.token);
                            const endOfDay = new Date(today.getFullYear(), today.getMonth(), today.getDate(), 23, 59, 59);
                            const expirationTime = endOfDay.getTime();
                            window.localStorage.setItem('email', data.email)
                            window.localStorage.setItem('id', data.id)
                            window.localStorage.setItem('tokenExpiration', expirationTime);
                            window.localStorage.setItem('fullName', data.fullName);
                            //  setIsAuthorized(true);
                            navigate('/home');
                        }
                    })
                }
            })
            .catch(error => console.log(error))
            .finally(() => setLoading(false));
    };


    useEffect(() => {
        const token = window.localStorage.getItem('token');
        const tokenExpiration = window.localStorage.getItem('tokenExpiration');
        if (token && new Date().getTime() < tokenExpiration) {
            setToken(token);
            navigate('/home');
        } else {
            window.localStorage.removeItem('token');
            window.localStorage.removeItem('tokenExpiration');
        }
    }, []);

    const renderContent = () => {

        return (
            <Card title="Welcome to Habiter">
                <Form {...layout} onFinish={handleLogin}>
                    <Form.Item
                        label="Email"
                        name="email"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your username!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your password!',
                            },
                        ]}
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item {...tailLayout}>
                        <div>
                            <Button type="primary" htmlType="submit" loading={loading}>
                                Login
                            </Button>
                        </div>
                    </Form.Item>
                </Form>
            </Card>
        );

    };


    return <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>{renderContent()}</div>;
};

export default LoginPage;