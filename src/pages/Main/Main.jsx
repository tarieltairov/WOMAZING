import { Hero } from "../../components/Hero/Hero";
import { Important } from "../../components/Important/Important";
// import { Important } from "../../components/Important";
import { NewCollection } from "../../components/NewCollection/NewCollection";
import { Team } from "../../components/Team/Team";
import { AppContainer } from "../../layouts/AppContainer/AppContainer";
import styles from "./Main.module.scss";

function Main() {
  return (
    <main className={styles.page}>
      <Hero />
      <AppContainer className={styles.sectionsWithoutHero}>
        <NewCollection />
        <Important />
        <Team />
      </AppContainer>
    </main>
  );
}

export default Main;
