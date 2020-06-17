import React, {Component} from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import icon from '../../images/sriLankaFlag.gif';
import './dashboardStyle.css'

class SriLankaDetails extends Component {
    componentDidMount() {
       /* console.log(this.props.data.local_recovered);*/
    }

    render() {

        return (
            <div>
                <div className="card">
                    <div className="card-body">
                        <div className="center" id="SLIcon">
                            <img src={icon} alt="icon" className="center" style={{ width:"10%" }}></img>
                        </div>

                        <div className="row" style={{marginTop:"5%"}}>
                            <div className="col-md-4">
                                <div className="card text-white bg-success mb-3 text-center">
                                   {/* <div className="card-header">Total Recovered Patients</div>*/}
                                    <div className="card-body">
                                        <h1 className="card-title">{this.props.data.local_recovered}</h1>
                                        <h4 className="card-text">Total Recovered Patients</h4>
                                    </div>
                                    <div className="card-footer bg-success m-2">
                                        <footer className="blockquote-footer text-white text-center m-1">
                                            <span className="mr-2">Last updated:</span>
                                            <cite title="Source Title">
                                                {this.props.data.update_date_time} <i className="far fa-clock"></i>
                                            </cite>
                                        </footer>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4">
                                <div className="card text-white bg-primary mb-3 text-center">
                                    <div className="card-body">
                                        <h1 className="card-title">{this.props.data.local_new_cases}</h1>
                                        <h4 className="card-text">Newly Reported Patients</h4>
                                    </div>
                                    <div className="card-footer bg-primary m-2">
                                        <footer className="blockquote-footer text-white text-center m-1">
                                            <span className="mr-2">Last updated:</span>
                                            <cite title="Source Title">
                                                {this.props.data.update_date_time} <i className="far fa-clock"></i>
                                            </cite>
                                        </footer>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4">
                                <div className="card text-white bg-dark mb-3 text-center">
                                    {/* <div className="card-header">Total Recovered Patients</div>*/}
                                    <div className="card-body">
                                        <h1 className="card-title">{this.props.data.local_active_cases}</h1>
                                        <h4 className="card-text">Total Active Cases</h4>
                                    </div>
                                    <div className="card-footer bg-dark m-2">
                                        <footer className="blockquote-footer text-white text-center m-1">
                                            <span className="mr-2">Last updated:</span>
                                            <cite title="Source Title">
                                                {this.props.data.update_date_time} <i className="far fa-clock"></i>
                                            </cite>
                                        </footer>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className="row" style={{marginTop:"1%"}}>
                            <div className="col-md-4">
                                <div className="card text-white bg-danger mb-3 text-center">
                                    {/* <div className="card-header">Total Recovered Patients</div>*/}
                                    <div className="card-body">
                                        <h1 className="card-title">{this.props.data.local_new_deaths}</h1>
                                        <h4 className="card-text">Newly Reported Deaths</h4>
                                    </div>
                                    <div className="card-footer bg-danger m-2">
                                        <footer className="blockquote-footer text-white text-center m-1">
                                            <span className="mr-2">Last updated:</span>
                                            <cite title="Source Title">
                                                {this.props.data.update_date_time} <i className="far fa-clock"></i>
                                            </cite>
                                        </footer>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4">
                                <div className="card text-white bg-warning mb-3 text-center">
                                    <div className="card-body">
                                        <h1 className="card-title">{this.props.data.local_deaths}</h1>
                                        <h4 className="card-text">Total Reported Deaths</h4>
                                    </div>
                                    <div className="card-footer bg-warning m-2">
                                        <footer className="blockquote-footer text-white text-center m-1">
                                            <span className="mr-2">Last updated:</span>
                                            <cite title="Source Title">
                                                {this.props.data.update_date_time} <i className="far fa-clock"></i>
                                            </cite>
                                        </footer>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4">
                                <div className="card text-white bg-info mb-3 text-center">
                                    {/* <div className="card-header">Total Recovered Patients</div>*/}
                                    <div className="card-body">
                                        <h1 className="card-title">{this.props.data.local_total_cases}</h1>
                                        <h4 className="card-text">Total Reported Patients</h4>
                                    </div>
                                    <div className="card-footer bg-info m-2">
                                        <footer className="blockquote-footer text-white text-center m-1">
                                            <span className="mr-2">Last updated:</span>
                                            <cite title="Source Title">
                                                {this.props.data.update_date_time} <i className="far fa-clock"></i>
                                            </cite>
                                        </footer>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className="row" style={{marginTop:"1%"}}>
                            <div className="col-md-6">
                                <div className="card text-white bg-secondary mb-3 text-center">
                                    {/* <div className="card-header">Total Recovered Patients</div>*/}
                                    <div className="card-body">
                                        <h1 className="card-title">{this.props.data.local_total_number_of_individuals_in_hospitals}</h1>
                                        <h4 className="card-text">Total Number of Individuals in Hospital</h4>
                                    </div>
                                    <div className="card-footer bg-secondary m-2">
                                        <footer className="blockquote-footer text-white text-center m-1">
                                            <span className="mr-2">Last updated:</span>
                                            <cite title="Source Title">
                                                {this.props.data.update_date_time} <i className="far fa-clock"></i>
                                            </cite>
                                        </footer>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="card text-white bg-secondary mb-3 text-center">
                                    <div className="card-body">
                                        <h1 className="card-title">{this.props.data.total_pcr_testing_count}</h1>
                                        <h4 className="card-text">Total PCR Test Count</h4>
                                    </div>
                                    <div className="card-footer bg-secondary m-2">
                                        <footer className="blockquote-footer text-white text-center m-1">
                                            <span className="mr-2">Last updated:</span>
                                            <cite title="Source Title">
                                                {this.props.data.update_date_time} <i className="far fa-clock"></i>
                                            </cite>
                                        </footer>
                                    </div>
                                </div>
                            </div>

                        </div>


                    </div>
                </div>
            </div>
        );
    }
}

export default SriLankaDetails;