import { useEffect } from "react";
import PropTypes from "prop-types";

import styles from "./Button.module.css";

export default function Button({ onClick, length }) {
  useEffect(() => {
    if (length > 0) {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [length]);

  return (
    <button type="button" className={styles.Button} onClick={onClick}>
      Load more
    </button>
  );
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  length: PropTypes.number,
};

Button.defaultProps = {
  length: 1,
};
