import React, { Component,Fragment } from 'react';
import LayoutContent from '../compontents/LayoutContent';

const cardContent = <Fragment>
1.yarn create react-app uiblogic (生成的项目最好不要用驼峰式命名，否则后面生成文件提示也会让改掉)
<br />
2.cd uiblogic
<br />
3.yarn add antd --save-dev (UI组件)
<br />
4.yarn eject (单向不可逆,谨慎使用 生成webpack可配置文件)
<br />
5.yarn add babel-plugin-import --save-dev (编译过程中将import的写法自动转换为按需引入的方式)
<br />
6.yarn add react-router-dom --save-dev (路由)
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
