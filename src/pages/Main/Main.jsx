<<<<<<< HEAD
function Main() {
  return (
    <>
      <section>hero</section>
      <section>new collection</section>
      <section>important for us</section>
      <section>team</section>
    </>
  );
}

export default Main;
=======
import { AppContainer } from '../../layouts/AppContainer/AppContainer'

import styles from './Main.module.scss'
import { Hero } from './components/Hero/Hero'
import { ImportantSection } from './components/ImportantSection'
import { NewCollection } from './components/NewCollection/NewCollection'
import { Team } from './components/Team/Team'

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
  )
}

export default Main
>>>>>>> d5e825246e61db688d50a2dd6e171167300f7ab0
