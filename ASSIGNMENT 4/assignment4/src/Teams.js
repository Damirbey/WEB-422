import React,{Component} from 'react';
import MainContainer from './MainContainer';

class Teams extends Component{
    constructor(props) {
        super(props);
        this.dataSource = this.props.dataSource;
        this.state = {
            teams: []
        }
    }

    componentDidMount() {

        fetch(this.dataSource)
        .then(res => res.json())
        .then(data => {
            this.setState({ 
                teams: data 
            });
        }).catch(err => {
            console.log("error");
        });
    }
    render()
    {     return(
            <div>
            <MainContainer Sidebar={this.props.title}>
            <h1 className="page-header">{this.props.title}</h1>             
            
                <table className="table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Projects</th>
                            <th>Employees</th>
                            <th>TeamLead</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.teams.map((team, index) => {
                            return (
                                <tr key={index}>
                                    <td>{team.TeamName}</td>
                                    <td>
                                    {team.Projects.map((project, index) => {
                                        return (
                                        <li key={index}>{project.ProjectName}</li>
                                        )
                                    })}
                                    </td>
                                    <td>{team.Employees.length} Employees</td>
                                    <td>{team.TeamLead.FirstName} {team.TeamLead.LastName}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            
            </MainContainer>
      </div> 

        )
    }
}

export default Teams;