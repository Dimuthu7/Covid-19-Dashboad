import React, {Component} from 'react';
import './dashboardStyle.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import SriLankaDetails from "./sriLankaDetails";
import GlobalDetails from "./globalDetails";
import Axios from 'axios';
import Swal from "sweetalert2";
import SiteLoading from "../siteloading/SiteLoading";

class Dashboard extends Component {
    constructor() {
        super();
        this.state = {
            data: []
        }
    }

    componentDidMount() {
        this.fetchData();
    }

    fetchData = () =>{
        Axios.get('https://hpb.health.gov.lk/api/get-current-statistical')
            .then(res => {
                if (res.data.success === true) {
                    this.setState({
                        data: res.data.data
                    })
                    //console.log(res.data.data);
                } else {
                    Swal.fire({
                        icon: "error",
                        title: "Something went wrong!"
                    });
                }

            })
            .catch(err => {
                Swal.fire({
                    icon: "error",
                    title: "Something went wrong!",
                    text: err
                });
            })
    }

    render() {
        if (!this.state.data) {
            return <SiteLoading />
        }

        return (
            <div>
                <div className="container pt-3" >
                    <div className="row">
                        <div className="col-md-12">
                            <div className="card" style={{backgroundColor:"#d5e8e8"}}>
                                <div className="card-body" align="center" >
                                    <span id="MainText" >COVID-19! Live Situational Analysis Dashboard
                                        <span style={{marginLeft:"2%"}}>
                                            <i className="fas fa-virus" style={{color:"red"}}></i></span>
                                    </span>
                                    <br />
                                </div>
                            </div>
                        </div>
{/*                        <div className="col-md-2" id="Icon1">
                            <img src={covidIcon} alt="icon" className="figures-icon" style={{ maxWidth: '60%' }}></img><br/>
                        </div>*/}
                    </div>

                    <div className="row" style={{marginTop:"4%"}}>
                        <div className="col-md-12">
                            <Tabs>
                                <TabList style={{ width: '100%', margin: '1rem auto', height: '25px' }}>
                                    <Tab style={{ background: '#A0C1C9', width: '50%', height: '200%', textAlign:'center' }}><h3>Sri Lanka</h3></Tab>
                                    <Tab style={{ background: '#B098BE', width: '50%', height: '200%', textAlign:'center' }}><h3>Global</h3></Tab>
                                </TabList>

                                <TabPanel>
                                    <br/>
                                    <SriLankaDetails data={this.state.data} />
                                </TabPanel>
                                <TabPanel>
                                    <br/>
                                    <GlobalDetails data={this.state.data}/>
                                </TabPanel>
                            </Tabs>
                        </div>
                    </div>
                    <div className="row" style={{marginTop:"4%"}}>
                        <div className="col-md-12">
                            <div className="card text-center">
                                <div className="card-header card-title">
                                    <h5>
                                        PCR Testing Centers <i className="fas fa-plus-square" style={{color:"#eb5252"}}></i> and
                                        Quarantine Centers <i className="fas fa-map-marker-alt" style={{color:"#006164"}}></i> in Sri Lanka
                                    </h5>
                                </div>
                                <div className="card-body">
                                    <iframe src="https://www.google.com/maps/d/embed?mid=1koDnKmWZ8pLdAUmi9izHvYp5RO_jaLX0" width="90%" height="500">
                                    </iframe>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>

            </div>
        );
    }
}

export default Dashboard;