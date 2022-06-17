import React, { Component } from 'react'
import {Result,Button,Typography} from 'antd'
const { Paragraph, Text } = Typography;
export default class Res extends Component {
  render() {
    return (
      <div>
          <Result
            status="success"
            title="上链成功"
            subTitle="您的申请已成功提交，将于24小时内进行初步反馈"
            extra={[
            <Button type="primary" key="console">
                查看详情
            </Button>,
            <Button key="buy">返回</Button>,
            ]}
            >
              <div>
                
                <Paragraph>
                <Text
                  strong
                  style={{
                    fontSize: 16,
                  }}
                >
          区块哈希值：
          </Text>
          d8919eaa04b0ed95c777e44fdc250ab416542da1e008eaae0fb863502d96edac</Paragraph>
                <Paragraph>
                <Text
                  strong
                  style={{
                    fontSize: 16,
                  }}
                >
          数据哈希值：
          </Text>
          d42ba3cc34f8e305c800215155203edd124304f193cf846f76eba75b4952f0cf</Paragraph>
              </div>

            </Result>
      </div>
    )
  }
}

