import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

export default function Navbar(props){
    return(
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
            <a className="navbar-brand" href="/">{props.title}</a> 
            {/* used props.title instead of directly writing name bcz this navbar can be used for other projects and that title would be exported */}
            {/* <button className="navbars-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button> */}
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                    </li>
                    {/* usinging link and to avoids reloading page above a and href is used which would result in reloading of page */}
                    <li className="nav-item">
                        <Link className="nav-link" to="/About">{props.about}</Link>
                    </li>
        
                </ul>
                 {/* <form className="d-flex">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button className="btn btn-outline-success" type="submit">Search</button>
                </form> */}
                <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
                    <input className="form-check-input" onClick={props.togglemode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                    <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
                </div>
            </div>
        </div>
        </nav>
    )
}

Navbar.protoTypes={
    title:PropTypes.string,
    about:PropTypes.string
    // title:PropTypes.string.isRequired tells uu if title is not passed
};
Navbar.defaultProps={
    title:"default title",
    about:"default about"
}
// about is not passed hence default value is taken