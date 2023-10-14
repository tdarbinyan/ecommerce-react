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
      <a href="#"><h1>logo</h1></a>
      <div className="form">
        <input type="search" placeholder="Search models and collections" />
        <button className="search__button"><img src = {searchIcon}></img></button>
      </div>
      <nav className="header__nav">
        <ul className="header__list">
          <li className="header__item" href="#"><img src = {favIcon}></img></li>
          <li className="header__item" href="#"><img src = {cartIcon}></img></li>
          <li className="header__item" href="#"><img src = {profileIcon}></img></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
