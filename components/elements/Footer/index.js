import { useRouter } from "next/router";

import en from "../../../public/locales/en/translate";
import id from "../../../public/locales/id/translate";

import styles from "./Footer.module.scss";

const Footer = () => {
  const { locale } = useRouter();

  const t = locale === "en" ? en : id;

  return (
    <footer className={styles.footer}>
      <p>{t.footer.top}</p>
      <p>{t.footer.bottom}</p>
    </footer>
  );
};

export default Footer;
