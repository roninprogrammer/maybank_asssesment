import React from 'react';
import { Layout, Typography } from 'antd';

const { Header, Content, Footer } = Layout;

const withLayout = (Component) => (props) => (
  <Layout>
    <Header>
      <Typography.Title level={3} style={{ color: '#FFD500' }}>SMART CITY SEARCH</Typography.Title>
    </Header>
    <Content style={{ padding: '2rem' }}>
      <Component {...props} />
    </Content>
    <Footer style={{ textAlign: 'center' }}>© 2025 Vicknesh Balasubramaniam</Footer>
  </Layout>
);

export default withLayout;
