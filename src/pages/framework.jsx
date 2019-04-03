import React, { Component,Fragment } from 'react';
import LayoutContent from '../compontents/LayoutContent';

const cardContent = <Fragment>
1.cnpm install -g create-react-app (全局下载)
<br />
2.create-react-app uiblogic (生成的项目最好不要用驼峰式命名，否则后面生成文件提示也会让改掉)
3.cd uiblogic
<br />
4.cnpm i antd --save-dev (UI组件)
<br />
5.cnpm i --save react-scripts@1.1.1(下载固定版本,方便在package.json中配置多个代理proxy)
<br />
6.cnpm i babel-plugin-import --save-dev (编译过程中将import的写法自动转换为按需引入的方式)
<br />
7.cnpm i react-router-dom --save-dev (路由)
</Fragment>;

class Framework extends Component {

componentDidMount() {
  document.title="Blogic|首页"
}

render() {
  return (
    <LayoutContent cardTitle='搭建介绍' cardContent={cardContent}/>
    )
  }
}

export default Framework;
