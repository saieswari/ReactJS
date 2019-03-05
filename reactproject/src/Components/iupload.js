import React, { Component } from 'react';
import Navigation from './Navigation';
import '../iupload.css';
//import image from '../../public/Images/avatar';



class iUpload extends Component {
  state={products:[]};
componentDidMount(){
  this.getProducts();
}

getProducts= _=>{
  fetch('http://localhost:5000/login')
  .then(response=>response.json())
  .then(({data})=>{
   console.log(data['0']['0'].Dept);
  })
  .catch(err =>{
    console.log(err)
  })
}

  renderProduct=({Empid,Empname})=><div key={Empid}>{Empname}</div>

  render() {

  const {products}=this.state;
    return (

      

      <div>
        <div>{products.map(this.renderProduct)}</div>
          <Navigation />
       
          <div class="container">
 
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
</div>
      </div>
    );
  }
}

export default iUpload;
