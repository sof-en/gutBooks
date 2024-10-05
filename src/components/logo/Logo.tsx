import style from "./Logo.module.scss"

import { Link } from "react-router-dom"
export function Logo() {

    return (
        <div className={style.logo} >
            {/* https://gutendex.com/ */}
            <Link to={"/"}>Gutendex BOOKS</Link>
        </div>
    )
}