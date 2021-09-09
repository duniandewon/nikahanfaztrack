import Image from "next/image";
import Router from "next/router";
import { useState } from "react";

import Wrapper from "../../layout/Wrapper";

import Seal from "../../../public/images/seal.png";
import CoverRight from "../../../public/images/cover-right.png";
import Coverleft from "../../../public/images/cover-left.png";

import styles from "./Cover.module.scss";

export default function Cover(props) {
  const [isSealOpen, setIsSealOpen] = useState(false);

  const _handleOpenSeal = () => {
    setIsSealOpen(!isSealOpen);
    localStorage.setItem("has-visited", 1);

    setTimeout(() => {
    	props.onOpenCover()
    }, 1120);
  };
  return (
    <Wrapper>
      <div
        className={isSealOpen ? styles.coverRightOut : styles.coverRight}
        onClick={_handleOpenSeal}
      >
        <Image src={CoverRight} alt="Cover right" />
      </div>

      <div
        className={isSealOpen ? styles.coverLeftOut : styles.coverLeft}
        onClick={_handleOpenSeal}
      >
        <Image src={Coverleft} alt="Cover left" />
      </div>

      <div
        className={isSealOpen ? styles.sealOut : styles.seal}
        onClick={_handleOpenSeal}
      >
        <Image src={Seal} alt="Cover right" />
      </div>
    </Wrapper>
  );
}
