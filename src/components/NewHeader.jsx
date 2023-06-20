import styles from "./NewHeader.module.css";
import logo from "../assets/dollar-icon-png-3550.png";

export default function NewHeader() {
  return (
    <header className={styles.header}>
      <img src={logo} alt="logo" />
      <h1>Investment Calculator</h1>
    </header>
  );
}
