import React, { useState } from 'react';
import { Input, Button } from 'antd';

const RegistrationPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        // Make API call to register user with provided information
        console.log(`Registering user with email: ${email}, password: ${password}, name: ${name}`);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Email</label>
                <Input type="email" value={email} onChange={(event) => setEmail(event.target.value)} />
            </div>
            <div>
                <label>Password</label>
                <Input.Password value={password} onChange={(event) => setPassword(event.target.value)} />
            </div>
            <div>
                <label>Name</label>
                <Input value={name} onChange={(event) => setName(event.target.value)} />
            </div>
            <Button type="primary" htmlType="submit">Register</Button>
        </form>
    );
};

export default RegistrationPage;
