import magicWoman from "../../assets/images/Frame 34.png";
import brandStyles from "./Brand.module.scss";
import { AppContainer } from "../../layouts/AppContainer";
import { useNavigate } from "react-router-dom";
import { ROUTER_PATHS } from "../../routes/routesPaths";
import { Button } from "../../common/ui/Button/Button";
import ideaWomen from "../../assets/images/Idea-women.png";

export function Brand() {
  const navigate = useNavigate();

  return (
    <AppContainer>
      <section className={brandStyles.brand}>
        <div className={brandStyles.brand__header}>
          <div className={brandStyles.brand__header_title}>
            <h1 className={brandStyles.brand__name_brand}>О бренде</h1>
            <div className={brandStyles.brand__nav}>
              <p>Главная</p>
              <span className={brandStyles.brand__nouneym}>-</span>
              <p className={brandStyles.idea__p_gray}>О бренде</p>
            </div>
          </div>
        </div>

        <div className={brandStyles.idea}>
          <img src={ideaWomen} alt="idea-woman" />
          <div className={brandStyles.idea__text}>
            <h2 className={brandStyles.idea_h2}>Идея и женщина</h2>

            <p className={brandStyles.idea__first_shop}>
              Womazing была основана в 2010-ом и стала одной из самых успешных
              компаний нашей страны. Как и многие итальянские фирмы, Womazing
              остаётся семейной компанией, хотя ни один из членов семьи не
              является модельером.
            </p>

            <p>
              Мы действуем по успешной формуле, прибегая к услугам известных
              модельеров для создания своих коллекций. Этот метод был описан
              критиком моды Колином Макдауэллом как форма дизайнерского
              со-творчества, характерная для ряда итальянских prêt-a-porter
              компаний.
            </p>
          </div>
        </div>

        <div className={brandStyles.magic}>
          <div className={brandStyles.text}>
            <h2>Магия в деталях</h2>

            <p className={brandStyles.first_shop}>
              Первый магазин Womazing был открыт в маленьком городке на севере
              страны в 2010-ом году. Первая коллекция состояла из двух пальто и
              костюма, которые были копиями парижских моделей.
            </p>

            <p>
              Несмотря на то, что по образованию основательница была адвокатом,
              ее семья всегда была тесно связана с шитьём (прабабушка
              основательницы шила одежду для женщин, а мать основала
              профессиональную школу кроя и шитья). Стремление производить
              одежду для масс несло в себе большие перспективы, особенно в то
              время, когда высокая мода по-прежнему доминировала, а рынка
              качественного prêt-a-porter попросту не существовало.
            </p>
          </div>
          <img src={magicWoman} alt="magic-woman" />
        </div>

        <Button
          className={brandStyles.shop_btn}
          onClick={() => navigate(ROUTER_PATHS.shop)}
        >
          Перейти в магазин
        </Button>
      </section>
    </AppContainer>
  );
}
