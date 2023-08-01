import styles from "./Header.module.scss";
import ThemeSwitch from "../ThemeSwitch/ThemeSwitch";

function Header() {
  return (
    <header className={styles.header}>
      <h1 className={styles.header__title}>calc</h1>
      <ThemeSwitch />
    </header>
  );
}

export default Header;
