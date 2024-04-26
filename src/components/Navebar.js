import React from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import logo from "../assets/img/images.png"

export default function Navebar(props) {

  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`} >
      <div className="container-fluid" >
        <Link className="navbar-brand" to="/" style={{
      // color: props.mode === 'green' ? 'white' : 'black',
      color: (props.mode === 'dark' || props.mode === 'green' || props.mode === 'blue' || props.mode === 'red') ? 'white' : 'black',
    }}>
          <img src={logo} alt="Logo" className="me-2" style={{ width: '50px', borderRadius: '50%' }}/>
          {props.title}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent" >
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/" style={{
      // color: props.mode === 'green' ? 'white' : 'black',
      color: (props.mode === 'dark' || props.mode === 'green' || props.mode === 'blue' || props.mode === 'red') ? 'white' : 'black',
    }}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/about" style={{
      // color: props.mode === 'green' ? 'white' : 'black',
      color: (props.mode === 'dark' || props.mode === 'green' || props.mode === 'blue' || props.mode === 'red') ? 'white' : 'black',
    }}>
                {props.about}
              </Link>
            </li>
          </ul>
          <li className="d-flex mx-1" onClick={props.greenMode}>
            <span style={{
              backgroundColor: 'green',
              borderRadius: '50%',
              width: '20px',
              height: '20px',
              border: (props.mode === 'dark' || props.mode === 'green' || props.mode === 'blue' || props.mode === 'red') ? '1px solid white': '1px solid black',
              cursor: 'pointer',
            }}></span>
          </li> 
          <li className="d-flex mx-1" onClick={props.blueMode}>
          <span style={{
              backgroundColor: 'blue',
              borderRadius: '50%',
              width: '20px',
              height: '20px',
              border: (props.mode === 'dark' || props.mode === 'green' || props.mode === 'blue' || props.mode === 'red') ? '1px solid white': '1px solid black',
              cursor: 'pointer',
            }}></span>
          </li>
          <li className="d-flex mx-1" onClick={props.redMode}>
          <span style={{
              backgroundColor: 'red',
              borderRadius: '50%',
              width: '20px',
              height: '20px',
              border: (props.mode === 'dark' || props.mode === 'green' || props.mode === 'blue' || props.mode === 'red') ? '1px solid white': '1px solid black',
              cursor: 'pointer',
            }}></span>
          </li>
          <li className="d-flex mx-2">
            <div className="form-check form-switch" >
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
                onClick={props.toggleMode}
              />
              <label className={`form-check-label text-${(props.mode === 'dark' || props.mode === 'green' || props.mode === 'blue' || props.mode === 'red') ? 'light' : 'dark'}`} htmlFor="flexSwitchCheckDefault" >
                  {props.mode === 'dark' ? 'Enable light mode' : 'Enable dark mode'}
              </label>
            </div>
          </li>
        </div>
      </div>
    </nav>
  );
}

Navebar.prototype = {
   title: PropTypes.string,
   about: PropTypes.string
};

Navebar.defaultProps = {
    title: 'React App',
    about: 'About React App'
}
