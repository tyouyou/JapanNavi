import React from 'react';
import { Layout, Menu, Icon } from 'antd';
const { Header, Sider, Content } = Layout;

export class SiderNavi extends React.Component {
  state = {
    collapsed: false,
  };
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }
  render() {
    return (
        <Sider style={{ overflow: 'auto', height: '100vh', position: 'fixed', left: 0 }}>
           <div className="logo" />
           <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
             <Menu.Item key="1">
               <Icon type="plus" />
               <span className="nav-text">留学</span>
             </Menu.Item>
             <Menu.Item key="2">
               <Icon type="plus" />
               <span className="nav-text">工作</span>
             </Menu.Item>
             <Menu.Item key="3">
               <Icon type="plus" />
               <span className="nav-text">旅游</span>
             </Menu.Item>
             <Menu.Item key="4">
               <Icon type="plus" />
               <span className="nav-text">生活</span>
             </Menu.Item>
           </Menu>
         </Sider>
    );
  }
}
