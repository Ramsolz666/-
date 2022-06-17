import { Button, Form, message } from 'antd'
import Input from 'rc-input'
import Web3 from 'web3';
import React, { Component } from 'react'
import datajson from '/Users/mac/Desktop/myapp/src/web3/account.json'
var web3 = new Web3(Web3.givenProvider);
var account;
var mycontract;
var year='';
var id='';
export default class Search extends Component {
  constructor (){
    web3.eth.getAccounts((function (err,accounts) {
      account = accounts;
      mycontract = new web3.eth.Contract(datajson,"0x2415cec8CBBe4116FCA3db773D4b76581B446511")
      console.log(mycontract)
    }))
    super();
  }
  change=()=>{
    var d1 = new Date();
    var t1 = d1.getTime();
    mycontract.methods.rank(2016,'002133').call({from:account[0]},function (err,res) {

        message.success('排名为:'+res[1])
        var d2 = new Date();
        var t2 = d2.getTime();
        console.log(t2-t1)
    }
      )

  }
  render() {
    function get(e){
      year += e.nativeEvent.data
      // console.log(year)
    }
    function get1(e){
      id += e.nativeEvent.data
      // console.log(year)
    }
    return (
      <Form style={{borderTop:'500px'}}>
          <h1 style={{textAlign:'center',color:'blue'}}>查询信用信息</h1>
          <Form.Item style={{textAlign:'center'}}>
              <Input addonBefore='拟查询企业名称'/>
          </Form.Item>
          <Form.Item style={{textAlign:'center'}}>
              <Input addonBefore='拟查询企业统一社会信用代码/股票代码' onChange={get1}/>
          </Form.Item>
          <Form.Item style={{textAlign:'center'}}>
              <Input addonBefore='拟查询年份' onChange={get}/>
          </Form.Item>
          <Form.Item
          style={{textAlign:'center'}}>
              <Button type='primary' onClick={this.change}>
                  信息查询
              </Button>
          </Form.Item>
      </Form>
    )
  }
}
