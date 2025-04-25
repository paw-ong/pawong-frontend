import React, { useState, useEffect } from 'react';
import {Link, NavLink, useNavigate} from 'react-router-dom'
import './Header.css';
import logo from '../../assets/images/logo/logo.png';
import defaultUserImage from '../../assets/images/user.jpg'

function Header() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userImage, setUserImage] = useState(defaultUserImage);

  useEffect(() => {
    const userToken = localStorage.getItem('userToken');
    const userInfo = JSON.parse(localStorage.getItem('userInfo'));

    setIsLoggedIn(!!userToken);

    if (userInfo && userInfo.profileImage) {
      setUserImage(userInfo.profileImage);
    } else {
      setUserImage(defaultUserImage);
    }
  }, []);

  const handleUserClick = () => {
    if (isLoggedIn) {
      navigate('/mypage');
    } else {
      navigate('/login');
    }
  };

  return (
      <header className="header">
        <div className="logo-container">
          <Link to="/main">
            <img src={logo} alt="pawong logo" className="logo"/>
          </Link>
        </div>
        <nav className="main-nav">
          <ul className="nav-tabs">
            <li className="tab-item">
              <NavLink to="/adoption" className={({ isActive }) => (isActive ? "active" : "")}>
                입양 동물
              </NavLink>
            </li>
            <li className="tab-item">
              <NavLink to="/lostAnimal" className={({ isActive }) => (isActive ? "active" : "")}>
                실종 동물
              </NavLink></li>
          </ul>
        </nav>
        <div className="user" onClick={handleUserClick}>
          <img src={userImage} alt="user-img" className="user-img"/>
        </div>
      </header>
  );
}

export default Header;
