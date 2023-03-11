import {
  CheckOutlined,
  UserOutlined,
  BarChartOutlined,
} from '@ant-design/icons';
import { Layout, Menu } from 'antd';
const { Sider } = Layout;
const NavBar = () => {
  return (
    <Sider trigger={null}>
      <div className="logo" />
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={['1']}
        style={{ marginTop: 20 }}
        items={[
          {
            key: '1',
            icon: <UserOutlined style={{ fontSize: '32px' }} />,
            label: 'Profile',
            style: { fontSize: '24px', height: '48px' }
          },
          {
            key: '2',
            icon: <CheckOutlined />,
            label: 'Habits',
            style: { marginTop: 40 }
          },
          {
            key: '3',
            icon: <BarChartOutlined />,
            label: 'Tracker',
            style: { marginTop: 20 }
          },
        ]}
      />
    </Sider>

  );
};
export default NavBar;
