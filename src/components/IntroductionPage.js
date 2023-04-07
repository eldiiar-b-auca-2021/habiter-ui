import React, { useState } from 'react';
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

const IntroductionPage = (props) => {
    const navigate = useNavigate();
    const [isSignUp, setIsSignUp] = useState(false);
    const [isLogin, setIsLogin] = useState(false);
    const [loading, setLoading] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleLogin = (values) => {
        console.log('Success:', values);
        setIsLogin(true);
        fetch('http://localhost:8080/api/auth/signin', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(values)
        })
            .then(response => {
                console.log(response)
                if (response.ok) {
                    console.log(response.data)
                    alert('User logged in successfully!');
                    navigate('/home');
                } else {
                    console.log("failed")
                }
            })
            .catch(error => console.log(error));

    };

    const handleSignUp = (values) => {
        console.log(values)
        setIsSignUp(false);
        setLoading(true);
        fetch('http://localhost:8080/api/auth/singup', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(values)
        })
            .then(response => {
                console.log(response)
                if (response.ok) {
                    console.log(response.data)
                    alert('User added successfully!');
                    setName('');
                    setEmail('');
                    setPassword('');
                    navigate('/home');
                } else {
                    alert('User to add student!');
                }
            })
            .catch(error => console.log(error));
        console.log(`Registering user with email: ${values.email}, password: ${values.password}, name: ${values.name}`);
        setLoading(false);
    };

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
                            <Button type="primary" htmlType="submit" >
                                Sign Up
                            </Button>
                            <Button onClick={() => setIsSignUp(false)}>Cancel</Button>
                        </Form.Item>
                    </Form>
                </Card>
            );
        } else if (isLogin) {
            return (
                <Card title="Welcome back">
                    <p>You have successfully logged in!</p>
                </Card>
            );
        } else {
            return (
                <Card title="Welcome to Habiter">
                    <p>Track your habits and achieve your goals</p>
                    <Form {...layout} onFinish={handleLogin}>
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
                            <Button type="primary" htmlType="submit">
                                Login
                            </Button>
                            <Button onClick={() => setIsSignUp(true)}>Sign Up</Button>
                        </Form.Item>
                    </Form>
                </Card>
            );
        }
    };

    return <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>{renderContent()}</div>;
};

export default IntroductionPage;
