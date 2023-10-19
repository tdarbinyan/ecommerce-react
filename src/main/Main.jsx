import "./main.css";
import mainPhoto from "./../img/main_photo.png";
import nextIcon from "./../img/next_icon.svg";

function Main() {
  return (
    <section className="main">
      <img src={mainPhoto} className="main_photo"></img>

      <div className="purple_form">
        <div className="main__text">
          <h1>some text describing our bestseller</h1>
        </div>
        <button className="purple_button">
          add to the cart
        </button>
      </div>

      <button className="main__next_button">
        <img src={nextIcon}></img>
      </button>
    </section>
  );
}

export default Main;