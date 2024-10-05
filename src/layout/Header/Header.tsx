import { AiOutlineHeart } from "react-icons/ai"; 
import { Logo, Theme } from "../../components";
import style from "./Header.module.scss";
import { LanguageSelector } from "../../features";
import { Button } from "@chakra-ui/react";

export function Header() {

  return (
    <div className={style.header}>
      <Logo />
      <div className={style.options} >
        <Button ><AiOutlineHeart /></Button>
        <Theme/>
        <LanguageSelector />
      </div>
    </div>
  );
}
