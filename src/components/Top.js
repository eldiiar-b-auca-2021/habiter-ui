import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { Button, Layout, theme } from 'antd';
import React, { useState, useEffect, useRef } from 'react';
import HabitCard from './HabitCard';
const { Header } = Layout;

const Top = () => {
    const [collapsed, setCollapsed] = useState(false);
    const [showAddCard, setShowAddCard] = useState(false);
    const cardRef = useRef(null);
    const {
        token: { colorBgContainer },
    } = theme.useToken();

    const handleAddCard = () => {
        setShowAddCard(true);
    }

    const handleFormSubmit = () => {
        // handle form submission here
    }

    useEffect(() => {
        const handleClick = (event) => {
            const isInsideCard = cardRef.current && cardRef.current.contains(event.target);
            const isInsideAddButton = event.target.closest('button') === document.querySelector('button');

            if (!isInsideCard && !isInsideAddButton) {
                setShowAddCard(false);
            }
        };

        document.addEventListener('click', handleClick);

        return () => {
            document.removeEventListener('click', handleClick);
        };
    }, []);

    return (
        <Header
            style={{
                padding: 0,
                background: colorBgContainer,
                margin: 0,
                width: "100%",
                height: 80
            }}
        >
            {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                className: 'trigger',
                onClick: () => setCollapsed(!collapsed),
            })}

            <Button
                style={{
                    padding: 0,
                    marginTop: 2,
                    marginLeft: 1000,
                    marginRight: '16px',
                    borderRadius: '10%',
                    fontSize: '32px',
                    width: 120,
                    height: 70,
                }}
                onClick={handleAddCard}
            >
                +ADD
            </Button>

            {showAddCard && (

                <div
                    style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100vw",
                        height: "100vh",
                        background: "rgba(0, 0, 0, 0.5)",
                        zIndex: 1,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    <div ref={cardRef}>
                        <HabitCard />
                    </div>
                </div>
            )}

        </Header>
    );
};

export default Top;
