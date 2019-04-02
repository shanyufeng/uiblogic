import React, { Component } from 'react';
import { BrowserRouter,Route,Switch } from 'react-router-dom';
import Configure from './pages/configure';
import Framework from './pages/framework';
import Servers from './pages/server';

class Testrouter extends Component{
    render(){
        return(
            //BrowserRouter 只包含一个元素
            <BrowserRouter>
                <Switch>
                    <Route exact path="/configure" component={Configure}/>
                    <Route path="/framework" component={Framework}/>
                    <Route path="/servers" component={Servers}/>
                </Switch>
            </BrowserRouter>
        )
    }
}

export default Testrouter;