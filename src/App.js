import React, { Component,Fragment } from 'react';
import { Route,Switch,NavLink } from 'react-router-dom';
import { Layout, Menu } from 'antd';
 
import Configure from './pages/configure';
import Framework from './pages/framework';
import Servers from './pages/server';

const { Header} = Layout;

class Testrouter extends Component{
    render(){
        return(
            <Fragment>
                <Header>
                    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']} style={{ lineHeight: '64px' }}>
                        <Menu.Item key="1"><NavLink to="/" exact activeClassName="active">配置</NavLink></Menu.Item>
                        <Menu.Item key="2"><NavLink to="/framework" activeClassName="active">搭建</NavLink></Menu.Item>
                        <Menu.Item key="3"><NavLink to="/servers" activeClassName="active">服务器</NavLink></Menu.Item>
                    </Menu>
                </Header>
                <Switch>
                    <Route exact path="/" component={Configure}/>
                    <Route path="/framework" component={Framework}/>
                    <Route path="/servers" component={Servers}/>
                </Switch>
            </Fragment>
        )
    }
}

export default Testrouter;