import React, { Component } from 'react'
import { Button,Descriptions, Badge, Upload,Popconfirm } from 'antd'
import { UploadOutlined } from '@ant-design/icons';
export default class Form extends Component {
  render() {
    function confirm(e) {
        console.log(e);
        window.location.href = '/Res_1';
        // <Link to='./Page'>message.success('Click on Yes')</Link>
      }
      
      function cancel(e) {
        console.log(e);
      }
    return (
      <div>
                    <Descriptions title="复核信息页面" bordered>
                    <Descriptions.Item label="房地产企业名称" span={3}>G地顺安置业有限公司</Descriptions.Item>
                    <Descriptions.Item label="项目名称">G地XXX</Descriptions.Item>
                    <Descriptions.Item  label="监管标的" span={3}>1#、3#、7#</Descriptions.Item>
                    <Descriptions.Item label="监管账户">25********71</Descriptions.Item>
                    <Descriptions.Item label="建设进度" span={2}>
                    1#已封顶，3#建至16层，7#建至15层
                    </Descriptions.Item>
                    <Descriptions.Item label="支取金额">9720000
                    </Descriptions.Item>
                    <Descriptions.Item label="用途" span={3}>调入公司基本户</Descriptions.Item>
                    <Descriptions.Item label="划入账户">24********89</Descriptions.Item>
                    <Descriptions.Item>
                    <Upload>
                        <Button icon={<UploadOutlined />} type='primary' span={3}>
                            下载申请相关的证明资料附件
                        </Button>
                    </Upload>
                    </Descriptions.Item>
                    <Descriptions.Item label="银行审核情况" span={2}>
                        <Badge status="success" text="审核通过" />
                    </Descriptions.Item>
                </Descriptions>
                <Button type='primary'>
                <Popconfirm title="是否同意?"
                      onConfirm={confirm}
                      onCancel={cancel}
                      okText="Yes"
                      cancelText="No">
                      点击复核
                    </Popconfirm>
                </Button>
      </div>
    )
  }
}
