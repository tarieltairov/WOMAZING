import styles from './Tab.module.scss';
export const Tab = ({ children, active }) => {
  return <div className={`${styles.tab} ${active}`}>{children}</div>;
};
