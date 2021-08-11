import { Table, Tag, Menu,Popconfirm} from 'antd';
import React, { Component } from 'react';
import axios from 'axios';
import Header from '../Header';
import '../index.css'

const {column}=Table;
const { SubMenu } = Menu;  
const data1=[
    {
        key:'1',
        name:'1',
        price:23132,
        test:['asdasd','1111']
    },
    {
        key:'2',
        name:'2',
        price:23132,
        test:[]
    },
    
]
var json=[]
export default class index extends Component { 
    constructor(){
        super()
        this.state={test:''}
        axios.get(`http://127.0.0.1:5052/http/query?page=1`).then(
            (response)=> {
                var data=response.data;
                for(var i = 0; i < data.length; i++){ 
                   var temp = {};              
                    for(var j=0;j<data[i].length;j++){
                        temp['ok'+j]=data[i][j]
                }
                    // temp['ok']=  {
                    //     title: 'operation',
                    //     dataIndex: 'operation',
                    //     render: (_, record: { key: React.Key }) =>
                    //       this.state.dataSource.length >= 1 ? (
                    //         <Popconfirm title="Sure to delete?" onConfirm={() => this.handleDelete(record.key)}>
                    //           <a>Delete</a>
                    //         </Popconfirm>
                    //       ) : null,
                    //   },
                    json.push(temp)       
                 };     
                 this.setState({test:'ok'})
        }
        )
        
    }


    render() {   
        console.log(json)
        return (
        <div>
            <Header/>
            <Table dataSource={json[0]!=undefined?json:json[0]}>  
           
                <column title='name' dataIndex="ok1"></column>
                <column title='price' dataIndex='ok2'></column>
                <column title='account' dataIndex='ok10'></column>
                
   
                        <Tag >
                            <a>buy</a>
                        </Tag>

    
                   
           
                
            </Table>
            </div>

        )
    }
}
