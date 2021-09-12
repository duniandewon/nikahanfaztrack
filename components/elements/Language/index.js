import Link from "next/link";
import { useRouter } from "next/router";

import styles from "./Language.module.scss";

const Laguange = () => {
  const { route, locale } = useRouter();

  return (
    <div className={styles.container}>
      <Link href={route} locale="en">
        <a className={locale === "en" ? styles.active : styles.link}>en</a>
      </Link>
      <Link href={route} locale="id">
        <a className={locale === "id" ? styles.active : styles.link}>id</a>
      </Link>
    </div>
  );
};

export default Laguange;
