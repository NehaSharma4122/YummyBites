import React, { useContext, useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom';
import { StoreContext } from '../../Context/StoreContext';
import LoginPopup from '../LoginPopup/LoginPopup';

const Navbar = () => {

  const [menu,setMenu] = useState("Home");

  const {getTotalCartAmount} = useContext(StoreContext);

  const[showLogin,setShowLogin] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const toggleLogin = () => {
    setShowLogin(!showLogin);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
    setShowLogin(false);
  };

  return (
    <nav>
    <div className='navbar'>
      <Link to='/'><img src={assets.logo} alt="" className="logo" /></Link>
      <ul className="navbar-menu">
        <Link to='/' onClick={()=>setMenu("Home")} className={menu==="Home"?"active":""}>Home</Link>
        <a href="#explore-menu" onClick={()=>setMenu("Menu")} className={menu==="Menu"?"active":""}>Menu</a>
        <a href="#app-download" onClick={()=>setMenu("Mobile-app")} className={menu==="Mobile-app"?"active":""}>Mobile-app</a>
        <a href="#footer" onClick={()=>setMenu("Contact-us")} className={menu==="Contact-us"?"active":""}>Contact us</a>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="" />
        <div className="navbar-search-icon">
          <Link to='/cart'><img src={assets.basket_icon} alt="" /></Link>
          <div className={getTotalCartAmount()===0 ?"":"dot"}></div>
        </div>
        {isLoggedIn ? (
            <button onClick={handleLogout}>Logout</button>
          ) : (
            <button onClick={toggleLogin}>Sign In</button>
          )}
        {/* <button onClick={toggleLogin}>{showLogin ? "Logout" : "Sign In"}</button> */}
      </div>
    </div>
    {showLogin && <LoginPopup setShowLogin={setShowLogin} handleLogin={handleLogin} />}
    </nav>
    
  )
}

export default Navbar
