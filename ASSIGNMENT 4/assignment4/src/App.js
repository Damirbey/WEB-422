/*********************************************************************************
* WEB422 – Assignment 04
* I declare that this assignment is my own work in accordance with Seneca Academic Policy. No part of this
* assignment has been copied manually or electronically from any other source (including web sites) or
* distributed to other students.
*
* Name: _Damirkhon Yodgorov_ Student ID: _108364175_ Date: _26.02.2019_
*
********************************************************************************/ 
import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';
import Overview from './Overview';
import Projects from './Projects';
import Teams from './Teams';
import NotFound from './NotFound';
import Employees from './Employees';
class App extends Component {
  render() {
    var url="https://lit-refuge-67160.herokuapp.com/";
    return (
     <Switch>

       <Route exact path="/" render={()=>
       <Overview title="Overview"/>
      }/>


      <Route exact path="/projects" render={()=>
      <Projects title="Projects" dataSource={url+"projects"}/>}/>


       <Route exact path="/teams" render={()=>
      <Teams title="Teams" dataSource={url+"teams"}/>
      }/>


      <Route exact path="/employees" render={()=>
      <Employees title="Employees" dataSource={url+"employees"}/>}/>
      
      <Route render={()=>
      <NotFound title="Not Found"/>}/>
     
     </Switch>
     
    );
  }
}

export default App;