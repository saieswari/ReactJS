import React, { Component } from 'react';
import Navigation from './Navigation';
import '../iupload.css';
class CreateEmployee extends Component {

   
    render() {

        this.Depts = {
            values: [
             {name:'Select the Department',id:1},
              { name: 'SDU', id: 2 },
              { name: 'T&F', id: 3 },
              { name: 'T&E', id: 4 },
              { name: 'Dove', id:5 }
            ],
            designation: [
                {name:'Select the Designation',id:1},
                 { name: 'Manager', id: 2 },
                 { name: 'CEO', id: 3 },
                 { name: 'Employee', id: 4 },
                 { name: 'Consultant', id:5 }
               ],
               gender:[
                   {name:'Select the Gender',id:1},
                   {name:'Female',id:2},
                   {name:'Male',id:3},

               ],
               location:[
                {name:'Select the Location',id:1},
                {name:'Puducherry',id:2},
                {name:'Chennai',id:3},

            ],
            role:[
                {name:'Select the Role',id:1},
                {name:'Admin',id:2},
                {name:'Employee',id:3},

            ]
          };
        let Dept = this.Depts.values.map(v => (
            <option value={v.id}>{v.name}</option>
          ));
        let Designation=this.Depts.designation.map(d=>(<option value={d.id}>{d.name}</option>));
        let Gender=this.Depts.gender.map(d=>(<option value={d.id}>{d.name}</option>));
        let Location=this.Depts.location.map(d=>(<option value={d.id}>{d.name}</option>));
        let Role=this.Depts.role.map(d=>(<option value={d.id}>{d.name}</option>));

        var bgcolor={'color':'#FF00FF'};
        var bgcolor1={'background-color':'#E4C580','color':'000000'};

      return (
        <div>
            <Navigation />
            {/* Beginning of the form  */}
<div class="container col-md-6 bg">
    <div class="row">
        <div class="col-md-12">
            <div class="well well-sm">
            <form class="form-horizontal card-body" >
            <h5 class="card-header col-md-12 text-center py-4" style={bgcolor1}>
                         <strong>Employee Form</strong>
                   </h5>
                   
             {/* image */}
       
                   <center>
                        <div class="avatar-upload">
                            <div class="avatar-edit">
                                <input type='file' id="imageUpload" accept=".png, .jpg, .jpeg" />
                                <label for="imageUpload"></label>
                            </div>
                            <div class="avatar-preview">
                            <div id="imagePreview" className='login-form-1' >
                            </div>
                            </div>
                        </div>
                        </center>
                  {/* end of image */}


 
                   <div class=" form-group row ">
                         <div class="col-md-6">
                         <span class="col-md-1 col-md-offset-2 text-center"><i class="fa fa-id-badge bigicon pull-left" style={bgcolor}></i></span>
                           
                         <input id="fname" name="name" type="text" placeholder="Employee code" class="form-control ml-3 mr-5"/>   
                                              
                         </div>
                         <div class="col-md-6">
                         <span class="col-md-1 col-md-offset-2 text-center"><i class="fa fa-user bigicon pull-left" style={bgcolor}></i></span>                       
                         <input id="fname" name="name" type="text" placeholder="First Name" class="form-control ml-3 mr-5"/>
                         </div>
                         </div>

                  {/******************************************************************************************* */}
                   {/* <div class="form-group">
                            <span class="col-md-1 col-md-offset-2 text-center"><i class="fa fa-id-badge bigicon pull-left" style={bgcolor}></i></span>
                            <div class="col-md-6">
                                <input id="fname" name="name" type="text" placeholder="Employee code" class="form-control"/>
                            </div>
                        </div>
            
                 
                        <div class="form-group">
                            <span class="col-md-1 col-md-offset-2 text-center"><i class="fa fa-user bigicon pull-left" style={bgcolor}></i></span>
                            <div class="col-md-6">
                                <input id="fname" name="name" type="text" placeholder="First Name" class="form-control"/>
                            </div>
                        </div> */}

{/******************************************************************************************* */}
                        <div class=" form-group row ">
                        <div class="col-md-6">
                        <span class="col-md-1 col-md-offset-2 text-center"><i class="fa fa-envelope-o bigicon pull-left" style={bgcolor}></i></span>
                           
                        <input id="email" name="email" type="text" placeholder="Email Address" class="form-control ml-3 mr-5"/>  
                                              
                        </div>
                        <div class="col-md-6">
                        <span class="col-md-1 col-md-offset-2 text-center"><i class="fa fa-user-secret bigicon pull-left" style={bgcolor}></i></span>                           
                            <select class="form-control ml-3 mr-5">{Role}</select> 
                        </div>
                        </div>

{/******************************************************************************************* */}

                        {/* <div class="form-group">
                            <span class="col-md-1 col-md-offset-2 text-center"><i class="fa fa-envelope-o bigicon pull-left" style={bgcolor}></i></span>
                            <div class="col-md-6">
                                <input id="email" name="email" type="text" placeholder="Email Address" class="form-control"/>
                            </div>
                        </div> */}
 {/******************************************************************************************* */}
                        <div class=" form-group row ">
                        <div class="col-md-6">
                        <span class="col-md-1 col-md-offset-2 text-center"><i class="fa fa-phone-square bigicon pull-left" style={bgcolor}></i></span>
                           
                        <input id="phone" name="phone" type="text" placeholder="Mobile" class="form-control ml-3 mr-5"/>    
                                              
                        </div>
                        <div class="col-md-6">
                        <span class="col-md-1 col-md-offset-2 text-center"><i class="fa fa-female bigicon pull-left" style={bgcolor}></i></span>                           
                            <select class="form-control ml-3 mr-5">{Gender}</select> 
                        </div>
                        </div>

                        {/* <div class="form-group">
                            <span class="col-md-1 col-md-offset-2 text-center"><i class="fa fa-phone-square bigicon pull-left" style={bgcolor}></i></span>
                            <div class="col-md-6">
                                <input id="phone" name="phone" type="text" placeholder="Mobile" class="form-control"/>
                            </div>
                        </div>
                  
                        <div class="form-group">
                            <span class="col-md-1 col-md-offset-2 text-center"><i class="fa fa-female bigicon pull-left" style={bgcolor}></i></span>
                            <div class="col-md-6">
                                <select class="form-control">{Gender}</select>
                            </div>
                        </div> */}

                   

                        <div class=" form-group row ">
                        <div class="col-md-6">
                            <span class="col-md-1 col-md-offset-4 text-center"><i class="fa fa-address-card bigicon pull-left" style={bgcolor}></i></span>
                           
                            <select class="form-control ml-3 mr-5">{Designation}</select>    
                                              
                        </div>
                        <div class="col-md-6">
                            <span class="col-md-1 col-md-offset-4 text-center"><i class="fa fa-suitcase bigicon pull-left" style={bgcolor}></i></span>                           
                                <select class="form-control ml-3  ">{Dept}</select>
                        </div>
                        </div>

                        <div class="form-group row ">
                        <div class="col-md-6">
                            <span class="col-md-1 col-md-offset-2 text-center"><i class="fa fa-map-marker bigicon pull-left" style={bgcolor}></i></span>
                           
                                <select class="form-control ml-3 mr-5" >{Location}</select>
                            </div>
                            <div class="col-md-6">
                            <span class="col-md-1 col-md-offset-2 text-center"><i class=" fa fa-calendar-o bigicon pull-left" style={bgcolor}></i></span>
                           
                            <input id="phone" name="phone" type="datetime-local" placeholder="Date of Join" class="form-control ml-3 mr-5"/>
                            </div>

                        </div>

                <br/>
                        <div class="row pull-right">
                        <div class="form-group">
                            <div class="col-md-12 text-center">
                                <button type="submit" class="btn btn-bg btn-lg" >Submit</button>
                            </div>
                        </div>
                        <div class="form-group">
                            <div class="">
                                <button type="submit" class=" text-center btn btn-bg1 btn-lg" >Rest &nbsp;&nbsp;</button>
                            </div>
                        </div>
                        </div>
                </form>
            </div>
        </div>
    </div>
</div>
{/* End of the form  */}
        </div>
      );
    }
  }
  
  export default CreateEmployee;