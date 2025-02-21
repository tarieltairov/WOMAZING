import Quality from "../../assets/icons/Frame 16.svg";
import Speed from "../../assets/icons/Frame 16 (1).svg";
import Responsibility from "../../assets/icons/Frame 16 (2).svg";
import styles from "./important.module.scss"

export function Important() {
  const values = [
    {
      img: Quality,
      title: "Качество",
      text: `Наши профессионалы работают на \nлучшем оборудовании для пошива \nодежды беспрецедентного \nкачества.`,
    },
    {
      img: Speed,
      title: "Скорость",
      text: `Благодаря отлаженной системе в \nWomazing мы можем отшивать до \n20-ти единиц продукции в наших \nсобственных цехах.`,
    },
    {
      img: Responsibility,
      title: "Ответственность",
      text: `Мы заботимся о людях и планете \nБезотходное производство и \nкомфортные условия труда — все \nэто Womazing.`,
    },
  ];
  // --------------------------------------------------------------------------
  return(
  <section className={styles.important}>
    <h2>Что для нас важно</h2>
    <div className={styles.all_content}>
      {values.map(({ img, title,text}, index) => (
        <div key={index}>
          <img className={styles.first_img} src={img} alt={title} />
          <h3>{title}</h3>
          <p className={styles.desc}>{text}</p>
        </div>
      ))}
    </div>
  </section>
  )
}

// export default Important;
