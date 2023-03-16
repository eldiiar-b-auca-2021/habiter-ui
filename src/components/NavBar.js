import { Layout, Menu } from 'antd';
import { useState } from 'react';
import {
  CheckOutlined,
  UserOutlined,
  BarChartOutlined,
} from '@ant-design/icons';

const { Sider } = Layout;

const NavBar = () => {
  // const [selectedMenuKey, setSelectedMenuKey] = useState('1');

  // const handleMenuSelect = (item) => {
  //   setSelectedMenuKey(item.key);
  //   onMenuSelect(item.key);
  // };

  return (
    <Sider trigger={null} style={{ marginLeft: 0 }}>
      <div className="logo" />
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={['1']}
        // selectedKeys={[selectedMenuKey]}
        style={{ marginTop: 20 }}
        // onSelect={(item) => handleMenuSelect(item)}
        items={[
          {
            key: '1',
            icon: <UserOutlined style={{ fontSize: '32px' }} />,
            label: 'Profile',
            style: { fontSize: '24px', height: '48px' },
          },
          {
            key: '2',
            icon: <CheckOutlined />,
            label: 'Habits',
            style: { marginTop: 40 },
          },
          {
            key: '3',
            icon: <BarChartOutlined />,
            label: 'Tracker',
            style: { marginTop: 20 },
          },
        ]}
      />
    </Sider>
  );
};

export default NavBar;
