import './header.css'
import menuIcon from './../../img/menu_icon.svg' //временная мера, потом занесу импорт всех изображений в отдельный файл или подключу иконки
import searchIcon from './../../img/search_icon.svg'
import favIcon from './../../img/fav_icon.svg'
import cartIcon from './../../img/cart_icon.svg'
import profileIcon from './../../img/profile_icon.svg'
function Header () {
    return (
        <header className="header">

            <div className = "menu">
                <button className = "menu_btn">
                    <img src = {menuIcon} alt = "menuIcon"></img>
                </button>
            </div>
            <button className = "logo" type = "submit">
                logo
            </button>
            <div className = "search">
                <input className = "search_line"></input>
                <button className = "search_btn">
                    <img src = {searchIcon} alt = "searchIcon"></img>
                </button>
            </div>
            <button className='white_btn'>
                <img src = {favIcon} alt = "menuIcon"></img>
            </button>
            <button className='white_btn'>
                <img src = {cartIcon} alt = "menuIcon"></img>
                {/* не забыть тут написать код */}
                <div className='red_note'>1</div> 
            </button>
            <button className='white_btn'>
                <img src = {profileIcon} alt = "menuIcon"></img>
            </button>

        </header>
    )
}

export default Header;