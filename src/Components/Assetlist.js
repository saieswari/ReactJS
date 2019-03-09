import React, { Component } from 'react';
import Navigation from './Navigation';
import './Assetlist.css';
import { MDBDataTable, MDBBtn } from 'mdbreact';


class Assetlist extends Component {

  constructor(props) {
    super(props)
    this.state = {
      code: '',
      Brand: '',
      Name: '',
      tablerow: [],
      data1: { columns: [], rows: [] },
    }
  }
  changeCode=event=>{
    this.setState ({
      code : event.target.value
    });
  }

  AssetSubmit = () =>
  {
    alert(`${this.state.code}`);
  }
  componentDidMount() {
    this.getProducts();
  }
  getProducts = () => {
    let resultant = fetch('http://localhost:5000/employeelist')
      .then(response => response.json())
      .then(({ data }) => {
        for (var i = 0; i < data.length; i++) {
          data[i]['Edit Status'] = <MDBBtn href="#myModal2" data-toggle="modal" data-target="#myModal2" color="purple" size="sm">EDIT</MDBBtn>
        }
        this.setState({ tablerow: data });
        this.setState({
          data1: {
            columns: [
              {
                label: 'Code',
                field: 'Code',
                sort: 'asc',
                width: 150
              },
              {
                label: 'Name',
                field: 'position',
                sort: 'asc',
                width: 100
              },
              {
                label: 'Brand Name',
                field: 'Empdes',
                sort: 'asc',
                width: 200
              },
              {
                label: 'Status',
                field: 'date',
                sort: 'asc',
                width: 150
              },
              {
                label: 'Edit Status',
                field: 'salary',
                sort: 'asc',
                width: 100
              },
              {
                label: 'Action',
                field: 'action',
                sort: 'asc',
                width: 100
              }
            ],
            rows: data
          }
        });
        return data;
      })
      .catch(err => {
        console.log(err)
      })
    console.log("values" + JSON.stringify(resultant))
  }
  render() {
    return (
      <div>
        <Navigation />
        <div className="add">
          <a href="#myModal1" data-toggle="modal" data-target="#myModal1" className="float">
            <i className="fa fa-plus my-float"></i>
          </a>
        </div>
        <MDBDataTable
          
          bordered
          hover
          data={this.state.data1}
        />
        <div id="myModal2" className="modal  fade " tabIndex="-1" role="dialog">
          <div className="modal-dialog  modal-lg ">
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal">&times;</button>
              </div>
              <div className="modal-body ">
                <table className='table'>
                  <thead className='bg-primary'>
                    <th>Change Status</th>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <input type='radio' name='In Use'/>&nbsp;In Use&nbsp;&nbsp;&nbsp;&nbsp;
                        <input type='radio' name='In Use'/>&nbsp;Available&nbsp;&nbsp;&nbsp;&nbsp;
                        <input type='radio' name='In Use'/>&nbsp;Damaged
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <button className='btn btn-primary' onClick={this.AssetSubmit}>SUBMIT</button>&nbsp;&nbsp;&nbsp;
                  <button className='btn bg-secondary white-font'>RESET</button></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div id="myModal1" className="modal  fade " tabIndex="-1" role="dialog">
          <div className="modal-dialog  modal-lg ">
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal">&times;</button>
              </div>
              <div className="modal-body ">
                <table className='table'>
                  <thead className='bg-primary'>
                    <th>Add Asset</th>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <label for="Code">Code&nbsp;<span className='red-text'><b>*</b></span>&nbsp;:</label>
                        <input className='form-control' onChange={this.changeCode} id="Code" type='text'></input></td>
                    </tr>
                    <tr>
                      <td>
                        <label for="Brand">Brand&nbsp;<span className='red-text'><b>*</b></span>&nbsp;:</label>
                        <input className='form-control' onChange={this.Brand} id='Brand' type='text'></input></td>
                    </tr>
                    <tr>
                      <td>
                        <label for="Name">Name&nbsp;<span className='red-text'><b>*</b></span>&nbsp;:</label>
                        <input className='form-control' onChange={this.Name} id='Name' type='text'></input></td>
                    </tr>
                    <tr>
                      <td>
                        <button className='btn btn-primary' onClick={this.AssetSubmit}>SUBMIT</button>&nbsp;&nbsp;&nbsp;
                  <button className='btn bg-secondary white-font'>RESET</button></td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="modal-footer">
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Assetlist;

