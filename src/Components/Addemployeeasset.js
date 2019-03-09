import React, { Component } from 'react'
import Navigation from './Navigation';
import './Addemployeeasset.css';
var bgcolor = { 'color': '#5bc0de', 'fontSize': '15px' };
class AddEmployeeAsset extends Component {
	constructor(props)
	{
		super(props);
		this.state=
		{
			title:'Add Employee Asset',
			username:'',
          asset:'',
          comments:''
		}
	}
	handleUsernameChange = event => {
        this.setState({
            username: event.target.value
        })
    }
    handleAssetChange = event =>
    {
        this.setState({
            asset: event.target.value
        })
    }
    handleCommentsChange = event =>
    {
        this.setState({
            comments: event.target.value
        })
    }
    handleSubmit = event =>{
		
        alert(`${this.state.username} ${this.state.asset} ${this.state.comments}`);
        event.preventDefault();
    }
	
	render() {
		return (
			<div>
				<Navigation />
				<div class="container register-form">
					<div class="form">
						<div class="note">
							<p>{this.state.title}</p>
						</div>
						<div className="form-content">



							<div class="form-group form-show-validation row">
								<label for="birth" class="col-lg-3 col-md-3 col-sm-4 mt-sm-2 text-right">Name(EmpCode) <span class="required-label">*</span></label>
								<div class="col-lg-4 col-md-9 col-sm-8">
									<div class="select2-input">
										<div class="input-group">
										<div class="input-group-append">
											<i class="fa fa-users input-group-text" style={bgcolor}></i>
										</div>
											<select id="state" name="state" onChange={this.handleUsernameChange} class="form-control" required>
												<option value="">&nbsp;</option>
												<optgroup label="New Products">
													<option>Harish Kumar(IS7066)</option>
													<option>Saran(IS7064)</option>
													<option>Manikandan(IS7068)</option>
													<option>Nermal Kumar(IS7065)</option>
												</optgroup>

											</select>
										</div>
									</div>
								</div>
							</div>
							<div class="form-group form-show-validation row">
								<label for="asset" class="col-lg-3 col-md-3 col-sm-4 mt-sm-2 text-right">Asset(AssetId) <span class="required-label">*</span></label>
								<div class="col-lg-4 col-md-9 col-sm-8">
									<div class="input-group">
										{/* <span class="input-group-addon"><i class="glyphicon glyphicon-user"></i></span> */}

										<div class="input-group-append">
											<i class="fa fa-laptop input-group-text" style={bgcolor}></i>
										</div>
										<input type="text" value={this.state.asset} onChange={this.handleAssetChange} ref="asset" class="form-control" required />

									</div>
								</div>
							</div>


							<div class="form-group form-show-validation row">
								<label for="password" class="col-lg-3 col-md-3 col-sm-4 mt-sm-2 text-right">Remarks <span class="required-label">*</span></label>
								<div class="col-lg-4 col-md-9 col-sm-8">
									<div class="input-group">

										<textarea ref="message" value={this.state.comments} onChange={this.handleCommentsChange} class="form-control" id="message_id" name="message" rows="5"></textarea>
									</div>
								</div>
							</div>
							{/* <div class="separator-solid"></div>
										<div class="form-group form-show-validation row">
											<label class="col-lg-3 col-md-3 col-sm-4 mt-sm-2 text-right">Gender <span class="required-label">*</span></label>
											<div class="col-lg-4 col-md-9 col-sm-8 d-flex align-items-center">
												<div class="custom-control custom-radio">
													<input type="radio" id="male" name="gender" class="custom-control-input" />
													<label class="custom-control-label" for="male">Male</label>
												</div>
												<div class="custom-control custom-radio">
													<input type="radio" id="female" name="gender" class="custom-control-input" />
													<label class="custom-control-label" for="female">Female</label>
												</div>
											</div>
										</div> */}
							<div class="form-group form-show-validation row">
								<label for="birth" class="col-lg-3 col-md-3 col-sm-4 mt-sm-2 text-right">Issue date <span class="required-label">*</span></label>
								<div class="col-lg-4 col-md-9 col-sm-8">
									<div class="input-group">
										<input type="date" ref="issuedate" class="form-control" id="birth" name="birth" required />
									</div>
								</div>
							</div>

							<br /><br />
							<div class="form-check">
								<div class="row">
									<label class="col-lg-3 col-md-3 col-sm-4 mt-sm-2 text-right"></label>
									<div class="col-lg-4 col-md-9 col-sm-8 d-flex align-items-center">
										<div class="custom-control custom-checkbox">
											<button className="btn btn-primary" onClick={this.handleSubmit}>Submit</button>
											<button class="btn btn-primary">Cancel</button>
										</div>
									</div>
								</div>
							</div>



						</div>
					</div>
				</div>
				<br /><br/>
				<div class="container register-form">
				<div class="form">
				<table class="table table-hover">
  <thead>
    <tr>
      <th>#</th>
      <th>Name(Code)</th>
      <th>Asset(Id)</th>
	  <th>Status</th>
      <th>Isuueddate</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
	  <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
	  <td>@mdo</td>
    </tr>
    
  </tbody>
</table>
</div>
</div>
			</div>
		)
	}
}

export default AddEmployeeAsset
























