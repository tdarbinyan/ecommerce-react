import "./catalogue.css";
import models__2 from "./../img/models__2.png";
import models__female from "./../img/womens_sneakers.webp"
import models__kids from "./../img/kids_sneakers.webp"
import React, { useState } from 'react';
import { showMale } from "./CatalogueFunctions.jsx";
import { showFemale } from "./CatalogueFunctions.jsx";
import { showKids } from "./CatalogueFunctions.jsx";

function Cards({model}) {
  return (
    <div className="catalogue__cards"> 

                        <div className="catalogue__card">
                                  <img className="catalogue__card_img" src = {model}></img>
                                  <button className="catalogue__add_cart">add to the cart</button>
                        </div>

                        <div className="catalogue__card">
                                  <img className="catalogue__card_img" src = {model}></img>
                                  <button className="catalogue__add_cart">add to the cart</button>
                        </div>

                      <div className="catalogue__card">
                                  <img className="catalogue__card_img" src = {model}></img>
                                  <button className="catalogue__add_cart">add to the cart</button>
                        </div>

                        <div className="catalogue__card">
                                  <img className="catalogue__card_img" src = {model}></img>
                                  <button className="catalogue__add_cart">add to the cart</button>
                        </div>

                        <div className="catalogue__card">
                                  <img className="catalogue__card_img" src = {model}></img>
                                  <button className="catalogue__add_cart">add to the cart</button>
                        </div>

                        <div className="catalogue__card">
                                  <img className="catalogue__card_img" src = {model}></img>
                                  <button className="catalogue__add_cart">add to the cart</button>
                        </div>

    </div>
  );
}

function MainCard({model}) {
  return (                    
  <div className="catalogue__main_card">
    <img src = {model}></img>
    <button className="catalogue__add_cart">add to the cart</button>
  </div>);
}

function Catalogue() {
  const [isHidden, setIsHidden] = useState(false);

  const hideElementByClass = (className) => {
    const elements = document.querySelectorAll('.' + className);
    elements.forEach((element) => {
      element.style.display = 'none';
    });
  };

  const handleButtonClick = () => {
    setIsHidden(true);

    hideElementByClass('exampleClass');
  };

    return (
          <div className="intro">
              <div className="container">
                <div className="catalogue_page">

                  <div className="catalogue__header">
                    <a href="#" className="catalogue__white_style"> catalogue</a>
                    <div className="catalogue__header_choice">
                      {/*<a href="#">all</a>*/}
                      <a onClick={() => showMale()}>men</a>
                      <a onClick={() => showFemale()}>women</a>
                      <a onClick={() => showKids()}>kids</a>
                    </div>
                  </div>

                  <div className="catalogue__male">
                    <Cards model = {models__2}/>
                    <MainCard model = {models__2}/>
                  </div> 

                  <div className="catalogue__female">
                    <Cards model = {models__female}/>
                    <MainCard model = {models__female}/>
                  </div> 

                  <div className="catalogue__kids">
                    <Cards model = {models__kids}/>
                    <MainCard model = {models__kids}/>
                  </div> 

                  </div>
                </div>
              </div>
  
    );
  }
  
  export default Catalogue;