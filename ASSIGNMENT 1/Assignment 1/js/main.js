/*********************************************************************************
* WEB422 – Assignment 1
* I declare that this assignment is my own work in accordance with Seneca Academic Policy.
* No part of this assignment has been copied manually or electronically from any other source
* (including web sites) or distributed to other students.
*
* Name: _DAMIRKHON YODGOROV_ Student ID: _108364175_ Date: 15.01.2019_
*
*
********************************************************************************/ 
$(document).ready(function(){

    //TEAMS BUTTON
    $(".dropdown-menu #teams-menu").on("click",function(event){
        event.preventDefault();
        $('#data').empty();
         var heading='<h3>Teams</h3>';

        $.ajax({
            url: "https://lit-refuge-67160.herokuapp.com/teams", // change "your teams api url" to your Teams API url on Heroku
            type: "GET",
            //data: JSON.stringify({ some: "data" }), // we can also send data using the "data" option
            contentType: "application/json"
        })
        .done(function (teams) {
            $("#data").append(heading).append(JSON.stringify(teams));
            
         
               
                       
            
        })
        .fail(function (err) {
            console.log("error: " + err.statusText);
        });
    });

    // EMPLOYEES BUTTON
    $(".dropdown-menu #employees-menu").on("click",function(event){
        event.preventDefault();

        $('#data').empty();
         var heading='<h3>Employees</h3>';

        $.ajax({
            url: "https://lit-refuge-67160.herokuapp.com/employees", // change "your teams api url" to your Teams API url on Heroku
            type: "GET",
            //data: JSON.stringify({ some: "data" }), // we can also send data using the "data" option
            contentType: "application/json"
        })
        .done(function (employees) {
            $("#data").append(heading).append(JSON.stringify(employees));
            
             
                
               
                       
            
        })
        .fail(function (err) {
            console.log("error: " + err.statusText);
        });
    });

    // PROJECTS BUTTON
    $(".dropdown-menu #projects-menu").on("click",function(event){
        event.preventDefault();
        $('#data').empty();
         var heading='<h3>Projects</h3>';

        $.ajax({
            url: "https://lit-refuge-67160.herokuapp.com/projects", // change "your teams api url" to your Teams API url on Heroku
            type: "GET",
            //data: JSON.stringify({ some: "data" }), // we can also send data using the "data" option
            contentType: "application/json"
        })
        .done(function (projects) {
            $("#data").append(heading).append(JSON.stringify(projects));
            
             
                
               
                       
            
        })
        .fail(function (err) {
            console.log("error: " + err.statusText);
        });
    });

    // POSITIONS BUTTON
    $(".dropdown-menu #positions-menu").on("click",function(event){
        event.preventDefault();
      
        $('#data').empty();
         var heading='<h3>Positions</h3>';

        $.ajax({
            url: "https://lit-refuge-67160.herokuapp.com/positions", // change "your teams api url" to your Teams API url on Heroku
            type: "GET",
           // data: JSON.stringify({ some: "data" }), // we can also send data using the "data" option
            contentType: "application/json"
        })
        .done(function (positions) {
            $("#data").append(heading).append(JSON.stringify(positions));
             
            
             
                
               
                       
            
        })
        .fail(function (err) {
            console.log("error: " + err.statusText);
        });

    })
})

