import React, { Component } from 'react';
import { BrowserRouter,Route,Switch,Redirect } from 'react-router-dom';
import Configure from './pages/configure';
import Framework from './pages/framework';
import Servers from './pages/server';

class Testrouter extends Component{
    render(){
        return(
            //BrowserRouter 只包含一个元素
            <BrowserRouter>
                <Switch>
                    <Route path="/configure" component={Configure}/>
                    <Route path="/framework" component={Framework}/>
                    <Route path="/servers" component={Servers}/>
                    <Redirect from="/" to="/configure" />
                </Switch>
            </BrowserRouter>
        )
    }
}

export default Testrouter;