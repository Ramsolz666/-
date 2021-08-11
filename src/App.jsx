import React, { Component } from 'react'
import Register from './componets/Register'
import Onload from './componets/Onload'
import Page from './componets/Page'
import Info from './componets/Infor'
import Test from './test'
import {Route,BrowserRouter, Redirect} from 'react-router-dom'

export default class App extends Component {

  render() {  
    return (
      <div>

          <BrowserRouter>
          <Route path="/Register" component={Register} />
          <Route path="/Onload" component={Onload} />
          <Route path="/Page" component={Page} />
          <Route path="/Info" component={Info} />
          <Route path="/Test" component={Test} />
          <Redirect to='Page'/>
          </BrowserRouter>
      </div>





    
    )
  }
}


