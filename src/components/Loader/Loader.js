// import { Component } from "react";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Spinner from "react-loader-spinner";

export default function Loader() {
  return (
    <Spinner
      type="Puff"
      color="#00BFFF"
      height={100}
      width={100}
      timeout={3000}
      className="Loader"
    />
  );
}

// class Loader extends Component {
//   render() {
// return (
//   <Spinner
//     type="Puff"
//     color="#00BFFF"
//     height={100}
//     width={100}
//     timeout={3000}
//     className="Loader"
//   />
// );
//   }
// }

// export default Loader;
