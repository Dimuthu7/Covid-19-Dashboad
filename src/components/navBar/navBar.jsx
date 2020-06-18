import React, {Component} from 'react';

class NavBar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top sticky-offset" /*style={{position: "fixed",   top: "0", width: "100%", overflow: "hidden"}}*/>
                <a className="navbar-brand" href="/">COVID-19</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/hospitalDetails">Hospital Details</a>
                        </li>

                    </ul>
                    <li className="form-inline  ml-auto">
                        <span className="mr-3"><a href="https://www.linkedin.com/in/dimuthu-abeysinghe/" target="_blank" rel="noopener noreferrer">Developed By</a></span>
						/* 
                        <span style={{color:"#919191"}}>|</span> 
						<span className="ml-3"> <a href="https://github.com/Dimuthu7/Covid-19-dashboard" target="_blank" rel="noopener noreferrer"><h1>
							<span className="fa fa-github"></span></h1></a>
						</span>*/
                    </li>
                </div>
            </nav>
        );
    }
}

export default NavBar;