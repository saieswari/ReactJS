import React, { Component } from 'react';
import '../iupload.css';

class CreateEmployee extends Component {
    constructor(props)
    {
         
        super(props)
        this.state={
                Button:"",
                Code:"",
                Name:"",
                Email:"",
                Mobile:"",
                Department:"",
                Designation:"",
                Role:"",
                DOJ:"",
                Gender:"",
                Location:"",
                Password:"",
                passwordicon:"",
                passwordfield:"",
            Subdetails:{
                   department:[],
                   designation:[],
                   gender:[],
                   location:[],
                   role:[]
            }
        }
        this.getChangeHandler = this.getChangeHandler.bind(this);
        
        if(this.props.code){
            this.getSingleEmployee();
        }
        
        this.getSubDetails();
   
    }
  
    getChangeHandler(event) {
        
        switch(event.target.id){

            case "code":this.setState({Code: event.target.value});
            break;
            case "name":this.setState({ Name: event.target.value});
            break;
            case "email":this.setState({ Email: event.target.value});
            break;
            case "mobile":this.setState({ Mobile: event.target.value});
            break;
            case "department":this.setState({ Department: event.target.value});
            break;
            case "designation":this.setState({ Designation: event.target.value});
            break;
            case "role":this.setState({ Role: event.target.value});
            break;
            case "doj":this.setState({ DOJ: event.target.value});
            break;
            case "gender":this.setState({ Gender: event.target.value});
            break;
            case "location":this.setState({ Location: event.target.value});
            break;
            case "password":this.setState({ Password: event.target.value});
            break;
            
        }
       
      }

      Save=()=>{

        var pad = function(num) { return ('00'+num).slice(-2) };
        var date;
        date = new Date(Date(this.state.DOJ));
        console.log("fullyear"+date.getUTCFullYear())
        date = date.getUTCFullYear()+ '-' +pad(date.getUTCMonth() + 1) + '-' +pad(date.getUTCDate()) + ' ' +pad(date.getUTCHours()) + ':' +pad(date.getUTCMinutes()) + ':' +pad(date.getUTCSeconds());
          var rolename=false;
          if(this.state.Role=="Admin"){
              rolename=false;
          }
          else{
              rolename=true;
          }
          var params={
            Code:this.state.Code,
            Name:this.state.Name,
            Email:this.state.Email,
            Mobile:this.state.Mobile,
            Department:this.state.Department,
            Designation:this.state.Designation,
            Role:rolename,
            DOJ:date,
            Gender:this.state.Gender,
            Location:this.state.Location,
            isActive:true,
          }
          const options = {
                    method: 'post',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(params)
                  }
        fetch("http://localhost:5000/employee", options).catch(err => {
                    console.error('Request failed', err)
                  })
          //console.log("hello" ,JSON.stringify(params))
       }



    getSingleEmployee= () =>{
        
        var url = "http://localhost:5000/employeelist/"+this.props.code+"";
        console.log(url);
        fetch(url)
        .then(response=>response.json())
        .then(({SingleData})=>{
            var rolename
        if(SingleData[0].RoleID==false){
            rolename="Admin"
        }
        else{
            rolename="Employee"
        }
            
            this.setState({ 
                Code :SingleData[0].Code,
                Name:SingleData[0].Name,
                Email:SingleData[0].EmailID,
                Mobile:SingleData[0].MobileNo,
                Department:SingleData[0].Department,
                Designation:SingleData[0].Designation,
                Role:rolename,
                DOJ: SingleData[0].DOJ,
                Gender:SingleData[0].Gender,                   
                Location:SingleData[0].Location,
                
            });
            
            if(SingleData[0].RoleID==false){
                var bgcolor={'color':'#5bc0de','fontSize':'30px'};
                this.setState({passwordicon:<span className="col-md-1  text-center"><i class="fa fa-key  pull-left" style={bgcolor} ></i></span>}) 
                this.setState({passwordfield:<input id="password" value={this.state.Password} name="name" type="text" placeholder="Please  Enter the Password" className="form-control ml-3 mr-5" onChange={this.getChangeHandler}/>}) 
              }
            console.log(this.state.Role);
        //console.log("result 1","http://localhost:5000/employeelist/"+this.props.code+"")
     
        })
      }

      getSubDetails=()=>{
        
        fetch("http://localhost:5000/subdetails/")
        .then(response=>response.json())
        .then(({subdetails})=>{
            var dept=subdetails.filter(function(dept1) {return dept1.Category ==="Department";});
            var des=subdetails.filter(function(des1) {return des1.Category === "Designation";});
            var gender=subdetails.filter(function(gender1) {return gender1.Category === "Gender";});
            
            var loc=subdetails.filter(function(loc1) {return loc1.Category === "Location";});
            var role1=subdetails.filter(function(role2) {return role2.Category === "Role";});
            role1[0]['status']=false;
            role1[1]['status']=true;
            //alert(JSON.stringify(role1))
             this.setState({
                Subdetails:{
                    department:dept.map(v => (<option value={this.department}>{v.Name}</option>)),
                    designation:des.map(w => (<option value={this.designation}>{w.Name}</option>)),
                    gender:gender.map(x => ( <option value={this.gender}>{x.Name}</option>)),
                    location:loc.map(x => (<option value={this.location}>{x.Name}</option>)),
                    role:role1.map(y => (<option value={this.role}>{y.Name}</option>)),
                }

             })
            // let Designation=this.Depts.designation.map(d=>(<option value={this.designation}>{d.name}</option>));
            // let Gender=this.Depts.gender.map(e=>(<option value={this.gender}>{e.name}</option>));
            // let Location=this.Depts.location.map(d=>(<option value={this.location}>{d.name}</option>));
            // let Role=this.Depts.role.map(d=>(<option value={this.role}>{d.name}</option>));
        })
    }
      Update=()=>{
        var pad = function(num) { return ('00'+num).slice(-2) };
        var date;
        date = new Date(Date(this.state.DOJ));
        console.log("fullyear"+date.getUTCFullYear())
        date = date.getUTCFullYear()+ '-' +pad(date.getUTCMonth() + 1) + '-' +pad(date.getUTCDate()) + ' ' +pad(date.getUTCHours()) + ':' +pad(date.getUTCMinutes()) + ':' +pad(date.getUTCSeconds());
          var rolename=false;
          if(this.state.Role=="Admin"){
              rolename=false;
          }
          else{
              rolename=true;
          }
          var param={
            Code:this.state.Code,
            Name:this.state.Name,
            Email:this.state.Email,
            Mobile:this.state.Mobile,
            Department:this.state.Department,
            Designation:this.state.Designation,
            Role:rolename,
            DOJ:date,
            Gender:this.state.Gender,
            Location:this.state.Location,
            isActive:true,
          }
     
        const options = {
            method: 'put',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(param)
          }
          fetch("http://localhost:5000/updateemployee/"+param.Code+"", options).catch(err => {
            console.error('Request failed', err)
          })
    }

    render() {
        // this.Depts = {
        //     values: [
        //      {name:'Select the Department',id:1},
        //       { name: 'SDU', id: 2 },
        //       { name: 'T&F', id: 3 },
        //       { name: 'T&E', id: 4 },
        //       { name: 'Dove', id:5 }
        //     ],
        //     designation: [
        //          {name:'Select the Designation',id:1},
        //          { name: 'Manager', id: 2 },
        //          { name: 'CEO', id: 3 },
        //          { name: 'Employee', id: 4 }, 
        //          { name: 'Consultant', id:5 }
        //        ],
        //        gender:[
        //            {name:'Select the Gender',id:1},
        //            {name:'Female',id:2},
        //            {name:'Male',id:3},

        //        ],
        //        location:[
        //         {name:'Select the Location',id:1},
        //         {name:'Puducherry',id:2},
        //         {name:'Chennai',id:3},

        //     ],
        //     role:[
        //         {name:'Select the Role',id:1},
        //         {name:'Admin',id:2},
        //         {name:'Employee',id:3},

        //     ]
        //   };
        // let Dept = this.Depts.values.map(v => (<option value={v.id}>{v.name}</option>));
        // let Designation=this.Depts.designation.map(d=>(<option value={this.designation}>{d.name}</option>));
        // let Gender=this.Depts.gender.map(e=>(<option value={this.gender}>{e.name}</option>));
        // let Location=this.Depts.location.map(d=>(<option value={this.location}>{d.name}</option>));
        // let Role=this.Depts.role.map(d=>(<option value={this.role}>{d.name}</option>));

        var bgcolor={'color':'#5bc0de','fontSize':'30px'};

      return (
       
        <div>
  
        {/* <Navigation /> */}
    
        {/* Beginning of the form  */}
    <div className="container text-center ">
      <div className="row card">
        <div className="col-md-12">
        <div className="form-horizontal card-body"  >
        <h4 className="card-header bg-secondary col-md-12 text-center py-4" >
                     <strong>Employee Form{true}</strong>
               </h4>
               
            {/* image */}
   
               <center >
                    <div className="avatar-upload" >
                        <div className="avatar-edit">
                            <input type='file' id="imageUpload" accept=".png, .jpg, .jpeg" />
                            <label htmlFor="imageUpload"></label>
                        </div>
                        <div className="avatar-preview">
                        <div id="imagePreview" className='login-form-1' >
                        </div>
                        </div>
                    </div>
                    </center>
              {/* end of image */}


            <div className="formbody">
            <div className=" form-group row ">
                     <div className="col-md-6">
                     <span className="col-md-1  text-center"><i class="fa fa-id-badge  pull-left" style={bgcolor}></i></span>
                       
                     <input id="code" value={this.state.Code} name="name" type="text" placeholder="Employee code" className="form-control ml-3 mr-5" onChange={this.getChangeHandler}/>   
                                          
                     </div>
                     <div className="col-md-6">
                     <span className="col-md-1  text-center"><i class="fa fa-user  pull-left" style={bgcolor}></i></span>                       
                     <input id="name" name="name"  type="text" placeholder="Employee Name" value={this.state.Name}  className="form-control ml-3 mr-5" onChange={this.getChangeHandler}/>
                     </div>
                </div>

                    <div className=" form-group row ">
                        <div className="col-md-6">
                            <span className="col-md-1  text-center"><i className="fa fa-envelope-o  pull-left" style={bgcolor}></i></span>
                       
                            <input id="email" name="email" type="text" placeholder="Email Address" value={this.state.Email} className="form-control ml-3 mr-5" onChange={this.getChangeHandler}/>  
                                          
                        </div>
                        <div className="col-md-6">
                            <span className="col-md-1  text-center"><i className="fa fa-user-secret  pull-left" style={bgcolor}></i></span>                           
                            <select id="role" value={this.state.Role} className="form-control ml-3 mr-5" onChange={this.getChangeHandler}>{this.state.Subdetails.role}</select> 
                        </div>
                    </div>

                    <div className=" form-group row ">
                        <div className="col-md-6">
                            <span className="col-md-1  text-center"><i className="fa fa-phone-square  pull-left" style={bgcolor}></i></span>
                       
                            <input id="mobile" name="phone" type="text" placeholder="Mobile" value={this.state.Mobile} className="form-control ml-3 mr-5" onChange={this.getChangeHandler}/>    
                                          
                        </div>
                        <div className="col-md-6">
                            <span className="col-md-1  text-center"><i className="fa fa-female  pull-left" style={bgcolor}></i></span>                           
                            <select id="gender" value={this.state.Gender} className="form-control ml-3 mr-5" onChange={this.getChangeHandler} >{this.state.Subdetails.gender}</select> 
                        </div>
                    </div>

                    <div className=" form-group row ">
                    <div className="col-md-6">
                        <span className="col-md-1  text-center"><i className="fa fa-address-card  pull-left" style={bgcolor}></i></span>
                       
                        <select id="designation" value={this.state.Designation} className="form-control ml-3 mr-5" onChange={this.getChangeHandler}>{this.state.Subdetails.designation}</select>    
                                          
                    </div>
                    <div className="col-md-6">
                        <span className="col-md-1  text-center"><i className="fa fa-suitcase  pull-left" style={bgcolor}></i></span>                           
                            <select id="department" value={this.state.Department} className="form-control ml-3 " onChange={this.getChangeHandler} >{this.state.Subdetails.department}</select>
                    </div>
                    </div>

                    <div className="form-group row ">
                    <div className="col-md-6">
                        <span className="col-md-1  text-center"><i className="fa fa-map-marker  pull-left" style={bgcolor}></i></span>
                       
                            <select id="location" value={this.state.Location} className="form-control ml-3 mr-5" onChange={this.getChangeHandler} >{this.state.Subdetails.location}</select>
                        </div>
                        <div className="col-md-6">
                        <span className="col-md-1  text-center"><i className=" fa fa-calendar-o  pull-left" style={bgcolor}></i></span>
                       
                        <input id="doj" name="doj"  type="date" placeholder="Date of Join" onChange={this.handleUsernameChange} className="form-control ml-3 mr-5"/>
                        </div>

                    </div>
                <div className=" form-group row ">
                 <div className="col-md-6">
                      {this.state.passwordicon}
                      {this.state.passwordfield}               
                    </div>
 
               </div>

                    <div className="pull-right row ">
              
                        <div className="col-md-6 text-center">
                            <button  className="btn bg-secondary btn-bg btn-md"  onClick={this.props.code!=''?this.Update:this.Save}>Submit</button>
                        </div>
                        <div className="col-md-6 ">
                            <button className="text-center btn bg-dark btn-bg btn-md">&nbsp;Reset&nbsp;</button>
                        </div>
              
                    </div>
            </div>
            <br/>
                 <br/>
                 <br/>
                 <br/>
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