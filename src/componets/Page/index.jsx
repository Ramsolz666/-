import React, { Component } from 'react';
import Header from '../Header/Header';
import '../index.css'
import Background from './1.png';
import InfiniteScroll from 'react-infinite-scroll-component';
import { List, Skeleton, Divider, Button  } from 'antd';
var sectionStyle = {
    width: "100vw",
    height: "50vw",
  // makesure here is String确保这里是一个字符串，以下是es6写法
    backgroundImage: `url(${Background})`,
    justifyContent: 'center' 
  };
const data = [
'中小型房地产企业名单',
'------------------------------------------',
'A',
'B'
];

export default class index extends Component { 

    render() {   
        // console.log(json)
        return (
        <div style={sectionStyle}>
            <Header/>
            <h1 style={{color:'blue',textAlign: 'center'}}>中小型房地产企业融资征信平台</h1>
            <div
      id="scrollableDiv"
      style={{
        height: 500,
        width: "30vw",
        overflow: 'auto',
        position: "fixed",
        padding: '0 16px',
        border: '5px solid rgba(140, 140, 140, 0.35)',
      }}>
        <InfiniteScroll
        dataLength={data.length}
        // next={loadMoreData}
        hasMore={data.length < 50}
        loader={<Skeleton avatar paragraph={{ rows: 1 }} active />}
        endMessage={<Divider plain>It is all, nothing more 🤐</Divider>}
        scrollableTarget="scrollableDiv">
        <List
          dataSource={data}
          renderItem={item => <List.Item>{item}</List.Item>}
        />
        </InfiniteScroll>
    </div>
      <div style={{
        height: 500,
        width: "30vw",
        // overflow: 'auto',
        right:"300px",
        position: "fixed",
        padding: '0 16px',
        // border: '1px solid rgba(140, 140, 140, 0.35)',
      }}>
          <Button type='primary' size='large' onClick={()=>{window.location.href='./Register'}} style={{top:"100px",left:"25px",position:'absolute'}}>用户注册  </Button>
          <Button type='primary' size='large' onClick={()=>{window.location.href='./Update'}} style={{top:"100px",left:"175px",position:'absolute'}}>企业信用信息上传</Button>
          <Button type='primary' size='large' onClick={()=>{window.location.href='./Login'}} style={{top:"200px",left:"25px",position:'absolute'}}>用户登录</Button>
          <Button type='primary' size='large' onClick={()=>{window.location.href='./search'}} style={{top:"200px",left:"170px",position:'absolute'}}>企业信用信息查询</Button>

          </div>
    
            
</div>

        )
    }
}
