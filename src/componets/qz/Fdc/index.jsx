import React, { Component } from 'react'
// 没办法技术有限，期待用redux
import Fdcheader from '../../Header/Fdcheader'
import {Button, Input, Upload} from 'antd'
import '../../index.css'
import { UploadOutlined } from '@ant-design/icons';
import Background from './1.png';
var sectionStyle = {
  width: "100%",
  height: "auto",
// makesure here is String确保这里是一个字符串，以下是es6写法
  backgroundImage: `url(${Background})`
};
export default class Fdc extends Component {
  render() {
    return (
      <div >
        <Fdcheader/>
        <Input addonBefore='房地产企业名称' placeholder='房地产企业名称' />
        <Input addonBefore='项目名称' placeholder='项目名称'/>
        <Input addonBefore='监管标的' placeholder='监管标的'/>
        <Input addonBefore='监管账户' placeholder='监管账户'/>
        <Input addonBefore='建设进度' placeholder='建设进度'/>
        <Input addonBefore='支取金额' placeholder='支取金额'/>
        <Input addonBefore='用途' placeholder='用途'/>
        <Input addonBefore='调入账户' placeholder='调入账户'/>
        <Upload>
          <Button icon={<UploadOutlined />}>
            上传申请相关的证明资料附件
          </Button>
        </Upload>
        <Button type='primary' htmlType="submit">上传</Button>
        </div>
    )
  }
}
