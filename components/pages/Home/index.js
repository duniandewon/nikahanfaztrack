import Wrapper from "../../layout/Wrapper";
import Counter from "../../elements/Counter";
import Navbar from "../../elements/Navbar";
import Cover from "../../elements/Cover";
import Footer from "../../elements/Footer";

import styles from "./Home.module.scss";
import { useEffect, useState } from "react";

const Home = () => {
  const [hasVisited, setHasVisited] = useState(true);

  const _renderHomePage = () => (
    <Wrapper>
      <h1 className={styles.title}>Pernikahan</h1>
      <div className={styles.names}>
        <p>Hanan</p>
        <span>&</span>
        <p>Abolfaz</p>
      </div>
      <p className={styles.date}>
        minggu, <span>24</span> oktober <span>2021</span>
      </p>
      <div className={styles.counterContainer}>
        <Counter />
      </div>
      <Footer />
      <Navbar />
    </Wrapper>
  );

  useEffect(() => {
    const visited = localStorage.getItem("has-visited");

    if (visited) setHasVisited(true);
  }, []);

  return !hasVisited ? <Cover /> : _renderHomePage();
};

export default Home;
