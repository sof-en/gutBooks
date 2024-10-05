import { Button, Input, useColorMode } from "@chakra-ui/react"
import style from "./style.module.scss"
import { useTranslation } from "react-i18next"
export function SearchComponent() {
    const {colorMode} = useColorMode()
    const {t} = useTranslation("banner")
    return (
        <form className={style.search} data-theme={colorMode}>
            <div className={style.search} data-theme={colorMode}>
            <Input className={style.input} type="search" placeholder={t("search")}/>
            <Button className={style["search-btn"]}>{t("search-btn")}</Button>
            </div>
        </form>
    )
}   