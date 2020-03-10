import React from 'react';
import '../App.css';
import logo from  '../images/logo.png'
  function Navbar() {
    return (
    <div className="bg-dark">
     <div className="row">
     <div className="col">
     <nav className="col navbar navbar-expand-lg navbar-dark">
     <a className="navbar-brand" href="index.html"><img src={logo} width="40" height="30" alt="site logo"/> Space School</a>
 <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarContent">
     <span className="navbar-toggler-icon"></span>
 </button>
     <div id="navbarContent" className="collapse navbar-collapse">
     <ul className="navbar-nav">
     <li className="nav-item active">
     <a className="nav-link" href="index.html">Home</a>
     </li>
     <li className="nav-item">
     <a className="nav-link" href="lessons.html">Lessons</a>
     </li>
     </ul>
 </div>
     </nav>
     </div>
     </div>
     </div>
   );
}

export default Navbar;
