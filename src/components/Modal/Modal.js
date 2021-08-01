import { useEffect } from "react";
import PropTypes from "prop-types";

import styles from "./Modal.module.css";

export default function Modal({ image, onClose }) {
  useEffect(() => {
    const onEscKeyPress = (e) => {
      if (e.code === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", onEscKeyPress);
    return () => {
      window.removeEventListener("keydown", onEscKeyPress);
    };
  }, [onClose]);

  const onOverlayClick = (e) => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };
  return (
    <div className={styles.Overlay} onClick={onOverlayClick}>
      <div className={styles.Modal}>
        <img src={image} alt="" />
      </div>
    </div>
  );
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
};
