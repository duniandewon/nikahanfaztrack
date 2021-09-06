import Image from "next/image";

import styles from "./Wrapper.module.scss";

const Wrapper = (props) => {
	const { children } = props;
	return (
		<div className={styles.wrapper}>
			<Image className={styles.background} src="/images/background.png" alt="background image" layout="fill" />
			{children}
		</div>
	);
};

export default Wrapper;
