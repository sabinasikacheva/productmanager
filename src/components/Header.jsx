import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from './images/logo.png';

function Header() {
  return (
    <header className="header">
      <nav className="navbar">
        <div className="logo">
         <img className="logo_img"src={logo} alt="logo" />
        </div>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/consulting">Consulting</Link></li>
          <li><Link to="/work">Work</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
// import React from 'react';
// import './Header.css';
// import logo from './images/logo.png';

// function Header() {
//   return (
//     <header className="header">
//       <nav className="navbar">
//         <div className="logo">
//         <img className="logo_img"src={logo} alt="logo" />
//         </div>
//         <ul className="nav-links">
//           <li><a href="#home">Home</a></li>
//           <li><a href="#about">About</a></li>
//           <li><a href="#work">Work</a></li>
//           <li><a href="#contact">Contact</a></li>
//         </ul>
//       </nav>
//     </header>
//   );
// }

// export default Header;
