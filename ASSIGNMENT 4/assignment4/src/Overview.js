import React, {Component} from 'react';
import EmployeesPanel from './EmployeesPanel';
import TeamsPanel from './TeamsPanel';
import ProjectsPanel from './ProjectsPanel';
import MainContainer from './MainContainer';
class Overview extends Component{
    render()
    {  var url="https://lit-refuge-67160.herokuapp.com/";
        return(
            <div>
            <MainContainer Sidebar={this.props.title}>
            <h1 className="page-header">{this.props.title}</h1>
            <div className="row">

            <div className="col-md-4">
            <ProjectsPanel title="Projects" dataSource={url+"projects"}/>
            </div>

            <div className="col-md-4">
            <TeamsPanel title="Teams" dataSource={url+"teams"}/>
            </div>

            <div className="col-md-4">
            <EmployeesPanel title="Employees" dataSource={url+"employees"}/>
            </div>

           </div>          
                 </MainContainer>
                 </div>
        )
    }
}

export default Overview;