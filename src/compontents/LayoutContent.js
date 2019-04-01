import React, { Component } from 'react';
import {Layout,Card } from 'antd';

const { Content } = Layout;

class LayoutContent extends Component {
  render() {
    const{cardTitle,cardContent} = this.props;
    return (
      <Layout className="layout">
        <Content style={{ margin: '24px 16px' }}>
          <Card type="inner" title={cardTitle}>
            {cardContent}
          </Card>
        </Content>
      </Layout>
    );
  }
}

export default LayoutContent;
