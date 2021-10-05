import { useState, Fragment } from "react";

import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faUsers } from "@fortawesome/free-solid-svg-icons";
import { faGift } from "@fortawesome/free-solid-svg-icons";
import { faEnvelopeOpenText } from "@fortawesome/free-solid-svg-icons";

import Modal from "../../layout/Modal";

import logo from "../../../public/icons/logo.png";

import styles from "./Navbar.module.scss";

const Navbar = () => {
  const [showModal, setShowModal] = useState(false);

  const _handleToggleModal = () => setShowModal(!showModal);

  const _renderModal = () => {
    return (
      <Modal onClose={_handleToggleModal} show={showModal}>
        <div className={styles.youtube}>
          <iframe
            className={styles.iframe}
            src="https://www.youtube.com/embed/U6WdBN3e7RQ"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <a
            onClick={(e) => e.stopPropagation()}
            className={styles.watchOnYoutube}
            href="https://www.youtube.com/watch?v=U6WdBN3e7RQ"
            target="_blank"
          >
            watch on youtube
          </a>
        </div>
      </Modal>
    );
  };

  const _renderLeftSide = () => {
    return (
      <div className={styles.navbar}>
        <Link href="/">
          <a className={styles.navbarItem}>
            <FontAwesomeIcon icon={faHome} />
            <span>beranda</span>
          </a>
        </Link>
        <Link href="/vendor">
          <a className={styles.navbarItem}>
            <FontAwesomeIcon icon={faUsers} />
            <span>vendor</span>
          </a>
        </Link>
      </div>
    );
  };

  const _renderRightSide = () => {
    return (
      <div className={styles.navbar}>
        <Link href="/gift">
          <a className={styles.navbarItem}>
            <FontAwesomeIcon icon={faGift} />
            <span>hadiah</span>
          </a>
        </Link>
        <Link href="/greet">
          <a className={styles.navbarItem}>
            <FontAwesomeIcon icon={faEnvelopeOpenText} /> <span>ucapan</span>
          </a>
        </Link>
      </div>
    );
  };

  return (
    <Fragment>
      {_renderModal()}
      <div className={styles.container}>
        {_renderLeftSide()}
        <div className={styles.logo}>
          <Image src={logo} onClick={_handleToggleModal} />
        </div>
        {_renderRightSide()}
      </div>
    </Fragment>
  );
};

export default Navbar;
