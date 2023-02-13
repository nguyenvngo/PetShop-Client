import { Link } from "react-router-dom";
import "./Navbar.css";
import React, {useState, useEffect, useRef} from 'react';
const Navbar = () => {
    const [open, setOpen] = useState(false);

    let menuRef = useRef();
  
    useEffect(() => {
      let handler = (e)=>{
        if(!menuRef.current.contains(e.target)){
          setOpen(false);
          console.log(menuRef.current);
        }      
      };
  
      document.addEventListener("mousedown", handler);
      
  
      return() =>{
        document.removeEventListener("mousedown", handler);
      }
  
    });
    
    return ( 
        <>
            <nav className="navbar">
                <Link to="/">Home</Link>
                <Link to="/dogs">Dogs</Link>
                <Link to="/checkout">MyCart</Link>
            </nav>
            <div className="menu" ref={menuRef}>
                <div className="menu-icon" onClick={()=>{setOpen(!open)}}>
                    <i className="fa-solid fa-bars icon"></i>
                </div>
                <div className={`items ${open? 'active' : 'inactive'}`}>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/dogs">Dogs</Link>
                        </li>
                        <li>
                            <Link to="/checkout">MyCart</Link>
                        </li>
                    </ul>
                </div>

            </div>

        </>
     );
}
 
export default Navbar;