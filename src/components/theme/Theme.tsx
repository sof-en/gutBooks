import { BiMoon } from "react-icons/bi";
import { CiLight } from "react-icons/ci";
import { useState } from "react";
// import style from "./style.module.scss";
import { IconButton, useColorMode } from "@chakra-ui/react";
export function Theme() {
  const [isClick, setClick] = useState(true);
  const { toggleColorMode } = useColorMode();
  return (
    <div>
      <IconButton
        onClick={() => {
          setClick((value) => !value);
          toggleColorMode();
        }}
        aria-label="light-darck"
        icon={isClick ? <BiMoon /> : <CiLight />}
      />
    </div>
  );
}
