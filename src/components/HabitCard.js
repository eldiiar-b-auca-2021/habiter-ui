import { Card, Form, Input, Button, Select } from 'antd';
import { useState } from 'react';
const { Option } = Select;

const HabitCard = () => {
  const [name, setName] = useState('');
  const [goal, setGoal] = useState(0);
  const [unit, setUnit] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [description, setDescription] = useState('');
  const [repeat, setRepeat] = useState('');
  const handleFormSubmit = () => {
    // handle form submission here
  }

  const repeatOptions = [
    { value: 'Every day', label: 'Every Day' },
    { value: 'Every n days', label: 'Every N Days' },
    { value: 'Once in a week', label: 'Once In A Week' },
    { value: 'Weekly', label: 'Weekly' },
  ];

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
        <Form.Item>
          <Form.Item label="Repeat" name="repeat">
            <Select value={repeat} onChange={(value) => setRepeat(value)} style={{ display: 'flex' }}>
              {repeatOptions.map((option) => (
                <Option key={option.value} value={option.value}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                    <div
                      style={{
                        backgroundColor: '#1890ff',
                        width: '20px',
                        height: '20px',
                        borderRadius: '50%',
                      }}
                    />
                    <div>{option.label}</div>
                  </div>
                </Option>
              ))}
            </Select>
          </Form.Item>
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
