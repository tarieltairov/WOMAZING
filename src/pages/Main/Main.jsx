import { Hero } from "../../components/Hero";
import { ImportantSection } from "../../components/ImportantSection";
import { NewCollection } from "../../components/NewCollection";
import { Team } from "../../components/Team";
import { AppContainer } from "../../layouts/AppContainer";
import styles from "./Main.module.scss";

function Main() {
  return (
    <main className={styles.page}>
      <Hero />
      <AppContainer className={styles.sectionsWithoutHero}>
        <NewCollection />
        <ImportantSection />
        <Team />
      </AppContainer>
    </main>
  );
}

export default Main;
