import "./catalogue.css";
import models__2 from "./../img/models__2.png";

function Catalogue() {
    return (
          <div className="intro">
              <div className="container">
                <div className="catalogue_page">

                  <div className="catalogue__header">
                    <a href="#" className="catalogue__white_style"> catalogue</a>
                    <div className="catalogue__header_choice">
                      <a href="#">all</a>
                      <a href="#">men</a>
                      <a href="#">women</a>
                      <a href="#">kids</a>
                    </div>
                  </div>

                  <div className="catalogue">

                    <div className="catalogue__cards"> 

                        <div className="catalogue__card">
                                  <img className="catalogue__card_img" src = {models__2}></img>
                                  <button className="catalogue__add_cart">add to the cart</button>
                        </div>

                        <div className="catalogue__card">
                                  <img className="catalogue__card_img" src = {models__2}></img>
                                  <button className="catalogue__add_cart">add to the cart</button>
                        </div>

                      <div className="catalogue__card">
                                  <img className="catalogue__card_img" src = {models__2}></img>
                                  <button className="catalogue__add_cart">add to the cart</button>
                        </div>

                        <div className="catalogue__card">
                                  <img className="catalogue__card_img" src = {models__2}></img>
                                  <button className="catalogue__add_cart">add to the cart</button>
                        </div>

                        <div className="catalogue__card">
                                  <img className="catalogue__card_img" src = {models__2}></img>
                                  <button className="catalogue__add_cart">add to the cart</button>
                        </div>

                        <div className="catalogue__card">
                                  <img className="catalogue__card_img" src = {models__2}></img>
                                  <button className="catalogue__add_cart">add to the cart</button>
                        </div>

                    </div>

                    <div className="catalogue__main_card">
                      <img src = {models__2}></img>
                      <button className="catalogue__add_cart">add to the cart</button>
                    </div>

                  </div> 

                  </div>
                </div>
              </div>
  
    );
  }
  
  export default Catalogue;