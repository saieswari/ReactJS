import React, { Component } from 'react';
import Navigation from './Navigation';
import { Bar } from 'react-chartjs-2';
import './Dashboard.css';

class Dashboard extends Component {

    render() {
        const data = {
            labels: ["CPU", "Moniter", "Mouse", "Keyboard", "Landline", "Laptop", "Laptop charger", "Landline", "Laptop", "Laptop charger"],
            datasets: [
                {
                    data: [150, 140, 95, 75, 120, 132, 75, 80, 100, 75],
                    backgroundColor: "#0072ff",
                    label: "Total"
                },
                {
                    data: [111, 125, 92, 55, 100, 91, 70, 77, 65, 75],
                    backgroundColor: "#8811C5",
                    label: "In Use"
                }
            ]
        }
        const options = {
            scales: {
                yAxes: [
                    {
                        ticks: {
                            callback: function (label, index, labels) {
                                return label;
                            }
                        }
                    }
                ]
            },
        }
        return (
            <div>
                <Navigation />
                <div className="row center-align">
                    <div className="col-md-4">
                        <div className="card bg-primary card-size white-font">
                            <div className="numbers">
                                <p className="card-category"><b>TOTAL EMPLOYEES</b></p>
                                <i class="fa fa-3x fa-users" aria-hidden="true"></i>
                                <h4 className="card-title">1294</h4>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card bg-secondary card-size white-font">
                            <div className="numbers">
                                <p className="card-category"><b>TOTAL ASSETS</b></p>
                                <i class="fa fa-3x fa-desktop" aria-hidden="true"></i>
                                <h4 className="card-title">955</h4>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card bg-dark card-size white-font">
                            <div className="numbers">
                                <p className="card-category"><b>AVAILABLE ASSETS</b></p>
                                <i class="fa fa-3x fa-laptop" aria-hidden="true"></i>
                                <h4 className="card-title">72</h4>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row bold-font">
                    <div className="col-md-12">
                        <div className="card graph-size">
                            <div className="bg-secondary card-header white-font">
                                <b>ASSETS</b>
                            </div>
                            <div className="card-body">
                                <Bar height="80px" data={data} options={options} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Dashboard;



