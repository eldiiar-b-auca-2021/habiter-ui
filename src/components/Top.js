import { Button, Layout, theme, DatePicker, Form, Avatar } from 'antd';
import React, { useState, useEffect, useRef } from 'react';
import TypeOfHabit from './TypeOfHabit';
import moment from 'moment';
import Beka from '../pngs/Beka.jpg'
const { Header } = Layout;

const Top = () => {
    const [showAddCard, setShowAddCard] = useState(false);
    const cardRef = useRef(null);
    const {
        token: { colorBgContainer },
    } = theme.useToken();
    const handleAddCard = () => {
        setShowAddCard(true);
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
    const formatDate = 'DD MMMM YYYY';

    return (
        <Header
            style={{
                padding: 0,
                background: colorBgContainer,
                margin: 0,
                width: "100%",
                height: "80px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center"
            }}
        >
            <div style={{
                height: '70px',
                marginRight: '5px',
                marginLeft: '100px',
                backgroundColor: '#F5F5F5',
                borderRadius: '10px',

            }}>
                <Form.Item style={{ marginLeft: '10px', marginRight: '10px', marginBottom: 0 }}>
                    <label style={{
                        display: 'block', textAlign: 'center', marginBottom: 0, fontSize: '20px',
                        fontWeight: 'bold',
                    }}>Today</label>
                    <DatePicker defaultValue={moment()} format={formatDate} />
                </Form.Item>
            </div>
            <div style={{ display: 'flex', flexDirection: 'row' }}>
                <Button
                    style={{
                        padding: 0,
                        backgroundColor: '#F5F5F5',
                        marginTop: 2,
                        marginRight: '5px',
                        borderRadius: '10%',
                        fontSize: '32px',
                        width: 120,
                        height: 70,
                    }}
                    onClick={handleAddCard}
                >
                    Add
                </Button>
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    height: '70px',
                    marginRight: '5px',
                    backgroundColor: '#F5F5F5',
                    borderRadius: '10px',

                }}>
                    {/* <div style={{
                    width: '50px',
                    height: '50px',
                    borderRadius: '30%',
                    overflow: 'hidden',
                    marginRight: '8px'
                }}>
                    <img src={Beka} style={{ width: '100%', borderRadius: '50%' }} />
                </div> */}
                    <Avatar src={Beka} size={50} />
                    <span style={{
                        fontSize: '10px',
                        fontWeight: 'bold',
                        letterSpacing: '0.05em',
                        textTransform: 'uppercase',
                        color: '#555',
                        fontFamily: 'Arial, sans-serif',
                        textAlign: 'left'
                    }}>Developed by Bekzhan Eldiiar uulu</span>
                </div>
            </div>

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
                        <TypeOfHabit />
                    </div>
                </div>
            )}
        </Header>

    );
};
export default Top;