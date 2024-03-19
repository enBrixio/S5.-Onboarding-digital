import cardStyle from  './card.module.css' ;
import {useState} from 'react';

function   Card () {

    interface Tutorial {
        title: string;
        description: string;
        bgcolor: string;
        img: string;
      }
      
      const tutorialData: Tutorial[] = [
        {   
          title: 'Dedica moltes hores',
          description: 'Un minim de 30 hores a la setmana. Si no en tens prou, hauràs de decar-li més hores. Al principi sembla imposiblle, però notaràs una millora rápidament',
          bgcolor: '#2EA9A9 ',
          img: './public/meditation.svg'
        }
      ];
      
    const [step,setStep] = useState(0);
    const data = tutorialData[step];

    return (
        
            <section className={cardStyle.cont}>
                <header className={cardStyle.header} style={{background: `${data.bgcolor}`}}>
                    <img src={data.img} alt="test" />
                </header>
                <section>
                    <h2 className={cardStyle.title}>{data.title}</h2>
                    <p className={cardStyle.subtitle}>{data.description}</p>
                </section>
                    <footer>
                        {/* <button onClick={() => setStep(0)}>Anterior</button>
                        <button onClick={() => setStep(1)}>Següent</button> */}
                    </footer>
  
            </section>
        
    )
}
 export   default   Card ;