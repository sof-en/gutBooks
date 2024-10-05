import { Skeleton, Stack } from "@chakra-ui/react";
import { useGetInfoBooksQuery } from "../../features/search-books/api/api";
import style from "./style.module.scss";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export function SaveAuthorsUi() {
  const { data, isLoading } = useGetInfoBooksQuery("");
  const { t } = useTranslation("saveAuthorsUI"); // Подключаем i18n с ключом для конкретного namespace

  return (
    <div className={style.wrapper}>
      <div className={style.content}>
        <h2>{t("authors_title")}</h2> {/* Перевод заголовка */}
        <span className={style.description}>
          {t("authors_description")} {/* Перевод описания */}
        </span>
        <div className={style.carts_wrapper}>
          <div className={style.carts}>
            {!isLoading ? (
              <>
                {data?.results?.slice(0, 3).map((item) => (
                  <div key={item.id} className={style.info}>
                    <div className={style.imageWrapper}>
                      Gutendex Books
                    </div>
                    {item.authors.map((sub_item) => (
                      <p key={sub_item.name}>{sub_item.name}</p>
                    ))}
                    <div className={style.count}>
                      {t("download_count")}: <span>{item.download_count}</span> {/* Перевод "Количество скачиваний" */}
                    </div>
                    <div className={style.books}>
                      <Link
                        target="_blank"
                        to={item.formats["text/html"]}
                        className={style.books_name}
                      >
                        {t("go_to_book")} {/* Перевод "Перейти к книге" */}
                      </Link>
                    </div>
                  </div>
                ))}
              </>
            ) : (
              <>
                {Array.from({ length: 3 }).map((_, index) => (
                  <Stack key={index} spacing={4}>
                    <Skeleton
                      height="150px"
                      borderRadius="20px"
                      startColor="rgba(255, 255, 255, 0.7)"
                      endColor="rgba(255, 255, 255, 0.3)"
                      fadeDuration={1}
                    />
                    <Skeleton
                      height="20px"
                      borderRadius="10px"
                      startColor="rgba(255, 255, 255, 0.7)"
                      endColor="rgba(255, 255, 255, 0.3)"
                      fadeDuration={1}
                    />
                    <Skeleton
                      height="20px"
                      borderRadius="10px"
                      startColor="rgba(255, 255, 255, 0.7)"
                      endColor="rgba(255, 255, 255, 0.3)"
                      fadeDuration={1}
                    />
                  </Stack>
                ))}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
