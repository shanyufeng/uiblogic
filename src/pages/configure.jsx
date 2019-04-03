import React, { Component,Fragment } from 'react';
import LayoutContent from '../compontents/LayoutContent';

const cardContent = <Fragment>
1.代理<br />
若为单一代理,在package.json中可配置"proxy":"http://xxx",多个代理react-scripts的版本要修改为1.1.1,即配置"proxy":为对象(花括号形式配置)
<br /><br />
2.标题<br />
暂用->每个页面中的componentDidMount中document.title="标题"
<br /><br />
3.win->默认端口修改<br />
在package.json中start命令修改为set PORT=8090 && react-scripts start
<br /><br />
4.mac->默认端口修改<br />
在package.json中start命令修改为PORT=5000 react-scripts start
<br /><br />
5.运行<br />
npm run start
<br /><br />
</Fragment>;

class Configure extends Component {

componentDidMount() {
  document.title="Blogic|配置"
}

render() {
  return (
    <LayoutContent cardTitle='配置介绍' cardContent={cardContent}/>
    )
  }
}

export default Configure;
