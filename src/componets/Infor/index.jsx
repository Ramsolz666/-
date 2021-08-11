import React, { Component } from 'react'
import Web3 from 'web3'
import {Input,Button,message} from 'antd'
import Header from "../Header"
import axios from 'axios'
import datajson from '../../web3/account.json'

var account;
var myContract;
var web3 = new Web3(Web3.givenProvider); 
export default class Info extends Component {
    state={"value1":'',"value2":''}
    constructor(){
        web3.eth.getAccounts((function(err,accounts){
            account=accounts      
            myContract=new web3.eth.Contract(datajson,"0x47ecfacfD1719E2C468A34A6285c43b036c243Ab")        
        })
        )
        super();  
    }  
    handleMaxRestoreUp=(event,a)=>{
        let value=event.target.value;
        this.setState(()=>({["value"+a]:value})) 
    }

    ok=()=>{
        myContract.methods.getinfo().call({from:account[0]}).then(console.log)
        console.log(this.state.value1)
       
    }
    change=()=>{
        console.log(account[0])
        var a=this.state.value1;
        var b=this.state.value2;
        myContract.methods.changeinfo(a,b).send({from:account[0]}).then(function(receipt){  
            axios.get(`http://127.0.0.1:5052/http/query?0=info&account=${receipt.from}&test1=${a}&test2=${b}`).then(
                function (response) {
                console.log(response)}
            )}
        )
    }

    render() {
        return (
            <div>
                <Header />
                <Input addonBefore='小区名字'  onChange ={event => this.handleMaxRestoreUp(event,1)} placeholder='name' />
                <Input addonBefore='价格'  onChange ={event => this.handleMaxRestoreUp(event,2)} placeholder='price'/>
                {/* <Button onClick={this.ok}>ok</Button>  */}
                <Button onClick={this.change}> change</Button>
            </div>
        )
    }
}
