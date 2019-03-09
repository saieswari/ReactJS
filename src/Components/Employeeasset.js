import React, { Component } from 'react';
import Navigation from './Navigation';
import CreateEmployee from'./CreateEmployee';

import { MDBDataTable } from 'mdbreact';
import { MDBBtn } from 'mdbreact';
import { NavLink } from 'react-router-dom';

var bgcolor={'color':'#5bc0de','fontSize':'30px'};
class Employeeasset extends Component {

constructor(props){
super(props)
this.state={
  tablerow:[],
  data1:{columns:[],rows:[]},
}

}

  // componentWillMount() {
  //   $(document).ready(function () {
  //     $('#example').DataTable();
  //   });
  // }

  componentDidMount(){
this.getProducts();
  }
   
  getProducts= () =>{
    let resultant=fetch('http://localhost:5000/employeelist')
    .then(response=>response.json())
    
    .then(({data})=>{
      for(var i=0;i<data.length;i++)
      {
        data[i]['Action']= <MDBBtn  href="#myModal" data-toggle="modal" data-target="#myModal1" color="purple" size="sm">Return</MDBBtn>
      }
      console.log('name',data)
      this.setState({tablerow:data});
    
      this.setState({data1:{columns:[
          {
            label: 'Name(Code)',
            field: 'Code',
            sort: 'asc',
            width: 150
          },
          {
            label: 'DU',
            field: 'position',
            sort: 'asc',
            width: 270
          },
          {
            label: 'Designation',
            field: 'Empdes',
            sort: 'asc',
            width: 200
          },
          {
            label: 'Asset(ID)',
            field: 'Empdept',
            sort: 'asc',
            width: 100
          },
          {
            label: 'Issue date',
            field: 'date',
            sort: 'asc',
            width: 150
          },
          {
            label: 'Action',
            field: 'action',
            sort: 'asc',
            width: 100
          }
        ],
        rows:data
      } 
      });

    return data;
 
    })
    .catch(err =>{
      console.log(err)
    })

    console.log("values"+JSON.stringify(resultant))
  }

  render() {

    return (
      <div>
        <Navigation />
     
        <div className="add">
                <NavLink className="nav-link" to="/addemployeeasset">
                    <a href="#" className="float">
                        <i className="fa fa-plus my-float"></i>
                    </a>
                    </NavLink>
                </div>

        
        <MDBDataTable
      
      bordered
      hover
      data={this.state.data1}
    />


        <div id="myModal1" className="modal  fade " tabIndex="-1" role="dialog">
          <div className="modal-dialog  modal-lg ">

            {/* <!-- Modal content--> */}
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal">&times;</button>

              </div>
              <div className="modal-body ">
              <div className="container text-center ">
          <div className="row  card">
            <div className="col-md-12">
            <form className="form-horizontal card-body" >
            <h4 className="card-header bg-secondary col-md-12 text-center py-4" >
                         <strong>Return Asset</strong>
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
                           
                         <input id="fname" name="name" type="text" placeholder="Employee code" className="form-control ml-3 mr-5"/>   
                                              
                         </div>
                         <div className="col-md-6">
                         <span className="col-md-1  text-center"><i class="fa fa-user  pull-left" style={bgcolor}></i></span>                       
                         <input id="fname" name="name" type="text" placeholder="Employee Name"className="form-control ml-3 mr-5"/>
                         </div>
                         
                    </div>  
                    {/* <div class="form-group form-show-validation row">
								<label for="password" class="col-lg-3 col-md-3 col-sm-4 mt-sm-2 text-right">Remarks <span class="required-label">*</span></label>
								<div class="col-lg-4 col-md-9 col-sm-8">
									<div class="input-group">

										<textarea ref="message" value={this.state.comments} onChange={this.handleCommentsChange} class="form-control" id="message_id" name="message" rows="5"></textarea>
									</div>
								</div>
							</div>         */}
                </div>
                
                <br/>
                     <br/>
                     <br/>
                     <br/>
                </form>
            </div>
        </div>
    </div>
                

              </div>
              <div className="modal-footer">
                {/* <button type="button" class="btn btn-default" data-dismiss="modal">Close</button> */}
              </div>
            </div>

          </div>
        </div>





      </div>
      
    );
  }
}

export default Employeeasset;

