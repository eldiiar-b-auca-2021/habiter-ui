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

const IntroductionPage = () => {
    const navigate = useNavigate();
    const [isSignUp, setIsSignUp] = useState(false);
    const [loading, setLoading] = useState(false);
    const [isAuthorized, setIsAuthorized] = useState(false);
    const [token, setToken] = useState('');
    const [name, setName] = useState('')
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

                            console.log(data.map.token)
                            window.localStorage.setItem('token', data.token);
                            const expirationTime = new Date().getTime() + 30 * 60 * 1000;
                            window.localStorage.setItem('email', data.email)
                            window.localStorage.setItem('id', data.id)
                            window.localStorage.setItem('tokenExpiration', expirationTime);
                            window.localStorage.setItem('fullName', data.fullName);
                            setIsAuthorized(true);
                            navigate('/home');
                        }
                    })
                }
            })
            .catch(error => console.log(error))
            .finally(() => setLoading(false));
    };

    const handleSignUp = (values) => {
        console.log(values);
        setLoading(true);
        fetch('http://localhost:8080/api/auth/signup', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(values),
        })
            .then((response) => {
                console.log(response);
                if (response.ok) {
                    // console.log(response.data);
                    alert('User added successfully!');
                    setIsSignUp(false);
                } else {
                    alert('Failed to add user!');
                }
            })
            .catch((error) => console.log(error))
            .finally(() => setLoading(false));
    };

    useEffect(() => {
        const token = window.localStorage.getItem('token');
        const tokenExpiration = window.localStorage.getItem('tokenExpiration');
        if (token && new Date().getTime() < tokenExpiration) {
            setIsAuthorized(true);
            setToken(token);
            navigate('/home');
        } else {
            setIsAuthorized(false);
            window.localStorage.removeItem('token');
            window.localStorage.removeItem('tokenExpiration');
        }
    }, []);

    const renderContent = () => {
        if (isSignUp) {
            return (
                <Card title="Sign Up">
                    <Form {...layout} onFinish={handleSignUp}>
                        <Form.Item
                            label="Firstname"
                            name="firstname"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your firstname!',
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            label="Lastname"
                            name="lastname"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your lastname!',
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            label="Email"
                            name="email"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your email!',
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
                                    Submit
                                </Button>
                                <Button onClick={() => setIsSignUp(false)}>Cancel</Button>
                            </div>
                        </Form.Item>
                    </Form>
                </Card>
            );
        } else {
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
                                <Button onClick={() => setIsSignUp(true)}>Sign Up</Button>
                            </div>
                        </Form.Item>
                    </Form>
                </Card>
            );
        }
    };


    return <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>{renderContent()}</div>;
};

export default IntroductionPage;