import React, { Component } from 'react'
import {Popconfirm,message, Button} from 'antd'
import { NotificationTwoTone } from '@ant-design/icons';
export default class Yh extends Component {
  render() {
    function confirm(e) {
        console.log(e);
        message.success('Click on Yes');
      }
      
      function cancel(e) {
        console.log(e);
        message.error('Click on No');
      }
    return (
      <div>
        <Button icon={<NotificationTwoTone/>}>
          <Popconfirm
            title="您收到一条新的处理信息?"
            onConfirm={confirm}
            onCancel={cancel}
            okText="处理"
            cancelText="不处理">
              +1
          </Popconfirm>
        </Button>
      </div>
    )
  }
}
