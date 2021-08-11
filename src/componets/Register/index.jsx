import React, { Component } from 'react';
import { Form, Input, Button, Checkbox, Select,Popconfirm, message} from 'antd';
import Header from '../Header';
import '../index.css'

export default class Register extends Component {

    render() {    
        const formItemLayout = {
            labelCol:{
                span: 8,
              },
              wrapperCol:{
                span: 16,
              }
        };


        //提交信息到服务器
       const onFinish = (values) => {
          var xmlhttp=new XMLHttpRequest();
          xmlhttp.open("GET","http://127.0.0.1:5052/http/query?"+'2='+values.password+'&'+'3='+values.username+'&'
          +'4='+values.phone+'&'+'5='+values.mail+'&'+'6='+values.select,true);
          xmlhttp.send();         
           message.loading('成功提交到服务器，注册中',0.5)
          setTimeout(    
              function(){
            if (xmlhttp.readyState===4 && xmlhttp.status===200){
              console.log('ok')
              message.success('注册成功，你的Id为'+xmlhttp.responseText).then(
                setTimeout( window.location.href='/'),5000)
                }
              else{
                message.error('注册失败')
              }
          } , 1000);      
        }

        //信息错误返回
        const  onFinishFailed = (errorInfo) => {
              console.log('Failed:', errorInfo);
          }
        //渲染dom
        return (
          <div>        
            <Header/>
            <Form
              className='register'
              name="basic"
              {...formItemLayout}
              initialValues={{
                remember: true,
              }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}>      
              <Form.Item
                label="Username"
                name="username"
                rules={[
                  {
                    required: true,
                    message: 'Please input your username!',
                  },
                ]}
              >
                <Input />
              </Form.Item>
                
              <Form.Item
                label="Password"
                name="password"
                rules={[
                  {
                    required: true,
                    message: 'Please input your password!',
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Phone"
                name="phone"
                rules={[
                  {
                    required: true,
                    message: 'Please input your password!',
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Mail"
                name="mail"
                rules={[
                  {
                    required: true,
                    message: 'Please input your password!',
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item label='Select' name='select'>
                <Select>
                  <Select.Option value="buyer" style={{textAlign:'center'}}>买家</Select.Option>
                  <Select.Option value="seller" style={{textAlign:'center'}}>卖家</Select.Option>
                </Select>
              </Form.Item>
        
              <Form.Item
                name="remember"
                valuePropName="checked"
                {...formItemLayout.wrapperCol}>
                <Checkbox className='ok'>Remember me</Checkbox>
              </Form.Item>              
              <Form.Item>               
              <Button type="primary" htmlType="submit">
                  注册
              </Button>

              </Form.Item>
            </Form>
            </div>
 
          );
        };
    }








