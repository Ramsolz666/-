import React, { Component } from 'react'
import Register from './componets/Register'
import Onload from './componets/Login'
import Page from './componets/Page'
import Fdc from './componets/qz/Fdc'
import Res from './componets/Result'
import Res_1 from './componets/Result_1'
import Yh from './componets/qz/Yinhang'
import Form from './componets/Form'
import Update from './componets/wf/Update'
import Search from './componets/wf/Search'
import Show from './componets/wf/Show'
import Ann from './componets/qz/Announce'

// import Info from './componets/Infor'
// import Test from './test'
import {Route,BrowserRouter, Redirect} from 'react-router-dom'

export default class App extends Component {

  render() {  
    return (
      <div>

          <BrowserRouter>
          <Route path="/Register" component={Register} />
          <Route path="/Login" component={Onload} />
          <Route path="/Page" component={Page} />
          <Route path="/Fdc" component={Fdc} />
          <Route path="/Res" component={Res} />
          <Route path="/Yh" component={Yh} />
          <Route path="/Form" component={Form} />
          <Route path="/Res_1" component={Res_1} />
          <Route path="/Update" component={Update} />
          <Route path="/Search" component={Search} />
          <Route path="/Show" component={Show} />
          <Route path="/Ann" component={Ann} />
          </BrowserRouter>
      </div>





    
    )
  }
}


