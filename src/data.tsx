import { Tutorial } from "./type";
import meditacion from './assets/meditation.svg';

const tutorialData: Tutorial[] = [
    {   
      title: 'Dedica moltes hores',
      description: 'Un minim de 30 hores a la setmana. Si no en tens prou, hauràs de decar-li més hores. Al principi sembla imposiblle, però notaràs una millora rápidament',
      bgcolor: '#2EA9A9 ',
      img: meditacion
    },
    {   
        title: 'Programa projectes propis',
        description: 'Més val 10 hores treballant en projectes propis, que 10 hores mirant tutorials. La motivació i la implicació en el projecte ajudarà a accelerar el teu aprenentatge.',
        bgcolor: '#D0D3D4 ',
        img: meditacion
      },
      {   
        title: 'Procura descansar',
        description: "Descansar bé i desconnectar són vitals. Daquesta manera reduiràs l'estres ' l'ansiestat. Milloraràs la teva concentració i consolidaràs el teu aprenentatge",
        bgcolor: '#F4D03F ',
        img: meditacion
      }

]

export {tutorialData};