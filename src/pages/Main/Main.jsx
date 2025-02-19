import React from "react";  
import Quality from "./img-ravil/Frame 16.svg";
import Speed from "./img-ravil/Frame 16 (1).svg";
import Responsibility from "./img-ravil/Frame 16 (2).svg";

const values = [
  {
    img: Quality,
    title: "Качество",
    text: "Наши профессионалы работают на\n лучшем оборудовании для пошива\nодежды беспрецедентного \nкачества.",
  },
  {
    img: Speed,
    title: "Скорость",
    text: "Благодаря отлаженной системе в \n Womazing мы можем отшивать до \n 20-ти единиц продукции в наших \n собственных цехах.",
  },
  {
    img: Responsibility,
    title: "Ответственность",
    text: "Мы заботимся о людях и планете.\nБезотходное производство и \n комфортные условия труда — все \n это Womazing.",
  },
];

function Main() {
  return (
    <>
      <section>hero</section>
      <section>new collection</section>

      <section className="important">
        <h2>Что для нас важно</h2>
        <div className="all-content">
          {values.map(({ img, title, text }, index) => (
            <div key={index}>
              <img className="first-img" src={img} alt={title} />
              <h3>{title}</h3>
              <p>
                {text.split("\n").map((line, i) => (
                  <React.Fragment key={i}>
                    {line}
                    <br />
                  </React.Fragment>
                ))}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section>team</section>
    </>
  );
}

export default Main;