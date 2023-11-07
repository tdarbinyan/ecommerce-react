import "./main.css";
import React, { useState } from 'react';
import mainPhoto from "./../img/main_photo.png";
import nextIcon from "./../img/next_icon.svg";
import menuIcon from "./../img/menu_icon.svg"; //временная мера, потом занесу импорт всех изображений в отдельный файл или подключу иконки
import searchIcon from "./../img/search_icon.svg";
import favIcon from "./../img/fav_icon.svg";
import cartIcon from "./../img/cart_icon.svg";
import profileIcon from "./../img/profile_icon.svg";

function smoothScroll(x, y) { // function for smooth scrolling
  window.scroll({
    left: x,
    top: y,
    behavior: 'smooth',
  });
}

function LoginWindow({ onClose }) { // component that returns login form
  return (
    <div className="login-window">

      <div className="login__container">

        <div className="login__desc">
            <h2>login</h2>
            <span>or <a href="#">sign up</a></span>
        </div>

      <input placeholder="username or email"/>
      <input placeholder="password"/>
      <button className="sign" onClick={onClose}>sign in</button>
    </div>

    </div>
  );
}

function Main() {

  const [isLoginWindowOpen, setLoginWindowOpen] = useState(false); // utility for login form

  const openLoginWindow = () => { // utility for login form
    setLoginWindowOpen(true);
  };

  const closeLoginWindow = () => { // utility for login form
    setLoginWindowOpen(false);
  };

  return (
    <section className="main_page">
        <div className="intro">
          <div className="container">
          <header className="header">
            <a href="#" className="menu"><img src = {menuIcon}></img></a>
            <a href="#" className="logo">logo</a>
            <div className="form">
              <input type="search" placeholder="Search models and collections"/>
              <a className="search__button"><img src = {searchIcon}></img></a>
            </div>
            <a className="header__item" href="#"><img src = {favIcon}></img></a>
            <a className="header__item" href="#"><img src = {cartIcon}></img></a>
            <a className="header__item" href="#" onClick={openLoginWindow}><img src = {profileIcon}></img></a>
            {isLoginWindowOpen && (
              <div className="overlay" onClick={closeLoginWindow}>
                <LoginWindow onClose={closeLoginWindow} />
              </div>
            )}
          </header>

          <div className="main__container">
            <img src={mainPhoto} className="main_photo"></img>
            <div className="purple_form">
                <div className="main__text">
                  <h1>some text describing our bestseller</h1>
                </div>
                <button className="purple_button">
                  add to the cart
                </button>
              </div>
          </div>

 
          </div>
        </div>
        <button onClick = { () => smoothScroll(0,980) } className="main__next_button">
            <img src={nextIcon}></img>
        </button> 
    </section>
  );
}

export default Main;
