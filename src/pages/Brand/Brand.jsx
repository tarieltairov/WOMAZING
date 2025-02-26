import { Button } from "../../components/Button";
import magicWoman from "../../assets/images/Frame 34.png"
import brandStyles from "./Brand.module.scss"
import { AppContainer } from "../../layouts/AppContainer";
import { useNavigate } from "react-router-dom";
import { ROUTER_PATHS } from "../../routes/routesPaths";

export function Brand () {

    const navigate = useNavigate()

    return (
        <AppContainer>
            <section className={brandStyles.brand}>

                <div className={brandStyles.idea}>
                    
                </div>

                <div className={brandStyles.magic}>
                    <div className={brandStyles.text}>
                        <h2>Магия в деталях</h2>

                        <p className={brandStyles.first_shop}> 
                            Первый магазин Womazing был открыт в маленьком городке 
                            на севере страны в 2010-ом году. Первая коллекция состояла 
                            из двух пальто и костюма, которые были копиями парижских 
                            моделей. 
                        </p>
                        
                        <p>
                            Несмотря на то, что по образованию основательница была адвокатом, ее семья всегда была тесно связана с шитьём (прабабушка основательницы шила одежду для женщин, а мать основала профессиональную школу кроя и шитья). Стремление производить одежду для масс несло в себе большие перспективы, особенно в то время, когда высокая мода по-прежнему доминировала, а рынка качественного prêt-a-porter попросту не существовало. 
                        </p>
                    </div>
                    <img src={magicWoman} alt="magic-woman" />
                </div>

                <Button className={brandStyles.shop_btn} onClick={() => navigate(ROUTER_PATHS.shop)}>
                    Перейти в магазин
                </Button>

            </section>
        </AppContainer>
    )
}