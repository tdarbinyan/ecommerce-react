import "./main.css";
import mainPhoto from "./../img/main_photo.png";
import nextIcon from "./../img/next_icon.svg";
import menuIcon from "./../img/menu_icon.svg"; //временная мера, потом занесу импорт всех изображений в отдельный файл или подключу иконки
import searchIcon from "./../img/search_icon.svg";
import favIcon from "./../img/fav_icon.svg";
import cartIcon from "./../img/cart_icon.svg";
import profileIcon from "./../img/profile_icon.svg";

function Main() {
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
            <a className="header__item" href="#"><img src = {profileIcon}></img></a>
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
            <button onClick = { () => window.scrollTo(1000,1000) } className="main__next_button">
              <img src={nextIcon}></img>
            </button> 
          </div>

 
          </div>
        </div>

    </section>
  );
}

export default Main;

// onClick = { () => window.scrollTo(1000,1000) }
