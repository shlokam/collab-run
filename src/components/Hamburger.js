// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import './Hamburger.css'; // Import the CSS file for styling
// import Home from './Home';
// import About from './About';
// import Contact from './Contact';


// const HamburgerMenu = () => {
//     const [isOpen, setIsOpen] = useState(false);
  
//     const toggleMenu = () => {
//       setIsOpen(!isOpen);
//     };
  
//     return (
//       <div className="hamburger-menu">
//         <div className={`menu-btn ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
//           <div className="btn-line"></div>
//           <div className="btn-line"></div>
//           <div className="btn-line"></div>
//         </div>
  
//         <ul className={`menu-links ${isOpen ? 'open' : ''}`}>
//           <li>
//             <Link to="/">Home</Link>
//           </li>
//           <li>
//             <Link to="/about">About</Link>
//           </li>
//           {/* Add more links for other pages as needed */}
//         </ul>
//       </div>
//     );
//   };

//   export default HamburgerMenu;