import { categories } from "../../mocks";
import style from "./style.module.scss";
import background from "../../assets/background-image/popular-image.jpg";
import { useColorMode } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export function PopularCategory() {
  const { colorMode } = useColorMode();
  const { t } = useTranslation("gutendexPopularCategory");

  const [contentRef, contentInView] = useInView({ triggerOnce: true, threshold: 0.2 });

  // Анимация для изображения
  const imageVariant = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { duration: 1, ease: "easeOut" } },
  };

  // Анимация для заголовка и текста
  const textVariant = {
    hidden: { opacity: 0, y: 50, scale: 0.8 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const categoryVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.2 } },
  };

  return (
    <div className={style.popular}>
      <motion.div
        className={style["popular-image"]}
        variants={imageVariant}
        initial="hidden"
        animate={contentInView ? "visible" : "hidden"}
      >
        <img src={background} alt="popular-content-image" />
      </motion.div>

      <motion.div
        ref={contentRef}
        className={style.content}
        data-theme={colorMode}
        variants={textVariant}
        initial="hidden"
        animate={contentInView ? "visible" : "hidden"}
      >
        <h2>{t("gutendex_popular_categories")}</h2>
        <span>{t("gutendex_popular_categories_description")}</span>

        {categories?.map((item) => (
          <motion.div
            className={style.category}
            key={item.id}
            variants={categoryVariant}
            initial="hidden"
            animate={contentInView ? "visible" : "hidden"}
          >
            <div className={style.num}>{item.id}</div>
            <div>
              <h3>{t(`category_${item.id}_title`)}</h3>
              <span>{t(`category_${item.id}_description`)}</span>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
