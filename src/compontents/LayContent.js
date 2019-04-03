import React, { Component } from 'react';
import {Layout,Card } from 'antd';

const { Content } = Layout;

class LayContent extends Component {

  render() {
    const{ cardTitle, cardContent } = this.props;
    return (
      <Content style={{ margin: '24px 16px' }}>
        <Card type="inner" title={cardTitle}>
          {cardContent}
        </Card>
      </Content>
    );
  }
}

export default LayContent;
