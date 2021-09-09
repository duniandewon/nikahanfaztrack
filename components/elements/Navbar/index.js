import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faUsers } from "@fortawesome/free-solid-svg-icons";
import { faGift } from "@fortawesome/free-solid-svg-icons";
import { faEnvelopeOpenText } from "@fortawesome/free-solid-svg-icons";

import home from "../../../public/icons/home.png";
import vendor from "../../../public/icons/vendor.png";
import logo from "../../../public/icons/logo.png";
import gift from "../../../public/icons/gift.png";
import ucapan from "../../../public/icons/ucapan.png";

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
