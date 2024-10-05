import { Banner } from "./Banner";
import { GutendexInfo } from "./GutendexInfo";
import { Header } from "./Header";
import style from "./Layout.module.scss";
import { Main } from "./Main";
import { PopularCategory } from "./PopularCategory";
import { SaveAuthorsUi } from "./saveAuthorsUI";

export function Layout() {
  return (
    <div className={style.layout}>
      <div className={style.header_content}>
        <Header />
      </div>
      <Banner />
      <GutendexInfo/>
      <PopularCategory />
      <SaveAuthorsUi />
      <Main />
    </div>
  );
}
