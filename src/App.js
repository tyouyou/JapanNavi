import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { SiderNavi } from './components/sider/sider.jsx';
import { Layout } from 'antd';
import { GeneralWeb } from './components/generalWeb/generalWeb.jsx';

const { Header, Sider, Content, Footer } = Layout;

class App extends Component {
  render() {
    return (
        <Layout>
          <SiderNavi />
          <Layout style={{ marginLeft: 200 }}>
            <Header className="Header" > 日本网址导航 </Header>
            <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
                <GeneralWeb />
            </Content>
            <Footer style={{ textAlign: 'center' }}>Footer</Footer>
          </Layout>
        </Layout>
    );
  }
}

export default App;
