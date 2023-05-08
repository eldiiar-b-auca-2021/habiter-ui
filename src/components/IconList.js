import { Row, Col, Typography } from 'antd';
import { RunningOutlined, MehOutlined, RocketOutlined } from '@ant-design/icons';
import runningImg from '../pngs/running.png';
import meditatingImg from '../pngs/meditating.png';
import cycling from '../pngs/cycling.png';
import readingImg from '../pngs/reading.jpg'
const { Title } = Typography;

const IconList = () => {
    return (
        <div style={{ marginTop: 50 }}>
            <Title level={3} style={{
                color: '#0077be',
                fontSize: '36px',
                fontWeight: 'bold',
                textAlign: 'center',
                textShadow: '2px 2px 4px #000000',
                letterSpacing: '2px',
                marginBottom: '20px'
            }}>
                Create a Habit
            </Title>
            <Row gutter={[4, 4]}>
                <Col span={24}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '10px' }}>
                        <img src={runningImg} style={{ width: '50px', height: '50px' }} />
                        <div style={{
                            marginLeft: '10px',
                            color: '#1a237e',
                            fontFamily: 'Verdana, sans-serif',
                            fontSize: '24px',
                            textShadow: '2px 2px 5px rgba(0,0,0,0.5)',
                            textTransform: 'uppercase',
                            letterSpacing: '2px',
                            lineHeight: '1.2'
                        }}>Running</div>
                    </div>
                </Col>
                <Col span={24}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '10px' }}>
                        <img src={meditatingImg} style={{ width: '50px', height: '50px' }} />
                        <div style={{
                            marginLeft: '10px',
                            color: '#1a237e',
                            fontFamily: 'Verdana, sans-serif',
                            fontSize: '24px',
                            textShadow: '2px 2px 5px rgba(0,0,0,0.5)',
                            textTransform: 'uppercase',
                            letterSpacing: '2px',
                            lineHeight: '1.2'
                        }}>Meditating</div>
                    </div>
                </Col>
                <Col span={24}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '10px' }}>
                        <img src={cycling} style={{ width: '50px', height: '50px' }} />
                        <div style={{
                            marginLeft: '10px',
                            color: '#1a237e',
                            fontFamily: 'Verdana, sans-serif',
                            fontSize: '24px',
                            textShadow: '2px 2px 5px rgba(0,0,0,0.5)',
                            textTransform: 'uppercase',
                            letterSpacing: '2px',
                            lineHeight: '1.2'
                        }}>Cycling</div>
                    </div>
                </Col>
                <Col span={24}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '10px' }}>
                        <img src={readingImg} style={{ width: '50px', height: '50px', backgroundColor: '#F5F5F5', }} />
                        <div style={{
                            marginLeft: '10px',
                            color: '#1a237e',
                            fontFamily: 'Verdana, sans-serif',
                            fontSize: '24px',
                            textShadow: '2px 2px 5px rgba(0,0,0,0.5)',
                            textTransform: 'uppercase',
                            letterSpacing: '2px',
                            lineHeight: '1.2'
                        }}>Reading</div>
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default IconList;
