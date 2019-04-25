import React ,{Component} from 'react';
import moment from 'moment';
import MainContainer from './MainContainer';
class Projects extends Component{
    constructor(props) {
        super(props);
        this.dataSource = this.props.dataSource;
        this.state = {
            projects: []
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
        return(<div>
            <MainContainer Sidebar={this.props.title}>
            <h1 className="page-header">{this.props.title}</h1> 
            
                <table className="table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Description</th>
                            <th>Start Date</th>
                            <th>End Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.projects.map((project, index) => {
                            var EndDate = "";
                            if(project.ProjectEndDate == null) EndDate = "N/A";
                            else EndDate = moment(project.ProjectEndDate).utc().format('LL');
                            var StartDate = moment(project.ProjectStartDate).utc().format('LL');
                            return (
                                <tr key={index}>
                                    <td>{project.ProjectName}</td>
                                    <td>{project.ProjectDescription}</td>
                                    <td>{StartDate}</td>
                                    <td>{EndDate}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            
            </MainContainer>
      </div> )
    }
}

export default Projects;