import { Hero } from "../../components/Hero";
import { NewCollection } from "../../components/Template/NewCollection";
import { NewCollection } from "../../components/NewCollection";

function Main() {
  return (
    <>
      <Hero />
      <section>new collection</section>
      <section>hero</section>
      <NewCollection/>
      <section>important for us</section>
      <section>team</section>
    </>
  );
}

export default Main;
