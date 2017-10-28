import React from 'react';
import { Collapse } from 'antd';
const Panel = Collapse.Panel;


export class GeneralWeb extends React.Component {
  render() {
    return (
      <Collapse bordered={false} defaultActiveKey={['1', '2', '3']}>
        <Panel header="生活" key="1">
          <a href="https://www.yahoo.co.jp/">日本雅虎首页</a>
        </Panel>
        <Panel header="购物" key="2">
          <a href="https://www.amazon.co.jp/">日本亚马逊</a>
        </Panel>
        <Panel header="娱乐" key="3">
          <a href="https://www.happyon.jp">HULU</a>
        </Panel>
      </Collapse>
    );
  }
}
