import React, { Component } from 'react';
import Navigation from './Navigation';
import CreateEmployee from'./CreateEmployee';
import './Assetlist.css';
import { MDBDataTable } from 'mdbreact';
import { MDBBtn } from 'mdbreact';

class Employeelist extends Component {

constructor(props){
super(props)
this.state={
  value1:'',
  data1:{columns:[],rows:[]},
}

}
handleChangeInput1=()=>{
  this.setState({ value1:"" });
}
  handleChangeInput = (data) => {
  console.log(data.data)
    this.setState({ value1: data.data });
    
  }
  componentDidMount(){
   this.getProducts();
  }
   
  getProducts= () =>{
    let resultant=fetch('http://localhost:5000/employeelist')
    .then(response=>response.json())
    .then(({data})=>{
      //console.log("data",data)
     for(let i=0;i<data.length;i++){
       //console.log(data[i]['Code'])
       data[i]['edit']= <MDBBtn  data-toggle="modal" data-target="#myModal1"  onClick={()=>this.handleChangeInput({data:data[i]['Code']})} color="purple" size="sm">Update
     </MDBBtn> 
     }
    
      this.setState({data1:{columns:[
          {
            label: 'Employee Code',
            field: 'Code',
            sort: 'asc',
            width: 150
          },
          {
            label: 'Employee Name',
            field: 'position',
            sort: 'asc',
            width: 270
          },
          {
            label: 'Department',
            field: 'Empdes',
            sort: 'asc',
            width: 200
          },
          {
            label: 'Designation',
            field: 'Empdept',
            sort: 'asc',
            width: 100
          },
          {
            label: 'Loaction',
            field: 'location',
            sort: 'asc',
            width: 150
          },
          {
            label: 'Edit',
            field: 'edit',
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
        {/* <button type="button" className="btn btn-info btn-lg" data-toggle="modal" data-target="#myModal1"></button> */}
        {/* <button type="button" class="float" data-toggle="modal" data-target="#myModal1"><i className="fa fa-plus my-float"></i></button> */}
         <div className="add">
        {/* <button  class="float" data-toggle="modal" data-target="#myModal"><i className="fa fa-plus my-float"></i></button>  */}
        <a href="#myModal" data-toggle="modal" data-target="#myModal1" className="float" onClick={()=>this.handleChangeInput1()}>
            <i className="fa fa-plus my-float"></i>
          </a> 
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
       <CreateEmployee key={this.state.value1} code={this.state.value1}/>
        {/* //<p>Some text in the modal.</p> */}
        
      </div>
      <div className="modal-footer">
        {/* <button type="button" class="btn btn-default" data-dismiss="modal">Close</button> */}
      </div>
    </div>

 </div> 
</div>
       
        {/* <!--End of Modal content--> */}


      </div>
      
    );
  }
}

export default Employeelist;

