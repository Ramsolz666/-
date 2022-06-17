import React, { Component } from 'react'
import Web3 from 'web3';
import { Form, Input, Button, Select,Checkbox, message } from 'antd';
import datajson from '/Users/mac/Desktop/myapp/src/web3/account.json'
var web3 = new Web3(Web3.givenProvider);
var account;
var mycontract;
export default class Update extends Component {
  constructor (){
    web3.eth.getAccounts((function (err,accounts) {
      account = accounts;
      mycontract = new web3.eth.Contract(datajson,"0x2415cec8CBBe4116FCA3db773D4b76581B446511")
      // console.log(mycontract)
    }))
    super();
  }

  change=()=>{
    var d1 = new Date();
    var t1 = d1.getTime();
    mycontract.methods.uploadInfo(1,[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17]).send({from:account[0]},function(err,res) {
      console.log(res)
      var d2 = new Date();
      var t2 = d2.getTime();
      console.log(t2-t1)
    })
  }

  render() {
    return (
      <Form>
        <h1 style={{textAlign:'center',color:'blue'}}>上传信用信息</h1>
        <Form.Item
        label="年份"
        name="年份"
        rules={[{ required: true, message: '请输入年份' }]}>
        <Input style={{width:'30vw'}} />
        </Form.Item>
        <Form.Item
        label="企业统一社会信用代码"
        name="企业统一社会信用代码"
        rules={[{ required: true, message: '请输入你的企业统一社会信用代码!' }]}>
        <Input style={{width:'50vw'}} />
        </Form.Item>
        <Form.Item>
          <span style={{border: '5px solid rgba(140, 140, 140, 0.35)',fontSize:'20px',}}  >企业外部环境 </span>
          <Input.Group>
          企业所在城市GDP（亿元）<input/>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;企业所在城市商品房销售面积（万平方米）<input/>
          </Input.Group>
          <Input.Group>
          国房景气指数 &nbsp;&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;<input/>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;企业所在城市商品房竣工面积（万平方米）<input/>
          </Input.Group>
          国家行业政策
          <Input/>
            <br/>
          所在城市行业政策<Input/>
        </Form.Item>
        <Form.Item>
          <span style={{border: '5px solid rgba(140, 140, 140, 0.35)',fontSize:'20px',}}  >企业基本特征 </span>
          <Input.Group>
          员工数量（人）<input/>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;本科以上学历高管人数（人）<input/>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;高管总人数（人）<input/>
          </Input.Group>
          纳税等级<Input/>
        </Form.Item>
        <Form.Item>
          <span style={{border: '5px solid rgba(140, 140, 140, 0.35)',fontSize:'20px',}}  >企业财务状况 </span>
          <Input.Group>
          净资产收益率<input/>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;营业收入增长率<input/>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;资产负债率<input/>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;每股净资产增长率<input/>
          </Input.Group>
          <Input.Group>
          总资产周转率<input/>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;营业利润增长率<input/>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;应收账款周转率<input/>
          {/* &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;每股净资产增长率<input/> */}
          </Input.Group>
         <br/>
         <Form.Item
                name="记住密码"
                valuePropName="checked"
                
                >
                  <div>------------------------------------------------------------------------------------------------------------------------------------</div>
                <Checkbox style={{textAlign:'center'}}>我已仔细检查，对信息真实性负责，并承担信息造假的后果</Checkbox>
          </Form.Item>
        </Form.Item>
        <Form.Item
        style={{textAlign:'center'}}
        >
          <Button type='primary' onClick={this.change}>信息上传</Button>
        </Form.Item>

     
      </Form>
    )
  }
}
