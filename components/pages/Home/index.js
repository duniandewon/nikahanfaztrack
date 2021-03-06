import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import en from "../../../public/locales/en/translate";
import id from "../../../public/locales/id/translate";

import Wrapper from "../../layout/Wrapper";
import Counter from "../../elements/Counter";
import Cover from "../../elements/Cover";
import styles from "./Home.module.scss";

const Home = () => {
  const [hasVisited, setHasVisited] = useState(false);

  const { locale } = useRouter();

  const t = locale === "en" ? en : id;

  const _handleToggleHasVisited = () => {
    setHasVisited(!hasVisited);
  };

  const _renderHomePage = () => (
    <Wrapper title={t.navBar.home}>
      <h1 className={styles.title}>{t.title}</h1>
      <div className={styles.names}>
        <p>Hanan</p>
        <span>&</span>
        <p>Abolfaz</p>
      </div>
      <p className={styles.date}>
        {t.date.day}, <span>24</span> {t.date.month} <span>2021</span>
      </p>
      <div className={styles.counterContainer}>
        <Counter />
      </div>
    </Wrapper>
  );

  const _renderCoverPage = () => {
    return <Cover onOpenCover={_handleToggleHasVisited} />;
  };

  useEffect(() => {
    const visited = localStorage.getItem("has-visited");

    if (visited) _handleToggleHasVisited();
  }, []);

  return !hasVisited ? _renderCoverPage() : _renderHomePage();
};

export const getStaticProp = async ({ locale }) => {
  return {
    props: {
      locale,
    },
  };
};

export default Home;
