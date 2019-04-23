let employeesModel=[]; // global array used to store all employees received from teams-api

// initializeEmployeesModel function

function initializeEmployeesModel()
    {
        $.ajax({
            url:"https://lit-refuge-67160.herokuapp.com/employees",
            type:"GET",
            contentType:"application/json"
        }).done(function(employees){
        
            employeesModel=employees;
            refreshEmployeeRows(employeesModel);
        }).fail(function(err){
            showGenericModal('Error','Unable to get Employees');
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
// refreshEmployeeRows function
function refreshEmployeeRows(employees) 
{

    let template = _.template('<% _.forEach(employees, function(empl) { %>' + 
                                    '<div class="row body-row" data-id="<%- empl._id %>">'+   
                                        '<div class="col-xs-4 body-column"><%- empl.FirstName %></div>' + 
                                        '<div class="col-xs-4 body-column"><%- empl.LastName %></div>' + 
                                        '<div class="col-xs-4 body-column"><%- empl.Position.PositionName %></div>' + 
                                    '</div>' +  
                                '<% }); %>'
                       );

let templateResult = template({ 'employees': employees });
$("#employees-table").empty();
$("#employees-table").append(templateResult);

}

/********************************************************************************************** */
// getFilteredEmployeesModel function definition 
function getFilteredEmployeesModel(filterString) 
{
    
    
    let filteredEmployees=_.filter(employeesModel,function(employee){
        if(_.includes(employee.FirstName.toLowerCase(),filterString.toLowerCase())||_.includes(employee.LastName.toLowerCase(),filterString.toLowerCase())||_.includes(employee.Position.PositionName.toLowerCase(),filterString.toLowerCase()))
        {
            
            return true;

        }
    })

    return filteredEmployees;
}
/********************************************************************************************** */
//getEmployeeModelById function definition

function getEmployeeModelById(id) 
{
    
    let employees_id=_.filter(employeesModel,function(employee){
        

        if(employee._id == id){
            return true;
        }
    });

    if(employees_id.length==0)
    {
        return null;
    }else{
        return _.cloneDeep(employees_id[0]);
    }
    
}

/********************************************************************************************** */
//making sure that my DOM is loaded properly
$(document).ready(function(){
initializeEmployeesModel();
//keyup event for the search form
$("#employee-search").keyup(function(){

    var search_value=$("#employee-search").val();
    
    var filtered_employees=getFilteredEmployeesModel(search_value);
    
    refreshEmployeeRows(filtered_employees);
});

//on click event

$(document).on("click",".body-row",function(){

    var data_id=$(this).attr("data-id");
   
    var clicked_employee=getEmployeeModelById(data_id);
   
    //creating a moment object
    
    clicked_employee.HireDate=moment(clicked_employee.HireDate).format('LL');

    //defining the Lodash template
    let template = _.template('<strong>Address:</strong> <%- user.AddressStreet %>'+'  '+'<%- user.AddressCity %>'+' ,'+'<%- user.AddressState %>'+'  '+'<%- user.AddressZip %><br>'+
                              '<strong>Phone Number: </strong>'+'<%- user.PhoneNum %>'+' '+'ext: '+'<%- user.Extension %>'+'<br>'+
                              '<strong>Hire Date: </strong>'+'<%- user.HireDate %>'
                       );

                      

    let templateResult = template({ 'user': clicked_employee });
    showGenericModal(clicked_employee.FirstName +" "+ clicked_employee.LastName,templateResult);


})
    
})
