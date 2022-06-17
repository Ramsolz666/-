import React, { Component } from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import Header from '../Header/Header';
import Background from '../Register/2.jpeg';
import '../index.css'
var sectionStyle = {
  width: "100vw",
  height: "100vw",
// makesure here is String确保这里是一个字符串，以下是es6写法
  backgroundImage: `url(${Background})`,
  // justifyContent: 'center' 
};
// wf
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
           if(values["企业统一信用代码"]==='1'){
            window.location.href='./Fdc';
           }else if(values["企业统一信用代码"]==='2'){
             
             window.location.href=''
           }

          }
      
        const  onFinishFailed = (errorInfo) => {
              console.log('Failed:', errorInfo);
          }
        return (
          <div style={sectionStyle}> 
              <Header/>
              <Form
              className='Onload'
              name="basic"
              {...formItemLayout}
              initialValues={{
                remember: true,
              }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
            >
              <Form.Item
                label="企业统一信用代码"
                name="企业统一信用代码"
                rules={[
                  {
                    required: true,
                    message: '请输入你的企业统一信用代码!',
                  },
                ]}
              >
                <Input />
              </Form.Item>
                
              <Form.Item
                label="密码"
                name="密码"
                rules={[
                  {
                    required: true,
                    message: '请输入你的密码!'
                  },
                ]}
              >
                <Input.Password />
              </Form.Item>
        
              <Form.Item
                name="记住密码"
                valuePropName="checked"
                {...formItemLayout.wrapperCol}>
                <Checkbox>记住密码</Checkbox>
              </Form.Item>
        
              <Form.Item>
                <Button type="primary" htmlType="submit">
                  登陆
                </Button>
              </Form.Item>
            </Form>
          </div>
  
          );
        };
    }







// qz
// export default class Onload extends Component {
//     render() {
//         const formItemLayout = {
//             labelCol:{
//                 span: 8,
//               },
//               wrapperCol:{
//                 span: 16,
//               }
//         };

//         const onFinish = (values) => {
//           //  login(values.username,values.password)

//           }
      
//         const  onFinishFailed = (errorInfo) => {
//               console.log('Failed:', errorInfo);
//           }
//         return (
//           <div style={sectionStyle}> 
//               <Header/>
//               <Form
//               className='Onload'
//               name="basic"
//               {...formItemLayout}
//               initialValues={{
//                 remember: true,
//               }}
//               onFinish={onFinish}
//               onFinishFailed={onFinishFailed}
//             >
//               <Form.Item
//                 label="用户名"
//                 name="用户名"
//                 rules={[
//                   {
//                     required: true,
//                     message: '请输入你的用户名!',
//                   },
//                 ]}
//               >
//                 <Input />
//               </Form.Item>
                
//               <Form.Item
//                 label="密码"
//                 name="密码"
//                 rules={[
//                   {
//                     required: true,
//                     message: '请输入你的密码!'
//                   },
//                 ]}
//               >
//                 <Input.Password />
//               </Form.Item>
        
//               <Form.Item
//                 name="记住密码"
//                 valuePropName="checked"
//                 {...formItemLayout.wrapperCol}>
//                 <Checkbox>记住密码</Checkbox>
//               </Form.Item>
        
//               <Form.Item>
//                 <Button type="primary" htmlType="submit">
//                   登陆
//                 </Button>
//               </Form.Item>
//             </Form>
//           </div>
  
//           );
//         };
//     }








