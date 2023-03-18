import { Card, Form, Input, Button, Select, Checkbox } from 'antd';
import { useState } from 'react';
const { Option } = Select;

const HabitCardForBooleanType = () => {
    const [name, setName] = useState('');
    const [unit, setUnit] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [description, setDescription] = useState('');
    const [repeat, setRepeat] = useState('');
    const [repeatDays, setRepeatDays] = useState(1); // default repeat every 1 day
    const handleFormSubmit = () => {
        // handle form submission here
    }
    const [daysOfWeek, setDaysOfWeek] = useState([]);

    const handleDaysOfWeekChange = (checkedValues) => {
        setDaysOfWeek(checkedValues);
    };
    const repeatOptions = [
        { value: 'Every day', label: 'Every day' },
        { value: 'Every n days', label: 'Every N days' },
        { value: 'Once in a week', label: 'Once in a week' },
        {
            value: 'Weekly',
            label: 'Weekly',
            daysOfWeek: [
                { value: 'Monday', label: 'Monday' },
                { value: 'Tuesday', label: 'Tuesday' },
                { value: 'Wednesday', label: 'Wednesday' },
                { value: 'Thursday', label: 'Thursday' },
                { value: 'Friday', label: 'Friday' },
                { value: 'Saturday', label: 'Saturday' },
                { value: 'Sunday', label: 'Sunday' },
            ]
        },
    ];
    const handleRepeatChange = (value) => {
        setRepeat(value);
        if (value === 'Every n days') {
            setRepeatDays(7); // default repeat every 7 days
        } else {
            setRepeatDays(1); // reset repeat days to 1 for other options
        }
    }

    return (
        <Card title="Create Habit" bordered={false}
            style={{ width: 500, textAlign: 'center' }}
            onClick={(e) => {
                e.stopPropagation();
            }}>
            <Form onFinish={handleFormSubmit}>
                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-evenly' }}>
                    <Form.Item style={{ width: 400 }}>
                        <label style={{ display: 'block', textAlign: 'center', marginBottom: 0 }}>Name</label>
                        <Input value={name} onChange={(e) => setName(e.target.value)} />
                    </Form.Item>
                </div>

                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', marginTop: 20 }}>
                    <Form.Item>
                        <lable>Repeat</lable>
                        <Select value={repeat} onChange={handleRepeatChange} style={{ display: 'flex', width: 200 }}>
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
                </div>
                {repeat === 'Every n days' && (
                    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
                        <Form.Item>
                            <Input type="number" placeholder="N" value={repeatDays} onChange={(e) => setRepeatDays(e.target.value)} style={{ width: 70, height: 30 }} />
                            <span style={{ marginLeft: 10 }}>Days</span>
                        </Form.Item>
                    </div>
                )}
                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
                    <Form.Item>
                        {repeat === 'Weekly' && (
                            <Card style={{ marginTop: 0 }}>
                                <div style={{ display: 'flex', flexDirection: 'column' }}>
                                    <Checkbox.Group
                                        value={daysOfWeek}
                                        onChange={handleDaysOfWeekChange}
                                        style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}
                                    >
                                        <Checkbox value={1}>Mon</Checkbox>
                                        <Checkbox value={2}>Tue</Checkbox>
                                        <Checkbox value={3}>Wed</Checkbox>
                                        <Checkbox value={4}>Thu</Checkbox>
                                        <Checkbox value={5}>Fri</Checkbox>
                                        <Checkbox value={6}>Sat</Checkbox>
                                        <Checkbox value={7}>Sun</Checkbox>
                                    </Checkbox.Group>
                                </div>
                            </Card>
                        )}
                    </Form.Item>
                </div>

                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-evenly' }}>
                    <Form.Item style={{ marginRight: 10, marginBottom: 10 }}>
                        <label style={{ display: 'block', textAlign: 'center', marginBottom: 0 }}>Start Date</label>
                        <Input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} style={{ width: 150, marginTop: 0 }} />
                    </Form.Item>

                    <Form.Item style={{ marginBottom: 10 }}>
                        <label style={{ display: 'block', textAlign: 'center', marginBottom: 0 }}>End Date</label>
                        <Input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} style={{ width: 150, marginTop: 0 }} />
                    </Form.Item>
                </div>

                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-evenly' }}>
                    <Form.Item style={{ width: 400, marginTop: 20 }}>
                        <label style={{ display: 'block', textAlign: 'center', marginBottom: 0 }}>Description</label>
                        <Input.TextArea value={description} onChange={(e) => setDescription(e.target.value)} />
                    </Form.Item>
                </div>
                <Form.Item>
                    <Button type="primary" htmlType="submit">Create Habit</Button>
                </Form.Item>
            </Form>
        </Card >
    );
};

export default HabitCardForBooleanType;