// import { Component } from "react";
import { useState } from "react";
import PropTypes from "prop-types";

import styles from "./Searchbar.module.css";

export default function Searchbar({ onSubmit }) {
  const [searchQuery, setSearchQuery] = useState("");

  const handleChange = (e) => {
    setSearchQuery(e.currentTarget.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    onSubmit(searchQuery);
    setSearchQuery("");
  };

  return (
    <header className={styles.Searchbar}>
      <form className={styles.SearchForm} onSubmit={handleSubmit}>
        <button type="submit" className={styles.SearchFormButton}>
          <span className={styles.SearchFormButtonLabel}>Search</span>
        </button>
        <input
          value={searchQuery}
          className={styles.SearchFormInput}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          onChange={handleChange}
        />
      </form>
    </header>
  );
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

// class Searchbar extends Component {
// static propTypes = {
//   onSubmit: PropTypes.func.isRequired,
// };

//   state = {
//     searchQuery: "",
//   };

// handleChange = (e) => {
//   this.setState({ searchQuery: e.currentTarget.value });
// };

// handleSubmit = (e) => {
//   e.preventDefault();

//   this.props.onSubmit(this.state.searchQuery);
//   this.setState({ searchQuery: "" });
// };

//   render() {
// return (
//   <header className={styles.Searchbar}>
//     <form className={styles.SearchForm} onSubmit={this.handleSubmit}>
//       <button type="submit" className={styles.SearchFormButton}>
//         <span className={styles.SearchFormButtonLabel}>Search</span>
//       </button>
//       <input
//         value={this.state.searchQuery}
//         className={styles.SearchFormInput}
//         type="text"
//         autoComplete="off"
//         autoFocus
//         placeholder="Search images and photos"
//         onChange={this.handleChange}
//       />
//     </form>
//   </header>
// );
//   }
// }

// export default Searchbar;
