import { ContactsCard } from "../../components/Contacts/ContactsCard";
import { AppContainer } from "../../layouts/AppContainer";

const Contact = () => {
    return (
        <AppContainer >
            <section className="cart-section-1"><ContactsCard/></section>
            <section className="cart-section-2">{/* Часть Амины */}</section>
        </AppContainer>
    );
};

export default Contact;
