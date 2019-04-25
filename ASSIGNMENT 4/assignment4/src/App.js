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
