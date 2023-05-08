import { useState, useEffect } from 'react';
import { Card, Button, Slider } from 'antd';


const HabitTracker = () => {
    const [habits, setHabits] = useState([]);
    const [userId, setUserId] = useState('');
    const [accessToken, setAccessToken] = useState('');

    const handleMarkAsDone = (habitId) => {
        const updatedHabits = habits.map((habit) => {
            if (habit.id === habitId) {
                if (habit.progress < habit.goal) {
                    fetch(`http://localhost:8080/api/habit/updateProgress/${habitId}/${userId}`, {
                        method: 'PUT',
                        headers: {
                            'Authorization': `Bearer ${accessToken}`
                        }
                    }).then(() => {
                        const updatedHabits = habits.map((h) => {
                            if (h.id === habitId) {
                                return {
                                    ...h,
                                    progress: h.progress + 1
                                };
                            }
                            return h;
                        });
                        setHabits(updatedHabits);
                    });
                } else {
                    fetch(`http://localhost:8080/api/habit/updateCompleted/${habitId}/${userId}`, {
                        method: 'PUT',
                        headers: {
                            'Authorization': `Bearer ${accessToken}`
                        }
                    }).then(() => {
                        const updatedHabits = habits.map((h) => {
                            if (h.id === habitId) {
                                return {
                                    ...h,
                                    completed: true
                                };
                            }
                            return h;
                        });
                        setHabits(updatedHabits);
                    });
                }
            }
            return habit;
        });
        setHabits(updatedHabits)
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
                'Content-Type': 'application/json',
            },
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data); // Log the data to the console
                const updatedHabits = data.map((habit) => {
                    const done = habit.completed;
                    const goal = habit.goal;
                    const id = habit.id;
                    const completed = habit.completed;
                    return {
                        ...habit,
                        endDate: new Date(habit.endDate),
                        done,
                        goal,
                        id,
                        completed
                    };
                });
                setHabits(updatedHabits);
            });
    }, [userId, accessToken]);

    const currentDate = new Date();

    return (
        <div style={{ display: 'grid' }}>
            {habits
                .filter((habit) => currentDate < habit.endDate)
                .map((habit) => (
                    <Card
                        key={habit.id}
                        style={{
                            backgroundColor: habit.color,
                            borderRadius: '10px',
                            boxShadow: '2px 8px rgba(0, 0, 0, 0.25)',
                            padding: '16px',
                            marginBottom: '16px',
                        }}
                        title={habit.name}
                    >
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <div>
                                <p style={{ fontWeight: 'bold' }}>Progress</p>
                                <Slider
                                    min={0}
                                    max={habit.goal}
                                    value={habit.progress}
                                />
                            </div>
                            <div>
                                <p style={{ fontWeight: 'bold' }}>Goal</p>
                                <p>{habit.progress}/{habit.goal}</p>
                            </div>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <Button onClick={() => handleMarkAsDone(habit.id)}>{habit.completed ? "Done" : "Pending"}</Button>
                        </div>
                    </Card>
                ))}
        </div>
    );
};

export default HabitTracker;