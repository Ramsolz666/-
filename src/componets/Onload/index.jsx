import React, { Component } from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import Header from '../Header';
import login from './login.js'
export default class Onload extends Component {
    render() {
        const formItemLayout = {
            labelCol:{
                span: 8,
              },
              wrapperCol:{
                span: 16,
              }
        };

        const onFinish = (values) => {
           login(values.username,values.password)

          }
      
        const  onFinishFailed = (errorInfo) => {
              console.log('Failed:', errorInfo);
          }
        return (
          <div>
              <Header/>
              <Form
              name="basic"
              {...formItemLayout}
              initialValues={{
                remember: true,
              }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
            >
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
                <Input.Password />
              </Form.Item>
        
              <Form.Item
                name="remember"
                valuePropName="checked"
                {...formItemLayout.wrapperCol}>
                <Checkbox>Remember me</Checkbox>
              </Form.Item>
        
              <Form.Item>
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
              </Form.Item>
            </Form>
          </div>
  
          );
        };
    }








