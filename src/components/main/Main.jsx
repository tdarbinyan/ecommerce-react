import './main.css'
import mainPhoto from './../../img/main_photo.png'

function Main () {
    return (
        <section className = "main">
            <img src = {mainPhoto} className = "main_photo"></img>
            <div className = "purple_form">
                <p>
                    some text describing our bestseller
                </p>
            </div>
            <button className = 'purple_button'>
                <h1>
                    add to the cart
                </h1>
            </button>
        </section>
    )
}

export default Main;