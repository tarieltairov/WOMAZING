import { Hero } from "../../components/Hero/Hero";
import { Important } from "../../components/Important";
import { NewCollection } from "../../components/NewCollection/NewCollection";
import { Team } from "../../components/Team/Team";
import { AppContainer } from "../../layouts/AppContainer/AppContainer";
import styles from "./Main.module.scss";

function Main() {
  return (
    <AppContainer>
      <main className={styles.page}>
        <Hero />
        <NewCollection />
        <Important />
        <Team />
      </main>
    </AppContainer>
  );
}

export default Main;
