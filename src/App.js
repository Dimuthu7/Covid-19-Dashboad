import React, {Component} from 'react';
import Dashboard from "./components/dashboard/dashboard";
import ParticlesBg from "particles-bg";
import NavBar from "./components/navBar/navBar";
import Footer from "./components/footer/Footer";
import { BrowserRouter, Switch, Route} from "react-router-dom";
import HospitalDetails from "./components/hospitalDetails/HospitalDetails";

class App extends Component {
    render() {
        return (
            <div>
                <NavBar/>

                <ParticlesBg type="cobweb" bg={true}/>

                <BrowserRouter>
                    <Switch>
                        <Route path="/" component={Dashboard} exact/>
                        <Route path="/hospitalDetails" component={HospitalDetails} exact/>
                    </Switch>
                </BrowserRouter>
                <Footer/>
            </div>
        );
    }
}

export default App;