import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faUsers } from "@fortawesome/free-solid-svg-icons";
import { faGift } from "@fortawesome/free-solid-svg-icons";
import { faEnvelopeOpenText } from "@fortawesome/free-solid-svg-icons";

import Link from "next/link";
import logo from "../../../public/icons/logo.png";

import styles from "./Navbar.module.scss";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.navbar}>
        <Link href="/">
          <a className={styles.navbarItem}>
            <FontAwesomeIcon icon={faHome} />
            <span>beranda</span>
          </a>
        </Link>
        <Link href="/">
          <a className={styles.navbarItem}>
            <FontAwesomeIcon icon={faUsers} />
            <span>vendor</span>
          </a>
        </Link>
      </div>
      <div className={styles.logo}>
        <Image src={logo} />
      </div>
      <div className={styles.navbar}>
        <Link href="/">
          <a className={styles.navbarItem}>
            <FontAwesomeIcon icon={faGift} />
            <span>hadiah</span>
          </a>
        </Link>
        <Link href="/message">
          <a className={styles.navbarItem}>
            <FontAwesomeIcon icon={faEnvelopeOpenText} /> <span>ucapan</span>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
