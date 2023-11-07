import "./models.css";
import menPhoto from "./../img/categories_men.png";
import womenPhoto from "./../img/categories_women.png";
import kidsPhoto from "./../img/categories_kids.png";
import minicartIcon from "./../img/mini_cart_icon.svg";
import showIcon from "./../img/show_icon.svg";
import favIcon from "./../img/fav_icon.svg";
import models__1 from "./../img/models__1.png";
import models__2 from "./../img/models__2.png";
import models__3 from "./../img/models__3.png";
import models__4 from "./../img/models__4.png";

function Models() {
  return (
        <div className="intro">
            <div className="container">
                <div className="models_page">

                    <div className="categories">
                        {/* -----------men--------------*/}
                        <div className="categories__card">
                            <img className= "categories__card_img" src = {menPhoto}></img>
                            <div className="categories__card__buttons">
                                <a href="#" className="categories__card__sex">men</a>
                                <a href="#" className="categories__card__cart"><img src = {minicartIcon}></img>start shopping</a>
                            </div>
                        </div>
                        {/* -----------women------------*/}
                        <div className="categories__card">
                            <img className= "categories__card_img" src = {womenPhoto}></img>
                            <div className="categories__card__buttons">
                                <a href="#" className="categories__card__sex">women</a>
                                <a href="#" className="categories__card__cart"><img src = {minicartIcon}></img>start shopping</a>
                            </div>
                        </div>                        
                        {/* -----------kids-------------*/}
                        <div className="categories__card">
                            <img className= "categories__card_img" src = {kidsPhoto}></img>
                            <div className="categories__card__buttons">
                                <a href="#" className="categories__card__sex">kids</a>
                                <a href="#" className="categories__card__cart"><img src = {minicartIcon}></img>start shopping</a>
                            </div>
                        </div>  
                    </div>


                    <div className="models">
                        
                        <a className="show_btn">
                            <div className="show_btn_content">
                                <img src = {showIcon}></img>
                                <p>show all</p>
                            </div>
                        </a>

                        <div className="models__cards">

                            <div className="models__card">
                                <img className="models__fav" src = {favIcon}></img>
                                <img className="models__card_img" src = {models__1}></img>
                                <button className="models__add_cart">add to the cart</button>
                            </div>

                            <div className="models__card">
                                <img className="models__fav" src = {favIcon}></img>
                                <img className="models__card_img" src = {models__2}></img>
                                <button className="models__add_cart">add to the cart</button>
                            </div>

                            <div className="models__card">
                                <img className="models__fav" src = {favIcon}></img>
                                <img className="models__card_img" src = {models__3}></img>
                                <button className="models__add_cart">add to the cart</button>
                            </div>

                            <div className="models__card">
                                <img className="models__fav" src = {favIcon}></img>
                                <img className="models__card_img" src = {models__4}></img>
                                <button className="models__add_cart">add to the cart</button>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </div>

  );
}

export default Models;