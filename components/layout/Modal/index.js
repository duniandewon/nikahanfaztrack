import PropTypes from "prop-types";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

import styles from "./Modal.module.scss";

const Modal = ({ children, show, onClose }) => {
  const _handleClickClose = (e) => {
    e.preventDefault();
    onClose();
  };

  const _renderModal = () => {
    return (
      <div className={styles.modalOverlay} onClick={_handleClickClose}>
        <div className={styles.modal}>
          <button className={styles.modalClose} onClick={_handleClickClose}>
            <FontAwesomeIcon icon={faTimes} />
          </button>
          <div className={styles.modalBody}>{children}</div>
        </div>
      </div>
    );
  };

  return show && _renderModal();
};

Modal.propType = {
  show: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default Modal;
