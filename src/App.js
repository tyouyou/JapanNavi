import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { SiderNavi } from './components/sider/sider.jsx';
import { Layout } from 'antd';
const { Header, Sider, Content, Footer } = Layout;

class App extends Component {
  render() {
    return (
        <Layout>
          <SiderNavi />
          <Layout style={{ marginLeft: 200 }}>
            <Header className="Header" > 日本网址导航 </Header>
            <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
              <div style={{ padding: 24, background: '#fff', textAlign: 'center' }}>
                Content
              </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>Footer</Footer>
          </Layout>
        </Layout>
    );
  }
}

export default App;
