import PropTypes from "prop-types";
import styles from "./TextField.module.scss";

const TextField = (props) => {
  const { type, id, name, value, placeholder, onChange, onKeyPress } = props;
  return (
    <div className={styles.container}>
      <input
        type={type}
        name={name}
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onKeyPress={onKeyPress}
        className={styles.input}
      />
    </div>
  );
};

TextField.propTypes = {
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  onKeyPress: PropTypes.func,
};

export default TextField;
