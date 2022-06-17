import React, { Component } from 'react'
import { Menu} from 'antd';
import { Link } from 'react-router-dom';

const { SubMenu } = Menu;

export default class Fdcheader extends Component {
    render() {
        var str=window.location.href; 
        var result;
        var res;
        if(str.search('Fdc')){
            res = '/Fdc';
            result = '房地产';
        }
        else if(str.search('Yh')){
            res = '/Yh';
            result = '银行';
        }

        return (
            <div>
                <Menu mode="horizontal">
                    <Menu.Item>
                            <Link to='./Page'>平台首页</Link>
                    </Menu.Item>  
                    <SubMenu key="SubMenu" title="用户登录">
                    <Menu.ItemGroup >
                        <Menu.Item key="setting:1" ><Link to='/Register'> 注册</Link></Menu.Item>
                        <Menu.Item key="setting:1"><Link to='/Login'> 登录</Link></Menu.Item>
                    </Menu.ItemGroup>                    
                    </SubMenu>
                    <Menu.Item key='Info' title="信息上传">
                            <Link to={res}>{result}</Link>
                    </Menu.Item>
                    {/* <Menu.Item key='Test' title="测试cookies">
                            <Link to='./Test'>测试</Link>
                    </Menu.Item> */}
                </Menu>
            </div>
        )
    }
}
// import React, { Component } from 'react'

// export default class Fdcheader extends Component {
//   render() {
//     return (
//       <div>index</div>
//     )
//   }
// }
