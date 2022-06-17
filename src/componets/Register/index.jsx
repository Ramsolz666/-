import React, { Component } from 'react';
import { Form, Input, Button, Popconfirm, Select, message} from 'antd';
import Header from '../Header/Header';
import '../index.css'
import Background from './2.jpeg';
// import { Link } from 'react-router-dom';
var value = '/Login';
var sectionStyle = {
  width: "100vw",
  height: "100vw",
// makesure here is String确保这里是一个字符串，以下是es6写法
  backgroundImage: `url(${Background})`,
  // justifyContent: 'center' 
};
// qz
// export default class Register extends Component {
//     render() {    
//         const formItemLayout = {
//             labelCol:{
//                 span: 8,
//               },
//               wrapperCol:{
//                 span: 16,
//               }
//         };
//         const onFinish = () => {
//           console.log(value)
//           window.location.href=value;

//          }

//         function confirm(e) {
//           console.log(e);
//           window.location.href = value;
//           // <Link to='./Page'>message.success('Click on Yes')</Link>
//         }
        
//         function cancel(e) {
//           console.log(e);
//         }
//         function select(e){
//           value = e;
//           // message.success(value);
//         }

//         //信息错误返回
//         const  onFinishFailed = (errorInfo) => {
//               console.log('Failed:', errorInfo);
//           }
//         //渲染dom
//         return (
//           <div>        
//             <Header/>
//             <Form
//               className='register'
//               name="basic"
//               {...formItemLayout}
//               initialValues={{
//                 remember: true,
//               }}
//               onFinish={onFinish}
//               onFinishFailed={onFinishFailed}>      
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
//                     message: '请输入你的密码!',
//                   },
//                 ]}
//               >
//                 <Input />
//               </Form.Item>
//               <Form.Item
//                 label="手机号"
//                 name="手机号"
//                 rules={[
//                   {
//                     required: true,
//                     message: '请输入你的手机号!',
//                   },
//                 ]}
//               >
//                 <Input />
//               </Form.Item>
//               <Form.Item
//                 label="邮箱"
//                 name="邮箱"
//                 rules={[
//                   {
//                     required: true,
//                     message: '请输入你的邮箱!',
//                   },
//                 ]}
//               >
//                 <Input />
//               </Form.Item>
//               <Form.Item label='角色' name='角色'
//               rules={[
//                 {
//                   require:true,
//                   message:'下拉选择',
//                 },
//               ]}>
//                 <Select onSelect={select}>
//                   <Select.Option value="/Fdc" style={{textAlign:'center'}}>预购方</Select.Option>
//                   <Select.Option value="/Yh" style={{textAlign:'center'}}>监管银行</Select.Option>
//                   <Select.Option value="3" style={{textAlign:'center'}}>政府部门</Select.Option>
//                   <Select.Option value="4" style={{textAlign:'center'}}>房地产企业</Select.Option>
//                 </Select>
//               </Form.Item>
        
//               {/* <Form.Item
//                 name="remember"
//                 valuePropName="checked"
//                 {...formItemLayout.wrapperCol}>
//                 <Checkbox className='ok'>Remember me</Checkbox>
//               </Form.Item>               */}
//               <Form.Item> 
             
//                 <Button type="primary" htmlType="submit">
//                     {/* <Link to='/Page'>注册</Link> */}
//                       <Popconfirm title="是否确定注册?"
//                       onConfirm={confirm}
//                       onCancel={cancel}
//                       okText="Yes"
//                       cancelText="No">
//                       <a href='www.baidu.com'>注册</a>
//                     </Popconfirm>
                    
//                 </Button>
//               </Form.Item>
//             </Form>
//             </div>
 
//           );
//         };
//     }
// wf
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
        const onFinish = () => {
          console.log(value)
          window.location.href=value;

         }

        function confirm(e) {
          console.log(e);
          window.location.href = value;
          // <Link to='./Page'>message.success('Click on Yes')</Link>
        }
        
        function cancel(e) {
          console.log(e);
        }
        function select(e){
          value = e;
          // message.success(value);
        }

        //信息错误返回
        const  onFinishFailed = (errorInfo) => {
              console.log('Failed:', errorInfo);
          }
        //渲染dom
        return (
          <div style={sectionStyle}>        
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
              <Form.Item label='角色' name='角色'
                rules={[
                  {
                    require:true,
                    message:'下拉选择',
                  },
                ]}>
                  <Select onSelect={select}>
                    <Select.Option value="/Update" style={{textAlign:'center'}}>中小型房地产企业</Select.Option>
                    <Select.Option value="/Search" style={{textAlign:'center'}}>银行机构</Select.Option>
                  </Select>
              </Form.Item>  
              <Form.Item
                label="企业名称"
                name="企业名称"
                rules={[
                  {
                    required: true,
                    message: '请输入你的企业名称',
                  },
                ]}
              >
                <Input />
              </Form.Item>
                
              <Form.Item
                label="企业统一社会信用代码"
                name="企业统一社会信用代码"
                rules={[
                  {
                    required: true,
                    message: '请输入你的企业统一社会信用代码!',
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="企业联系电话"
                name="企业联系电话"
                rules={[
                  {
                    required: true,
                    message: '请输入你的企业联系电话!',
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="企业联系邮箱"
                name="企业联系邮箱"
                rules={[
                  {
                    required: true,
                    message: '请输入你的企业联系邮箱!',
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
                label="确认密码"
                name="确认密码"
                rules={[
                  {
                    required: true,
                    message: '请输入你的密码!'
                  },
                ]}
              >
                <Input.Password />
              </Form.Item>
              <Form.Item> 
             
                <Button type="primary" htmlType="submit">
                    {/* <Link to='/Page'>注册</Link> */}
                      <Popconfirm title="是否确定注册?"
                      onConfirm={confirm}
                      onCancel={cancel}
                      okText="Yes"
                      cancelText="No">
                      <a href='www.baidu.com'>注册</a>
                    </Popconfirm>
                    
                </Button>
              </Form.Item>
            </Form>
            </div>
 
          );
        };
    }








