import React from "react";
import styles from "./GutendexInfo.module.scss";
import { useColorMode } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer"; // Хук для отслеживания видимости элементов

export const GutendexInfo: React.FC = () => {
  const { colorMode } = useColorMode(); // Получаем текущую тему (light или dark)
  const { t } = useTranslation("gutendexInfo");

  // Определяем, когда элемент появляется в области видимости
  const [titleRef, titleInView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [descRef, descInView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [cardRef, cardInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  // Анимации для заголовка и описания
  const titleVariant = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  const descriptionVariant = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, delay: 0.5 } },
  };

  // Анимация для карточек
  const cardVariant = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8, delay: 1 } },
  };

  return (
    <section className={styles.wrapper}>
      <section className={styles.gutendexSection} data-theme={colorMode}>
        <motion.h1
          ref={titleRef} // Отслеживаем заголовок
          className={styles.title}
          variants={titleVariant}
          initial="hidden"
          animate={titleInView ? "visible" : "hidden"}
        >
          {t("gutendex_title")}
        </motion.h1>

        <motion.p
          ref={descRef} // Отслеживаем описание
          className={styles.description}
          variants={descriptionVariant}
          initial="hidden"
          animate={descInView ? "visible" : "hidden"}
        >
          {t("gutendex_description")}
        </motion.p>

        <div className={styles.infoCards}>
          <motion.div
            ref={cardRef} // Отслеживаем карточки
            className={styles.card}
            variants={cardVariant}
            initial="hidden"
            animate={cardInView ? "visible" : "hidden"}
          >
            <h2 className={styles.cardTitle}>{t("gutendex_wide_choice")}</h2>
            <p className={styles.cardDescription}>
              {t("gutendex_wide_choice_description")}
            </p>
          </motion.div>

          <motion.div
            ref={cardRef}
            className={styles.card}
            variants={cardVariant}
            initial="hidden"
            animate={cardInView ? "visible" : "hidden"}
          >
            <h2 className={styles.cardTitle}>{t("gutendex_free_access")}</h2>
            <p className={styles.cardDescription}>
              {t("gutendex_free_access_description")}
            </p>
          </motion.div>

          <motion.div
            ref={cardRef}
            className={styles.card}
            variants={cardVariant}
            initial="hidden"
            animate={cardInView ? "visible" : "hidden"}
          >
            <h2 className={styles.cardTitle}>{t("gutendex_user_interface")}</h2>
            <p className={styles.cardDescription}>
              {t("gutendex_user_interface_description")}
            </p>
          </motion.div>
        </div>
      </section>
    </section>
  );
};
