import { FormEvent, useEffect, useState } from "react";
import { useLazyGetBooksQuery } from "./api/api";
import style from "./style.module.scss";
import { Button, Input, useColorMode, useToast } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { useDebounce } from "../../hooks";
import { useAction } from "../../hooks/useAction";
import { useTypedSelector } from "../../hooks/useTypedSelector";

export function SearchBooks() {
  const { colorMode } = useColorMode();
  const { t } = useTranslation("banner");
  const [search, setSearch] = useState("");
  const debounce = useDebounce(search.replace(/\s+/g, ''), 300);
  const [trigger] = useLazyGetBooksQuery();
  const [submit, setSubmit] = useState(false);
  const toast = useToast();
  const { setBooksData } = useAction();
  const { booksData } = useTypedSelector(state => state.booksSlice)

  const handleCLick = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(debounce.length === 0) {
      toast({
        title: t("info"),
        status: 'info',
        duration: 5000,
        isClosable: true,
      })
      setSubmit(false)
      // return;
    }else{
      setSubmit(true);
      trigger(debounce);
    }
  }
  
  useEffect(() => {
    if (submit) {
      const examplePromise = new Promise((resolve, reject) => {
        setTimeout(() => {
          trigger(debounce)
            .then(response => {
              if (response.error) {
                reject();
                setSubmit(false)
              } else if(response.data?.results.length === 0){
                toast({
                  title: "Книга не найдено",
                  status: "error",
                  position: "top",
                  duration: 5000
                })
                setSubmit(false)
                resolve(response.endpointName);
              } 
              else {
                resolve(response.data);
                setBooksData(response.data?.results);
                console.log(booksData)
                setSubmit(false); 
              }
            });
        }, 1000);
      });
      toast.promise(examplePromise, {
        success: { title:  t("toast-success"), description: '' },
        error: { title: t("toast-error"), description: '' },
        loading: { title: t("toast-loading"), description: '' },
      });
    }
  }, [trigger, toast, submit]);



  return (
    <form
      onSubmit={(e) =>handleCLick(e)}
      className={style.search}
      data-theme={colorMode}
    > 
      <div className={style.search} data-theme={colorMode}>
        <Input
          required
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className={style.input}
          type="search"
          placeholder={t("search")}
        />
        <Button isDisabled={submit} type="submit" className={style["search-btn"]}>
          {t("search-btn")}
        </Button>
      </div>
    </form>
  );
}
