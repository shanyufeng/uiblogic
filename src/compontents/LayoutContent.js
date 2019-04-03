import React, { Component } from 'react';
import {Layout } from 'antd';
import LayHeader from './LayHeader';
import LayContent from './LayContent';

class LayoutContent extends Component {

  render() {
    return (
      <Layout className="layout">
        <LayHeader />
        {/* 通过...ES6属性扩展运算符进行属性传递，方便属性扩展及删除操作 */}
        <LayContent {...this.props} />
      </Layout>
    );
  }
}

export default LayoutContent;
