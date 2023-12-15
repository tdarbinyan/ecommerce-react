import "./cart.css";
import menuIcon from "./../img/menu_icon.svg"; //временная мера, потом занесу импорт всех изображений в отдельный файл или подключу иконки
import searchIcon from "./../img/search_icon.svg";
import cartIcon from "./../img/cart_icon.svg";
import profileIcon from "./../img/profile_icon.svg";
import { useState } from 'react';

function LoginWindow({ onClose }) { // component that returns login form
  return (
    <div onClick={(e) => e.stopPropagation()} className="login-window">

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

function Basket() {
    const [isLoginWindowOpen, setLoginWindowOpen] = useState(false); // utility for login form

    const openLoginWindow = () => { // utility for login form
        setLoginWindowOpen(true);
    };
    
    const closeLoginWindow = () => { // utility for login form
        setLoginWindowOpen(false);
    };
    return (
      <section className="Basket">
        <div className="intro">
          <div className="container">
            <header className="header">
              <a href="#" className="menu">
                <img src={menuIcon} alt="Menu Icon" />
              </a>
              <a href="/" className="logo">
                logo
              </a>
              <div className="form">
                <input type="search" placeholder="Search models and collections" />
                <a className="search__button">
                  <img src={searchIcon} alt="Search Icon" />
                </a>
              </div>
              <a className="header__item" href="/cart">
                <img src={cartIcon} alt="Cart Icon" />
              </a>
              <a className="header__item" href="#" onClick={openLoginWindow}>
                <img src={profileIcon} alt="Profile Icon" />
              </a>
              {isLoginWindowOpen && (
                <div className="overlay" onClick={closeLoginWindow}>
                  <LoginWindow onClose={closeLoginWindow} />
                </div>
              )}
            </header>
          </div>
        </div>
        
        <div className="Cart__container">
          <div className="Cart__products">
            <div className="Cart__product">
              <div className="Cart__product_img"></div>
              <div className="Cart__product_info">
                <div className="Cart__product_name">name</div>
                <div className="Cart__product_price">price</div>
              </div>
            </div>
          </div>
          <div className="Cart__payment">
          </div>
        </div>

      </section>
    );
  }
  
  export default Basket;