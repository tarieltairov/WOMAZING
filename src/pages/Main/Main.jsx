import { Hero } from "../../components/Hero/Hero";
import { Important } from "../../components/important";
import { NewCollection } from "../../components/NewCollection/NewCollection";
import { Team } from "../../components/Team/Team";
import styles from "./Main.module.scss";
function Main() {
  return (
    <main className={styles.page}>
      <Hero />
      <NewCollection />
      <Important />
      <Team />
    </main>
  );
}

export default Main;
