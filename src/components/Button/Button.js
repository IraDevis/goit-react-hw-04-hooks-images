import { Component } from "react";
import PropTypes from "prop-types";

import styles from "./Button.module.css";

class Button extends Component {
  static defaultProps = {
    length: 1,
  };

  static propTypes = {
    onClick: PropTypes.func.isRequired,
    length: PropTypes.number,
  };

  componentDidMount() {
    if (this.props.length > 0) {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: "smooth",
      });
    }
  }

  render() {
    return (
      <button
        type="button"
        className={styles.Button}
        onClick={this.props.onClick}
      >
        Load more
      </button>
    );
  }
}

export default Button;
