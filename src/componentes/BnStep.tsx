import cardStyle from  './card.module.css' ;
import arrow from '../assets/arrow-right-solid.svg';

function BnStep () {
    return (
        <button className={cardStyle.button}><img src={arrow} alt="Arrow" /></button>
    )
}

export default BnStep;