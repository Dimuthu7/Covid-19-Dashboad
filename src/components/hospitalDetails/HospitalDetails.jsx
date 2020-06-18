import React, {Component} from 'react';
import Axios from 'axios';
import Swal from "sweetalert2";
import SiteLoading from "../siteloading/SiteLoading";

class HospitalDetails extends Component {
    constructor() {
        super();
        this.state = {
            data: [],
            isLoading: false
        }
    }

    componentDidMount() {
        this.fetchData();
    }

    fetchData = () =>{
        this.setState({
            isLoading:true
        })
        Axios.get('https://hpb.health.gov.lk/api/get-current-statistical')
            .then(res => {
                if (res.data.success === true) {
                    this.setState({
                        data: res.data.data,
                        isLoading:false
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
                this.setState({
                    isLoading:false
                })
                Swal.fire({
                    icon: "error",
                    title: "Something went wrong!",
                    text: err
                });
            })
    }

    render() {
        if (this.state.isLoading || !(this.state.data.hospital_data)) {
            return <SiteLoading />
        }
        return (
            <div>
                <div className="ml-5 mr-5 mb-5 mt-2 p-2" >
                    <div className="row mb-5" align="center">
                        <div className="col-md-12">
                            <div className="card"  style={{backgroundColor:"#d5e8e8"}}>
                                <div className="card-body" align="center" >
                                    <span id="MainText">Hospital Patient Details
                                        <span style={{marginLeft:"2%"}}><i className="fas fa-hospital-symbol" style={{color:"red"}}></i></span>
                                    </span>
                                    <br />
                                    <footer className="blockquote-footer text-dark text-center m-1">
                                        <span className="mr-2">Last updated:</span>
                                        <cite title="Source Title">
                                            {this.state.data.update_date_time} <i className="far fa-clock"></i>
                                        </cite>
                                    </footer>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row" >
                        <div className="col-md-12">
                            <div className="card bg-light">
                                <div className="card-body" align="center" >
                                    <table className="table table-bordered text-center" align="center" style={{marginBottom:"-20px"}}>
                                        <thead >
                                        <tr>
                                            <th scope="col" style={{backgroundColor:"#a3ab85"}} className="p-4"><h4>Hospital Name</h4></th>
                                            <th scope="col" style={{backgroundColor:"#db4e42"}}><h4>Sri Lankans on treatment</h4></th>
                                            <th scope="col" style={{backgroundColor:"#cc7e25"}}><h4>Foreigners on treatment</h4></th>
                                            <th scope="col" style={{backgroundColor:"#3cc234"}}><h4>Treated Sri Lankans</h4></th>
                                            <th scope="col" style={{backgroundColor:"#89ab18"}}><h4>Treated Foreign</h4></th>
                                        </tr>
                                        </thead>
                                        <tbody>

                                        {this.state.data.hospital_data.map((value,index) =>{
                                            return (
                                                <tr key={index}>
                                                    <th scope="row" style={{backgroundColor:"#c9d49f"}} className="p-4">
                                                        <h5 title="Hospital Name">
                                                            {value.hospital.name} <br/>
                                                            {value.hospital.name_si} <br/>
                                                            {value.hospital.name_ta}
                                                        </h5>
                                                    </th>
                                                    <td style={{backgroundColor:"#f54e42"}} className="p-5">
                                                        <h5 title="Sri Lankans on treatment">{value.treatment_local}</h5>
                                                    </td>
                                                    <td style={{backgroundColor:"#e88615"}} className="p-5">
                                                        <h5 title="Foreigners on treatment">{value.treatment_foreign}</h5>
                                                    </td>
                                                    <td style={{backgroundColor:"#3cf032"}} className="p-5">
                                                        <h5 title="Treated Sri Lankans">{value.cumulative_local}</h5>
                                                    </td>
                                                    <td style={{backgroundColor:"#abd61c"}} className="p-5">
                                                        <h5 title="Treated Foreign">{value.cumulative_foreign}</h5>
                                                    </td>
                                                </tr>
                                            );
                                        })}

                                        </tbody>
                                    </table>
                                    <br />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        );
    }
}

export default HospitalDetails;