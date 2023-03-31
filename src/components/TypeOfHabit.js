import { Button } from 'antd';
import { useState } from 'react';
import HabitCard from './HabitCard';
import '../css/TypeOfHabit.css';
import HabitCardForBooleanType from './HabitCardForBooleanType';

const TypeOfHabit = () => {
    const [showHabitCard, setShowHabitCard] = useState(false);
    const [showBooleanHabitCard, setShowBooleanHabitCard] = useState(false);

    const handleCustomHabitClick = () => {
        setShowBooleanHabitCard(false);
        setShowHabitCard(!showHabitCard);
    }

    const handleBooleanHabitClick = () => {
        setShowHabitCard(false);
        setShowBooleanHabitCard(!showBooleanHabitCard);
    }

    return (
        <Button.Group style={{ display: 'flex', flexDirection: 'column' }}>
            <Button style={{ fontSize: 16, marginBottom: 8 }} onClick={handleBooleanHabitClick}>
                Yes/No
            </Button>
            {showBooleanHabitCard && <HabitCardForBooleanType />}
            <Button style={{ fontSize: 16 }} onClick={handleCustomHabitClick}>
                Custom Habit
            </Button>
            {showHabitCard && <HabitCard />}
        </Button.Group>
    );
}

export default TypeOfHabit;
