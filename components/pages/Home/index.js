import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import en from "../../../public/locales/en/translate";
import id from "../../../public/locales/id/translate";

import Wrapper from "../../layout/Wrapper";
import Counter from "../../elements/Counter";
import Navbar from "../../elements/Navbar";
import Cover from "../../elements/Cover";
import Footer from "../../elements/Footer";
import Languge from "../../elements/Language";
import styles from "./Home.module.scss";

const Home = (props) => {
  const [hasVisited, setHasVisited] = useState(false);

  const { locale } = useRouter();

  const t = locale === "en" ? en : id;

  const _renderHomePage = () => (
    <Wrapper>
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
      <Footer />
      <Navbar />
      <Languge />
    </Wrapper>
  );

  useEffect(() => {
    console.log("Router: ", props);
    const visited = localStorage.getItem("has-visited");

    if (visited) setHasVisited(true);
  }, []);

  return !hasVisited ? (
    <Cover onOpenCover={() => setHasVisited(true)} />
  ) : (
    _renderHomePage()
  );
};

export const getStaticProp = async ({ locale }) => {
  return {
    props: {
      locale,
    },
  };
};

export default Home;
