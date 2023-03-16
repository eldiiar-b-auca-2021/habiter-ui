import { Card, Form, Input, Button } from 'antd';
import { useState } from 'react';

const HabitCard = () => {
  const [name, setName] = useState('');
  const [goal, setGoal] = useState(0);
  const [unit, setUnit] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [description, setDescription] = useState('');

  const handleFormSubmit = () => {
    // handle form submission here
  }

  return (
    <Card title="Create Habit" bordered={false} style={{ width: 500 }}>
      <Form onFinish={handleFormSubmit}>
        <Form.Item label="Name" name="name">
          <Input value={name} onChange={(e) => setName(e.target.value)} />
        </Form.Item>
        <Form.Item label="Goal" name="goal">
          <Input type="number" value={goal} onChange={(e) => setGoal(e.target.value)} />
        </Form.Item>
        <Form.Item label="Unit" name="unit">
          <Input value={unit} onChange={(e) => setUnit(e.target.value)} />
        </Form.Item>
        <Form.Item label="Start Date" name="startDate">
          <Input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
        </Form.Item>
        <Form.Item label="End Date" name="endDate">
          <Input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
        </Form.Item>
        <Form.Item label="Description" name="description">
          <Input.TextArea value={description} onChange={(e) => setDescription(e.target.value)} />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">Create Habit</Button>
        </Form.Item>
      </Form>
    </Card>
  );
};

export default HabitCard;
