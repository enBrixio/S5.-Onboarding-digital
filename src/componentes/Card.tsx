import cardStyle from  './card.module.css' ;
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
                    <footer>
                        <button onClick={nextStep}>Siguiente</button>
                        {/* <button onClick={() => setStep(1)}>Següent</button> */}
                    </footer>
  
            </section>
        
    )
}
 export   default   Card ;