/**********************************  VIEW MODEL DECLARATION AND DEFINITION ************************************************************* */
var viewModel={
     teams:ko.observableArray([]),
     employees:ko.observableArray([]),
     projects:ko.observableArray([])
}
/****************************************************END OF VIEWMODEl****************************************************************** */

  // initializeTeams function

  function initializeTeams()
  {
      return new Promise(function(resolve,reject){
        $.ajax({
            url:"https://lit-refuge-67160.herokuapp.com/teams-raw",
            type:"GET",
            contentType:"application/json"
        }).done(function(team){
        
            viewModel.teams=ko.mapping.fromJS(team);
            resolve();
        }).fail(function(err){
            reject('Error loading the team data');
        })

      })
  }

/********************************************************************************************** */

//initializeEmployees function
function initializeEmployees()
{
    return new Promise(function(resolve,reject){
        $.ajax({
            url:"https://lit-refuge-67160.herokuapp.com/employees",
            type:"GET",
            contentType:"application/json"
        }).done(function(employee){
        
            viewModel.employees=ko.mapping.fromJS(employee);
            resolve();
        }).fail(function(err){
            reject('Error loading the employee data');
        })

      })
}
 
/*********************************************************************************************** */
//initializeProjects function
function initializeProjects()
{
    return new Promise(function(resolve,reject){
        $.ajax({
            url:"https://lit-refuge-67160.herokuapp.com/projects",
            type:"GET",
            contentType:"application/json"
        }).done(function(project){
        
            viewModel.projects=ko.mapping.fromJS(project);
            resolve();
        }).fail(function(err){
            reject('Error loading the project data');
        })

      })

}
/*********************************************************************************************** */
// showGenericModal function
function showGenericModal(title,message)
{ 

    $(".modal-title").html(title);
    $(".modal-body").html(message);

        $("#genericModal").modal({
        backdrop:'static',
        keyboard:false
    });
    
}


/*********************************************************************************************** */
// saveTeam Function

function saveTeam()
{
    var  currentTeam=this;
    $.ajax({
        url:"https://lit-refuge-67160.herokuapp.com/"+"team/"+currentTeam._id(),
        type:"PUT",
        data:JSON.stringify(
            {
                "Projects":currentTeam.Projects(),
                "Employees":currentTeam.Employees(),
                "TeamLead":currentTeam.TeamLead()
            }
        ),
        contentType:"application/json"
    }).done((data)=>{
        showGenericModal("Success","["+currentTeam.TeamName()+"] Updated Successfully");
    }).fail((err)=>{
        showGenericModal("Error","Error updating the team information.");
    })
}

/********************************************************************************************** */
//making sure that my DOM is loaded properly
$(document).ready(function(){
    initializeTeams().then(initializeEmployees).then(initializeProjects).then(()=>{
        ko.applyBindings(viewModel);
        $("select.multiple").multipleSelect({filter:true});
        $("select.single").multipleSelect({ single: true, filter: true });
    }).catch((err)=>{
        showGenericModal('Error',err);
    })     
})
    
