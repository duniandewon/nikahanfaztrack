import Link from "next/link";
import { useRouter } from "next/router";

import styles from "./Language.module.scss";

const Laguange = () => {
  const { route } = useRouter();

  return (
    <div className={styles.container}>
      <Link href={route} locale="en">
        <a>🇬🇧</a>
      </Link>
      <Link href={route} locale="id">
        <a>🇮🇩</a>
      </Link>
    </div>
  );
};

export default Laguange;
