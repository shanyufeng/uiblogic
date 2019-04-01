import React, { Component } from 'react';
import LayoutContent from '../compontents/LayoutContent';
import { Table } from 'antd';

const { Column } = Table;

class Servers extends Component {

constructor(props){
  super(props);
  this.state = {
      evevtdata:[]
  };
  this.getApplicationEvent = this.getApplicationEvent.bind(this);
  this.getEventData = this.getEventData.bind(this);
}

componentDidMount() {
  document.title="Blogic|用户";
  this.getApplicationEvent();
}

//获取事务排行
getApplicationEvent(){
  fetch('/api/monitor/v1/application/transaction/top/value?application=dev_bcm&from=0&to=1544583262000', {
      credentials: 'same-origin',
      method: 'GET'
  })
  .then((res) => res.json())
  .then((data) => {
      let evevtdata = data.message.byload;
      this.getEventData(evevtdata);
  }).catch((err) => console.log(err.toString()));
}

//重新组成table-evet数据格式
getEventData(data){
  const newData= [];
  Object.keys(data).forEach((item,i) => {
    data[item]["key"]=`EVENT_ID_${i}`;
    data[item]["name"] = item.substring(1,item.indexOf(","));
    newData.push(data[item]);
  });
  this.setState({ evevtdata: newData });
}

render() {
    const tableContent = <Table dataSource={this.state.evevtdata} pagination={false}>
    <Column title="名称" dataIndex="name" key="name" width='40%' />
    <Column title="load" dataIndex="load" key="load" width='15%' defaultSortOrder={'descend'} 
    sorter={ (a, b) => a.load - b.load } />
    <Column title="min" dataIndex="resp" key="resp" width='15%' />
    <Column title="min/load" dataIndex="load/min" key="load/min" width='15%' />
    <Column title="操作" dataIndex="action" key="action" width='15%' 
          render={() => (
                <a href="http://localhost:3000/servers">删除</a>
            )}
      />
  </Table>;

  return (
    <LayoutContent cardTitle='服务器链接' cardContent={tableContent}/>
  )
  }
}

export default Servers;
