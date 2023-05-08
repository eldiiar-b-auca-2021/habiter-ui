import { Layout, Menu, Card, Button, Avatar } from 'antd';
import { useState, useEffect } from 'react';
import {
  CheckOutlined,
  UserOutlined,
  BarChartOutlined,
  SyncOutlined,
  DownOutlined,
  UpOutlined
} from '@ant-design/icons';
import { Upload } from 'antd';
const { Sider } = Layout;

const NavBar = ({ handleHabitSelect }) => {
  const [collapsed, setCollapsed] = useState(false);
  const [selectedMenuKey, setSelectedMenuKey] = useState('1');
  const [userFullName, setUserFullName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [showProfileDetails, setShowProfileDetails] = useState(false);
  const [userImage, setUserImage] = useState(null);
  //retrieve user email and full name from local storage
  useEffect(() => {
    const fullName = window.localStorage.getItem('fullName');
    const email = window.localStorage.getItem('email');
    setUserFullName(fullName ?? '');
    setUserEmail(email ?? '');
  }, []);


  const handleMenuSelect = (item) => {
    setSelectedMenuKey(item.key);
    setShowProfileDetails(item.key === '1');

    if (item.key === '1') {
      handleHabitSelect(1);
    } else if (item.key === '2') {
      handleHabitSelect(2);
    } else if (item.key === '3') {
      handleHabitSelect(3)
    } else if (item.key === '4') {
      handleHabitSelect(4)
    } else if (item.key === '5') {
      handleHabitSelect(5)
    }
  };

  const handleSignOut = () => {
    // clear local storage and navigate to sign in page
    localStorage.clear();
    window.location.href = '/signin';
  };

  const toggleProfileDetails = () => {
    setShowProfileDetails(!showProfileDetails);
  }

  return (
    <Sider collapsible collapsed={collapsed} onCollapse={setCollapsed} style={{ marginLeft: 0 }}>
      <div className="logo" />
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={['1']}
        selectedKeys={[selectedMenuKey]}
        style={{ marginTop: 20 }}
        onSelect={(item) => handleMenuSelect(item)}
      >
        <Menu.Item
          key="1"
          // icon={<UserOutlined style={{ fontSize: '32px' }} />}
          style={{
            fontSize: '24px',
            height: '48px',
            display: 'flex',
            alignItems: 'center',
            fontWeight: selectedMenuKey === '1' ? 'bold' : 'normal',
          }}
        >
          <Avatar size={40} icon={<UserOutlined style={{ fontSize: '20px' }} />} style={{ marginRight: '3px' }} />
          Profile
          {showProfileDetails ? (
            <UpOutlined
              onClick={toggleProfileDetails}
              style={{ marginLeft: 8 }}
            />
          ) : (
            <DownOutlined
              onClick={toggleProfileDetails}
              style={{ marginLeft: 8 }}
            />
          )}
        </Menu.Item>

        {showProfileDetails && (
          <Card
            style={{
              backgroundColor: '#F5F5F5',
              marginTop: '0px',
              padding: '20px',
              borderRadius: '8px',
              border: 'none',
              fontFamily: 'Arial, sans-serif',
              boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'column',
            }}
          >

            <div style={{ marginBottom: "12px" }}>
              <p style={{ fontSize: "1rem", fontWeight: "bold", color: "#333333", marginBottom: "4px" }}>
                Fullname:
              </p>
              <p style={{ fontSize: "1rem", color: "#666666", margin: 0, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                <span style={{ '@media (max-width: 400px)': { fontSize: '0.8rem' } }}>
                  {userFullName}
                </span>
              </p>
            </div>
            <div style={{ marginBottom: "24px" }}>
              <p style={{ fontSize: "1rem", fontWeight: "bold", color: "#333333", marginBottom: "4px" }}>
                Email:
              </p>
              <p style={{ fontSize: "1rem", color: "#666666", margin: 0, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                <span style={{ '@media (max-width: 400px)': { fontSize: '0.8rem' } }}>
                  {userEmail}
                </span>
              </p>
            </div>

            <Button
              key="sign-out"
              type="primary"
              onClick={handleSignOut}
              style={{ marginTop: '10px', width: '100%' }}
            >
              Sign Out
            </Button>
          </Card>
        )}

        <Menu.Item
          key="3"
          icon={<SyncOutlined style={{ fontSize: '32px' }} />}
          style={{
            fontSize: '24px',
            height: '48px',
            fontWeight: selectedMenuKey === '3' ? 'bold' : 'normal',
            marginTop: '40px',
          }}
        >
          Process
        </Menu.Item>
        <Menu.Item
          key="4"
          icon={<CheckOutlined style={{ fontSize: '32px' }} />}
          style={{
            fontSize: '24px',
            height: '48px',
            fontWeight: selectedMenuKey === '4' ? 'bold' : 'normal',
            marginTop: '40px',
          }}
        >
          Habits
        </Menu.Item>
        <Menu.Item
          key="5"
          icon={<BarChartOutlined style={{ fontSize: '32px' }} />}
          style={{
            fontSize: '24px',
            height: '48px',
            fontWeight: selectedMenuKey === '5' ? 'bold' : 'normal',
            marginTop: '40px',
          }}
        >
          Analytics
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default NavBar;
