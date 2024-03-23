import { CSSTransition } from 'react-transition-group';
import cardStyle from "./card.module.css";
import BnStep from "./BnStep";
import Indicador from "./Indicator";
import arrowR from "../assets/arrow-right-solid.svg";
import arrowL from "../assets/arrow-left-solid.svg";
import type { Tutorial } from "../type";
import ImageAnimation from './Animatio.tsx'; // Asegúrate de que el nombre del archivo importado sea correcto

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
      <header className={cardStyle.header} style={{ background: `${cards[step].bgcolor}` }}>
        <ImageAnimation step={step} src={cards[step].img}  />
      </header>
      <section>
        <h2 className={cardStyle.title}>{cards[step].title}</h2>
        <p className={cardStyle.subtitle}>{cards[step].description}</p>
      </section>
      <footer className={cardStyle.footer}>
        <Indicador steps={cards.length} currentStep={step} />
        <div className={cardStyle.div_buttons}>
          {step !== 0 && (
            <BnStep color="grey" click={prevStep}>
              <img src={arrowL} alt="Arrow" />
            </BnStep>
          )}
          {step !== cards.length - 1 && (
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



