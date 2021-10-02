import Wrapper from "../../layout/Wrapper";
import Navbar from "../../elements/Navbar";
import Language from "../../elements/Language";
import Footer from "../../elements/Footer";

import styles from "./Gift.module.scss";

const Gift = () => {
  return (
    <Wrapper>
      <h1 className={styles.title}>gift</h1>

      <div className={styles.sendGift}>
        <p>Send gifts to:</p>
        <p className={styles.address}>
          Jl Cipinang Cepedak 2 No 22, Kelurahan Cipinang Cempedak, Kecamatan
          Jati Negara, Jakarta Timur, 13340
        </p>
      </div>

      <p className={styles.or}>or</p>

      <div className={styles.cash}>
        <p className={styles.bca}>
          <span>BCA acct hanan</span> <span>2731944727</span>
        </p>

        <p className={styles.bca}>
          <span>jenius acct M. Baragbah</span> <span>90012014737</span>
        </p>

        <p className={styles.paypal}>
          <span>Paypal</span>
          <a target="_blank" href="https://www.paypal.me/nanhanan">
            https://www.paypal.me/nanhanan
          </a>
        </p>
      </div>

      <Footer />
      <Navbar />
      <Language />
    </Wrapper>
  );
};

export default Gift;
