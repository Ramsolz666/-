import React, { Component } from 'react'
import { Menu} from 'antd';
import { Link } from 'react-router-dom';

const { SubMenu } = Menu;

export default class Header extends Component {
    render() {
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
                    {/* <Menu.Item key='Info' title="信息修改">
                            <Link to='./Info'>信息修改</Link>
                    </Menu.Item>
                    <Menu.Item key='Test' title="测试cookies">
                            <Link to='./Test'>测试</Link>
                    </Menu.Item> */}
                </Menu>
            </div>
        )
    }
}
