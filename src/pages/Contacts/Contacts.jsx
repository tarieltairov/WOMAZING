import { AppContainer } from '../../layouts/AppContainer'

import { ContactsCard } from './components/ContactsCard'
import { InputSection } from './components/InputSection'

const Contact = () => {
  return (
    <AppContainer>
      <section className="cart-section-1">
        <ContactsCard />
      </section>
      <section className="cart-section-2">
        <InputSection />
      </section>
    </AppContainer>
  )
}

export default Contact
