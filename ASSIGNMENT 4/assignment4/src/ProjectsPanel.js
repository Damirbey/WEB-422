import React, {Component} from 'react';
import moment from 'moment';
import {Link} from 'react-router-dom';
class ProjectsPanel extends Component{
    constructor(props) {
        super(props);
        this.dataSource = this.props.dataSource;
        this.state = {
            projects: [],
            }
    }
    componentDidMount() {

        fetch(this.dataSource)
        .then(res => res.json())
        .then(data => {
            this.setState({ 
                projects: data 
            });
        }).catch(err => {
            console.log("error");
        });
    }
    
    render()
    {
        return(
            <div className="panel panel-default">
                    <div className="panel-heading">
                      <h3 className="panel-title">{this.props.title}</h3>
                    </div>
                    <div className="panel-body">
                      <div className="table-responsive overview-table">
                        <table className="table table-striped table-bordered">
                        <thead>
                        <tr>
                          <th>Project Name</th>
                          <th>Active # Days</th>
                          </tr>
                        </thead>
                         <tbody>
                          
                            {this.state.projects.map((project,index)=>{
                                var ActDate=moment().diff(moment(project.ProjectStartDate),'days');
                                return(
                                    <tr key={index}>
                                        <td>{project.ProjectName}</td>
                                        <td>Active {ActDate} days</td>
                                    </tr>
                                )
                            })}
                          </tbody>
                        </table>
                      </div>
                      <Link to="/projects" className="btn btn-primary form-control">View All Project Data</Link>
                    </div>
                  </div>
        )
    }
}

export default ProjectsPanel;