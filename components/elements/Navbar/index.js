import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faUsers } from "@fortawesome/free-solid-svg-icons";
import { faGift } from "@fortawesome/free-solid-svg-icons";
import { faEnvelopeOpenText } from "@fortawesome/free-solid-svg-icons";

import logo from "../../../public/icons/logo.png";

import styles from "./Navbar.module.scss";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.navbar}>
        <div className={styles.navbarItem}>
          <FontAwesomeIcon icon={faHome} />
          <span>beranda</span>
        </div>
        <div className={styles.navbarItem}>
          <FontAwesomeIcon icon={faUsers} />
          <span>vendor</span>
        </div>
      </div>
      <div className={styles.logo}>
        <Image src={logo} />
      </div>
      <div className={styles.navbar}>
        <div className={styles.navbarItem}>
          <FontAwesomeIcon icon={faGift} />
          <span>hadiah</span>
        </div>
        <div className={styles.navbarItem}>
          <FontAwesomeIcon icon={faEnvelopeOpenText} /> <span>ucapan</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
