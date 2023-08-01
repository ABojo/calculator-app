import styles from "./ThemeSwitch.module.scss";

const activeClass = styles["control__button--active"];

function ThemeSwitch() {
  function switchTheme(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    const target = e.target as HTMLButtonElement;
    const activeButton = document.querySelector(`.${activeClass}`);

    //only if the currently active button and target are different
    if (target !== activeButton) {
      //pull theme off data attirbute and update root element
      const dataTheme = target.getAttribute("data-theme")!;
      document.documentElement.className = dataTheme;

      //remove active class from current and add it to target
      activeButton?.classList.remove(activeClass);
      target.classList.add(activeClass);
    }
  }

  return (
    <div className={styles.container}>
      <p className={styles.container__title}>Theme</p>
      <div className={styles.control}>
        <div className={styles.control__head}>
          <span className={styles.control__number}>1</span>
          <span className={styles.control__number}>2</span>
          <span className={styles.control__number}>3</span>
        </div>
        <div className={styles.control__pill}>
          <button
            onClick={switchTheme}
            data-theme="one"
            className={`${styles.control__button} ${styles["control__button--active"]}`}
          ></button>
          <button onClick={switchTheme} data-theme="two" className={styles.control__button}></button>
          <button onClick={switchTheme} data-theme="three" className={styles.control__button}></button>
        </div>
      </div>
    </div>
  );
}

export default ThemeSwitch;
