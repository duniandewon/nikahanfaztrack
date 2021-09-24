import PropTypes from "prop-types";

import styles from "../TextField/TextField.module.scss";

const TextArea = (props) => {
  const { id, name, value, placeholder, onChange, onKeyPress } = props;

  return (
    <div className={styles.container}>
      <textarea
        className={styles.input}
        value={value}
        id={id}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        onKeyPress={onKeyPress}
        maxLength="280"
      />
    </div>
  );
};

TextArea.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  onKeyPress: PropTypes.func,
};

export default TextArea;
