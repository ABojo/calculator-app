import styles from "./Container.module.scss";

interface ContainerProps {
  children: React.ReactNode;
}

function Container({ children }: ContainerProps): JSX.Element {
  return <main className={styles.main}>{children}</main>;
}

export default Container;
