
import styles from "./AppContainer.module.scss";

export function AppContainer({ children }) {
  return <div className={styles.container}>{children}</div>;
}
