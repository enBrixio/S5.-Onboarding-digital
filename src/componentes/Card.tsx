import cardStyle from "./card.module.css";
import BnStep from "./BnStep";
import Indicador from "./Indicador";
import arrowR from "../assets/arrow-right-solid.svg";
import arrowL from "../assets/arrow-left-solid.svg";
import type { Tutorial } from "../type";

function Card({
  nextStep,
  prevStep,
  cards,
  step,

 }: {
  nextStep: () => void;
  prevStep: () => void;
  cards: Tutorial[];
  step: number;
 
}) {
 
  
  return (
    <section className={cardStyle.cont}>
      <header
        className={cardStyle.header}
        style={{ background: `${cards[step].bgcolor}` }}
      >
        <img src={cards[step].img} alt="test" />
      </header>
      <section>
        <h2 className={cardStyle.title}>{cards[step].title}</h2>
        <p className={cardStyle.subtitle}>{cards[step].description}</p>
      </section>
      <footer className={cardStyle.footer}>
      <Indicador />
        <div className={cardStyle.div_buttons}>
        {step !== 0 && (
            <BnStep color="grey" click={prevStep}>
              <img src={arrowL} alt="Arrow" />
            </BnStep>
          )}

          {step !== 2 && (
            <BnStep color="black" click={nextStep}>
              <img src={arrowR} alt="Arrow" />
            </BnStep>
          )}
        </div>
      
      </footer>
    </section>
  );
}
export default Card;
