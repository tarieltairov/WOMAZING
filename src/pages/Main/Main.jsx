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
