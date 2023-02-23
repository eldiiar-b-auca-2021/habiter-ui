import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import React from 'react';
const { Sider } = Layout;
const NavigationBar = () => {
<<<<<<< HEAD
    return (
        <Sider
            breakpoint="lg"
            collapsedWidth="0"
            onBreakpoint={(broken) => {
                console.log(broken);
            }}
            onCollapse={(collapsed, type) => {
                console.log(collapsed, type);
            }}
        >
            <div className="logo" />
            <Menu
                theme="dark"
                mode="inline"
                defaultSelectedKeys={['4']}
                items={[UserOutlined, VideoCameraOutlined, UploadOutlined, UserOutlined].map(
                    (icon, index) => ({
                        key: String(index + 1),
                        icon: React.createElement(icon),
                        label: `nav ${index + 1}`,
                    }),
                )}
            />
        </Sider>
    );
=======
  return (
    <Sider
      breakpoint="lg"
      collapsedWidth="0"
      onBreakpoint={(broken) => {
        console.log(broken);
      }}
      onCollapse={(collapsed, type) => {
        console.log(collapsed, type);
      }}
    >
      <div className="logo" />
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={['4']}
        items={[UserOutlined, VideoCameraOutlined, UploadOutlined, UserOutlined].map(
          (icon, index) => ({
            key: String(index + 1),
            icon: React.createElement(icon),
            label: `nav ${index + 1}`,
          }),
        )}
      />
    </Sider>
  );
>>>>>>> 431a2deb2b0ce2847e5744295c2ee4d8d4e6b231
};
export default NavigationBar;