import { Hero } from "../../components/Hero";
import { NewCollection } from "../../components/Template/NewCollection";

function Main() {
  return (
    <>
      <Hero />
      <section>new collection</section>
      <section>hero</section>
      <section>
      <NewCollection/>
      </section>
      <section>important for us</section>
      <section>team</section>
    </>
  );
}

export default Main;
