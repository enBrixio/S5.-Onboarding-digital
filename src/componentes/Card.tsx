import cardStyle from  './card.module.css' ;
import BnStep from './BnStep';
import Indicador from './Indicador';
// import { CardProps } from '../type';
import type {Tutorial} from "../type"

function   Card ({nextStep, cards, step}: {nextStep: () => void, cards: Tutorial[], step: number}) {
    console.log(cards);
    console.log(nextStep);
    return (
        
            <section className={cardStyle.cont}>
                <header className={cardStyle.header} style={{background: `${cards[step].bgcolor}`}}>
                    <img src={cards[step].img} alt="test" />
                </header>
                <section>
                    <h2 className={cardStyle.title}>{cards[step].title}</h2>
                    <p className={cardStyle.subtitle}>{cards[step].description}</p>
                </section>
                    <footer className={cardStyle.footer}>
                        <Indicador />
                        <BnStep />
                    </footer>
  
            </section>
        
    )
}
 export   default   Card ;