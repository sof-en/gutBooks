import style from "./style.module.scss";
import image from "../../assets/background-image/15396-woman-reading-bible-joel-muniz-unsplash.jpg"
export function Main() {
    return (
        <div className={style.main}>
            <div className={style.content}>
                <h1>Добро пожаловать в Мир Книг</h1>
                <p>
                    Погружайтесь в бесконечный океан знаний и открытий вместе с нами. 
                    Исследуйте мир литературы, который всегда рядом.
                </p>
                <button className={style.exploreButton}>Исследовать</button>
            </div>
            <div className={style.imageWrapper}>
                <img src={image} alt="Books illustration" />
            </div>
        </div>
    );
}
