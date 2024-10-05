import { useTranslation } from "react-i18next";
import style from "./Banner.module.scss";
import { SearchBooks } from "../../features";
import { motion } from "framer-motion";

export function Banner() {
  const { t } = useTranslation("banner");

  // Определяем анимации для текста и формы
  const textVariant = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  const searchVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, delay: 0.5 } },
  };

  return (
    <motion.div
      className={style.banner}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.h1
        variants={textVariant}
        initial="hidden"
        animate="visible"
      >
        {t("text")}
      </motion.h1>
      <motion.div
        variants={searchVariant}
        initial="hidden"
        animate="visible"
      >
        <SearchBooks />
      </motion.div>
    </motion.div>
  );
}
