import { Button, Layout, theme } from 'antd';
import { Modal } from 'antd';
import React, { useState, useRef } from 'react';
import TypeOfHabit from './TypeOfHabit';
const { Header } = Layout;
const Top = () => {

    const [visible, setVisible] = useState(false);

    const showModal = () => {
        setVisible(true);
    };

    const handleOk = () => {
        // Handle form submission logic here
        setVisible(false);
    };

    const handleCancel = () => {
        setVisible(false);
    };

    const cardRef = useRef(null);
    const {
        token: { colorBgContainer },
    } = theme.useToken();

    return (
        <Header
            style={{
                padding: 0,
                background: colorBgContainer,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
            }}
        >
            <div style={{ display: "flex", alignItems: "center" }}>
            </div>
            <Button
                style={{
                    marginRight: 20,
                    borderRadius: '10%',
                    fontSize: '20px',
                    width: 100,
                    height: 50,
                }}
                onClick={showModal}
            >
                Add
            </Button>
            <Modal
                visible={visible}
                title="Type of Habit"
                okText="Save"
                cancelText="Cancel"
                onOk={handleOk}
                onCancel={handleCancel}
            >
                <div ref={cardRef}>
                    <TypeOfHabit />
                </div>
            </Modal>
        </Header>
    );
};

export default Top;