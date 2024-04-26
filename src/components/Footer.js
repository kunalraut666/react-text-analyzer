import React from 'react'
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import navIcon4 from "../assets/img/nav-icon4.svg";


export default function Footer(props) {


    const footerStyle = {
        backgroundColor: props.mode === 'dark' ? 'rgb(32 37 41)' : props.mode === 'green' ? 'green' : props.mode === 'blue' ? 'blue': props.mode === 'red' ? 'red' : 'rgb(248 249 250)',
        color: (props.mode === 'dark' || props.mode === 'green' || props.mode === 'blue' || props.mode === 'red') ? 'white' : 'black',
        width: '100%',
    }

  return (
    
      <footer className="text-center text-lg-start " style={footerStyle}>
      <div className="container d-flex justify-content-center py-5">
            <button type="button" className="btn btn-primary btn-lg btn-floating mx-2" style={{ backgroundColor: '#54456b' }}>
                <a href='https://www.linkedin.com/in/kunal-raut-9630bb163/'> 
                    <img src={navIcon1} alt="linkedin" />
                </a>
            </button>
            <button type="button" className="btn btn-primary btn-lg btn-floating mx-2" style={{ backgroundColor: '#54456b' }}>
                <a href='https://www.facebook.com/profile.php?id=100006930379345&mibextid=LQQJ4d'>
                    <img src={navIcon2} alt="facebook" />
                </a>
            </button>
            <button type="button" className="btn btn-primary btn-lg btn-floating mx-2" style={{ backgroundColor: '#54456b' }}>
                <a href='https://www.instagram.com/kunalraut489?igsh=MTJtdXltN2Y3em51dw%3D%3D&utm_source=qr'>
                    <img src={navIcon3} alt="instragram" />
                </a>
            </button>
            <button type="button" className="btn btn-primary btn-lg btn-floating mx-2" style={{ backgroundColor: '#54456b' }}>
                <a href='https://github.com/kunalraut666'>
                    <img src={navIcon4} alt="github" />
                </a>
            </button>
        </div>

        <div className="text-center p-3">
        Words have the power to inspire, to create, and to transform. Use them wisely, for they shape the world around us.
        </div>
      </footer>
    
  );
}
