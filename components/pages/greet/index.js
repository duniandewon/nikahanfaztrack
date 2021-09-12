import Wrapper from "../../layout/Wrapper";
import Navbar from '../../elements/Navbar'
import Footer from '../../elements/Footer'
import Language from '../../elements/Language'

import styles from './Greet.module.scss'

const Greet = () => {
  return (
    <Wrapper>
      <h1 className={styles.title}> send greetings</h1>
      <Language/>
      <Footer/>
      <Navbar />
    </Wrapper>
  );
};

export default Greet;
