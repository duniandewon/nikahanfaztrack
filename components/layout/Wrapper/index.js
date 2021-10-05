import { Fragment } from "react";
import Head from "next/head";
import Image from "next/image";
import PropTypes from 'prop-types'

import styles from "./Wrapper.module.scss";

const Wrapper = (props) => {
  const { children, title } = props;

  const pageTitle = title.charAt(0).toUpperCase() + title.slice(1)

  return (
    <Fragment>
      <Head>
        <title>
          nikahanfaztrack.com | {pageTitle}
        </title>
      </Head>
      <div className={styles.wrapper}>
        <Image
          className={styles.background}
          src="/images/background.png"
          alt="background image"
          layout="fill"
        />
        {children}
      </div>
    </Fragment>
  );
};

Wrapper.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
}

export default Wrapper;
