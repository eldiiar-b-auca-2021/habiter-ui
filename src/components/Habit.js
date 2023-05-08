import { useState, useEffect } from 'react';
import { Card, Avatar, Button } from 'antd';
import { Link } from 'react-router-dom';
import HabitI from '../pngs/Habit.png'
const Habit = () => {
    const [habits, setHabits] = useState([]);
    const [userId, setUserId] = useState('');
    const [accessToken, setAccessToken] = useState('')
    const handleMarkAsDone = (habitId) => {
        const updatedHabits = habits.map((habit) => {
            if (habit.id === habitId) {
                return {
                    ...habit,
                    done: !false,
                };
            }
            return habit;
        });
        setHabits(updatedHabits);
    };
    useEffect(() => {
        const id = localStorage.getItem('id');
        const token = localStorage.getItem('token')
        setAccessToken(token)
        setUserId(id);
    }, []);

    useEffect(() => {
        fetch(`http://localhost:8080/api/habit/getHabit/${userId}`, {
            headers: {
                'Authorization': `Bearer ${accessToken}`,
                'Content-Type': 'application/json'
            }
        })
            .then(response => response.json())
            .then(data => {
                console.log(data); // Log the data to the console
                setHabits(data);
            })
    }, [userId, accessToken]);
    const handleDelete = (habitId) => {
        console.log(habitId)
        fetch(`http://localhost:8080/api/habit/deleteHabit/${userId}/${habitId}`, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${accessToken}`
            }
        }).then(() => {
            setHabits(prevHabits => prevHabits.filter(habit => habit.id !== habitId));
        });
    };

    return (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '5px' }}>
            {habits.map(habit => (

                <Card
                    key={habit.id}
                    title={
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <Avatar size={32} src={HabitI} style={{ marginRight: 10 }} />
                            <span style={{ fontSize: '1.2rem' }}>Habit</span>
                        </div>
                    }
                    style={{
                        width: '300px',
                        backgroundColor: '#F5F5F5',
                        marginTop: '20px',
                        padding: '20px',
                        borderRadius: '8px',
                        border: 'none',
                        fontFamily: 'Arial, sans-serif',
                        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
                        display: 'grid',
                        gridTemplateRows: 'auto auto',
                        rowGap: '10px',
                    }}
                >
                    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                        <p style={{ fontSize: "1rem", fontWeight: "bold", color: "#333333", marginBottom: "4px" }}>
                            Name:
                        </p>
                        <p style={{ fontSize: "1rem", color: "#666666", margin: 0, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                            <span style={{ '@media (max-width: 400px)': { fontSize: '0.5rem' } }}>
                                {habit.name}
                            </span>
                        </p>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                        <p style={{ fontSize: "1rem", fontWeight: "bold", color: "#333333", marginBottom: "4px" }}>
                            Goal:
                        </p>
                        <p style={{ fontSize: "1rem", color: "#666666", margin: 0, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                            <span style={{ '@media (max-width: 400px)': { fontSize: '0.5rem' } }}>
                                {habit.goal}
                            </span>
                        </p>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                        <p style={{ fontSize: "1rem", fontWeight: "bold", color: "#333333", marginBottom: "4px" }}>
                            Unit:
                        </p>
                        <p style={{ fontSize: "1rem", color: "#666666", margin: 0 }}>
                            {habit.unit}
                        </p>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                        <p style={{ fontSize: "1rem", fontWeight: "bold", color: "#333333", marginBottom: "4px" }}>
                            Description:
                        </p>
                        <p style={{ fontSize: "1rem", color: "#666666", margin: 0 }}>
                            {habit.description}
                        </p>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                        <p style={{ fontSize: "1rem", fontWeight: "bold", color: "#333333", marginBottom: "4px" }}>
                            StartDate:
                        </p>
                        <p style={{ fontSize: "1rem", color: "#666666", margin: 0 }}>
                            {habit.startDate}
                        </p>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                        <p style={{ fontSize: "1rem", fontWeight: "bold", color: "#333333", marginBottom: "4px" }}>
                            EndDate:
                        </p>
                        <p style={{ fontSize: "1rem", color: "#666666", margin: 0 }}>
                            {habit.endDate}
                        </p>
                    </div>


                    <div
                        style={{

                            //display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            width: '100%'
                        }}
                    >
                        <Button type='primary' danger onClick={() => handleDelete(habit.id)} style={{ marginRight: "10px", marginLeft: '0px', marginTop: '10px' }}>
                            Delete
                        </Button>
                        <Link to={`/habit/${habit.id}`}>
                            <Button type='primary'>Edit</Button>
                        </Link>
                    </div>
                </Card>

            ))}
        </div>
    );
}

export default Habit;