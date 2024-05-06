import Image from "next/image";
import styles from "./page.module.css";
import Home from "./components/Home";
import Signup from "./components/Signup";
function Main() {
  return (
    <>
      <Signup />
      <Home />
    </>
  );
}

export default Main;
