import { Card, Form, Input, Button, DatePicker } from 'antd';
import { useState, useEffect } from 'react';
import axios from 'axios';

const HabitCard = () => {
  const [name, setName] = useState('');
  const [goal, setGoal] = useState(0);
  const [unit, setUnit] = useState('');
  const [description, setDescription] = useState('');
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [userId, setUserId] = useState('');
  const [token, setToken] = useState('');

  useEffect(() => {
    const id = localStorage.getItem('id');
    const t = localStorage.getItem('token');
    setUserId(id);
    setToken(t);
    console.log(id);
  }, []);

  const handleFormSubmit = async function () {
    const formData = {
      name,
      goal,
      unit,
      description,
      startDate,
      endDate
    };
    console.log(formData);
    try {
      const response = await axios.post(`http://localhost:8080/api/habit/${userId}`, formData, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      });

      console.log('Habit data submitted successfully');
      console.log(response.data);
    } catch (error) {
      console.error(error.message);
    }

    console.log(formData);
  }

  return (
    <Card title="Create Habit" bordered={false} style={{ width: 500, textAlign: 'center' }} onClick={(e) => { e.stopPropagation(); }}>
      <Form onFinish={handleFormSubmit}>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-evenly' }}>
          <Form.Item style={{ width: 400 }}>
            <label style={{ display: 'block', textAlign: 'center', marginBottom: 0 }}>Name</label>
            <Input value={name} onChange={(e) => setName(e.target.value)} />
          </Form.Item>
        </div>

        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
          <Form.Item style={{ marginRight: 10, marginBottom: 10 }}>
            <label style={{ display: 'block', textAlign: 'center', marginBottom: 0 }}>Goal</label>
            <Input type="number" value={goal} onChange={(e) => setGoal(e.target.value)} style={{ width: 140 }} />
          </Form.Item>

          <Form.Item style={{ marginRight: 10, marginBottom: 10 }}>
            <label style={{ display: 'block', textAlign: 'center', marginBottom: 0 }}>Unit</label>
            <Input value={unit} onChange={(e) => setUnit(e.target.value)} style={{ width: 150 }} />
          </Form.Item>
        </div>

        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-evenly' }}>
          <Form.Item style={{ width: 400, marginTop: 20 }}>
            <label style={{
              display: 'block', textAlign: 'center', marginBottom:
                0
            }}>Description</label>
            <Input.TextArea value={description} onChange={(e) => setDescription(e.target.value)} />
          </Form.Item>
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
          <Form.Item style={{ marginRight: 10, marginBottom: 10 }}>
            <label style={{ display: 'block', textAlign: 'center', marginBottom: 0 }}>Start Date</label>
            <DatePicker value={startDate} onChange={(date) => setStartDate(date)} />
          </Form.Item>

          <Form.Item style={{ marginRight: 10, marginBottom: 10 }}>
            <label style={{ display: 'block', textAlign: 'center', marginBottom: 0 }}>End Date</label>
            <DatePicker value={endDate} onChange={(date) => setEndDate(date)} />
          </Form.Item>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', marginTop: 30 }}>
          <Button type="primary" htmlType="submit">Submit</Button>
        </div>
      </Form>
    </Card>
  );
}

export default HabitCard;






