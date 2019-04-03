import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import {Layout,Menu } from 'antd';

const { Header } = Layout;
const tarbarArr = [
  {
    text:'配置',
    link:'/configure'
  },
  {
    text:'搭建',
    link:'/framework'
  },
  {
    text:'服务器',
    link:'/servers'
  }
];

class LayHeader extends Component {
  constructor(props){
    super(props);
    this.state = {
      index : '/configure'
    };
  }

  //组件初始化时只调用,以后组件更新不调用,整个生命周期只调用一次,此时可以修改state
  componentWillMount(){
    let pathname = window.location.href; //获取当前URL
    this.setState({
      index : pathname.substring(pathname.lastIndexOf("/"), pathname.length)
    });
  }

  render() {
    const{ index } = this.state;
    const url = window.location.href;
    return (
      <Header>
        <Menu theme="dark" mode="horizontal" selectedKeys={[index]} style={{ lineHeight: '64px' }}>
          {
            tarbarArr.map((item,i) => (
              <Menu.Item key={item.link}><NavLink to={item.link} activeClassName={ url.indexOf(item.link)>-1 ? "active" : ""} > {item.text} </NavLink> </Menu.Item>
            ))
          }
        </Menu>
      </Header>
    );
  }
}

export default LayHeader;
