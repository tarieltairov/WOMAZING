import styles from "./AppContainer.module.scss";

export function AppContainer({ children, className }) {
  return <div className={`${styles.container} ${className}`}>{children}</div>;
}
