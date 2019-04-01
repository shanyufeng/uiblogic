import React, { Component,Fragment } from 'react';
import LayoutContent from '../compontents/LayoutContent';

const cardContent = <Fragment>
1.端口<br />
scripts->start.js 新增固定端口process.env.PORT = 8000
<br /><br />
2.入口文件<br />
config->paths.js module.exports中修改appIndexJs: resolveModule(resolveApp, 'src/index')
<br /><br />
3.标题<br />
暂用->每个页面中的componentDidMount中document.title="标题"
<br /><br />
4.运行<br />
yarn start
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
