import { Select } from '@chakra-ui/react';
import React from 'react';
import { useTranslation } from 'react-i18next';
import style from "./style.module.scss"

export function LanguageSelector() {
  const { i18n } = useTranslation();

  const changeLanguage = (event: React.ChangeEvent<HTMLSelectElement>) => {
    i18n.changeLanguage(event.target.value);
  };

  return (
    <div>
      <Select className={style.language} onChange={changeLanguage} value={i18n.language}>
        <option value="en">English</option>
        <option value="ru">Русский</option>
      </Select>
    </div>
  );
}
