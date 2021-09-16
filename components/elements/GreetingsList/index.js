import PropTypes from "prop-types";

import styles from "./GreetingsList.module.scss";

const GreetingsList = ({ messages }) => {
  const getDate = (id) => {
    const date = messages.find((message) => message._id === id).date;

    const today = new Date().getDate();

    const datePosted = new Date(date).getDate();

    const daysAgo = today - datePosted;

    return !!daysAgo ? `${daysAgo} days ago` : "just now";
  };

  const _renderGreetings = () => {
    return messages.map(({ _id, name, message }) => {
      return (
        <div className={styles.container} key={_id}>
          <h3 className={styles.name}>{name}</h3>
          <p className={styles.message}>{message}</p>
          <p className={styles.time}>{getDate(_id)}</p>
        </div>
      );
    });
  };

  const _renderNoGreeting = () => (
    <h2 className={styles.sayHiFirst}>Be the first to say hi</h2>
  );

  return messages && !!messages.length
    ? _renderGreetings()
    : _renderNoGreeting();
};

GreetingsList.propTypes = {
  messages: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      message: PropTypes.string,
      date: PropTypes.string,
    })
  ),
};

export default GreetingsList;
