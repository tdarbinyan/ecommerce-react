import "./header.css";
import menuIcon from "./../../img/menu_icon.svg"; //временная мера, потом занесу импорт всех изображений в отдельный файл или подключу иконки
import searchIcon from "./../../img/search_icon.svg";
import favIcon from "./../../img/fav_icon.svg";
import cartIcon from "./../../img/cart_icon.svg";
import profileIcon from "./../../img/profile_icon.svg";
function Header() {
  return (
    <header className="header">
      <a href="#" className="menu"><img src = {menuIcon}></img></a>
      <a href="#" className="logo">logo</a>
      <div className="form">
        <input type="search" placeholder="Search models and collections" />
        <button className="search__button"><img src = {searchIcon}></img></button>
      </div>
          <a className="header__item" href="#"><img src = {favIcon}></img></a>
          <a className="header__item" href="#"><img src = {cartIcon}></img></a>
          <a className="header__item" href="#"><img src = {profileIcon}></img></a>
    </header>
  );
}

export default Header;
