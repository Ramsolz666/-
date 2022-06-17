import axios from 'axios'; 
// import Cookies from 'js-cookie';

import { message } from 'antd';
export default function login(username,password) {   
    axios.get(`http://127.0.0.1:5052/http/query?1=${username}&2=${password}`)
        .then(function (response) {
            if(response.status===200&&response.data===0){
                message.success('登陆成功')
                // Cookies.set('uid', username);
                window.location.href='/'}
            else{message.error('登录失败')}; 
        })
        .catch(function (error) {
            message.error(error)
        });     
    }



