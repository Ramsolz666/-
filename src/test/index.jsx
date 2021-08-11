import React, { Component } from 'react'
import Cookies from 'js-cookie';
import Header from '../componets/Header'


export default class test extends Component {
    
    render() {
        Cookies.set('theme', 'dark');
        console.log(Cookies.get('theme'))
        return (
            <div>
                123
            </div>
        )
    }
}
