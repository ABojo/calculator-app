import styles from "./Header.module.scss";

function Header() {
  return (
    <header className={styles.header}>
      <h1 className={styles.header__title}>calc</h1>
      <button>Theme</button>
    </header>
  );
}

export default Header;
