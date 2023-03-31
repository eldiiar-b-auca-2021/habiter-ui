import { Card, Button } from 'antd';
import { useState } from 'react';
import HabitCard from './HabitCard';
import '../css/TypeOfHabit.css';
import HabitCardForBooleanType from './HabitCardForBooleanType';

const TypeOfHabit = () => {
    const [habitType, setHabitType] = useState('');

    const handleTypeChange = (e) => {
        setHabitType(e.target.value);
    }

    const renderContent = () => {
        if (habitType === 'custom') {
            return <HabitCard />;
        }else if(habitType === 'boolean'){
            return <HabitCardForBooleanType/>
        }
         else {
            return (
                <Card title="Type of Habit"
                    style={{
                        width: 300,
                        textAlign: 'center',
                        padding: 16
                    }}
                    onClick={(e) => {
                        e.stopPropagation();
                    }}>
                    <Button.Group style={{ display: 'flex', flexDirection: 'column' }}>
                        <Button style={{ fontSize: 16, marginBottom: 8 }} onClick={() => setHabitType('boolean')}>
                            Yes/No
                        </Button>

                        <Button style={{ fontSize: 16 }} onClick={() => setHabitType('custom')}>
                            Custom Habit
                        </Button>
                    </Button.Group>
                </Card>
            );
        }
    };

    return (
        <div className="type-of-habit-container">
            {renderContent()}
        </div>
    );
}

export default TypeOfHabit;
