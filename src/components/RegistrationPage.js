import React, { useState } from 'react';
import { Form, Input, Button, Typography } from 'antd';
import { UserOutlined, LockOutlined, MailOutlined } from '@ant-design/icons';

const { Title } = Typography;

const RegistrationPage = () => {
    const [form] = Form.useForm();
    const [loading, setLoading] = useState(false);

    const onFinish = (values) => {
        setLoading(true);
        // Make API call to register user with provided information
        console.log(`Registering user with email: ${values.email}, password: ${values.password}, name: ${values.name}`);
        setLoading(false);
    };

    return (
        <div style={{ maxWidth: 400, margin: '0 auto', height: '100vh' }}>
            <Title level={2}>Create an Account</Title>
            <Form
                form={form}
                onFinish={onFinish}
                layout="vertical"
                requiredMark="optional"
            >
                <Form.Item
                    label="Full Name"
                    name="name"
                    rules={[
                        {
                            required: true,
                            message: 'Please enter your full name',
                        },
                    ]}
                >
                    <Input prefix={<UserOutlined />} placeholder="Full Name" />
                </Form.Item>
                <Form.Item
                    label="Email"
                    name="email"
                    rules={[
                        {
                            required: true,
                            message: 'Please enter your email address',
                        },
                        {
                            type: 'email',
                            message: 'Please enter a valid email address',
                        },
                    ]}
                >
                    <Input prefix={<MailOutlined />} placeholder="Email" />
                </Form.Item>
                <Form.Item
                    label="Password"
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'Please enter a password',
                        },
                        {
                            min: 8,
                            message: 'Password must be at least 8 characters',
                        },
                    ]}
                >
                    <Input.Password prefix={<LockOutlined />} placeholder="Password" />
                </Form.Item>
                <Form.Item
                    label="Confirm Password"
                    name="confirm"
                    dependencies={['password']}
                    rules={[
                        {
                            required: true,
                            message: 'Please confirm your password',
                        },
                        ({ getFieldValue }) => ({
                            validator(_, value) {
                                if (!value || getFieldValue('password') === value) {
                                    return Promise.resolve();
                                }
                                return Promise.reject(new Error('Passwords do not match'));
                            },
                        }),
                    ]}
                >
                    <Input.Password prefix={<LockOutlined />} placeholder="Confirm Password" />
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit" loading={loading} block>
                        Create Account
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default RegistrationPage;
