type  Tutorial = {
    title: string;
    description: string;
    bgcolor: string;
    img: string;
  }

  type CardProps = {
    nextStep: () => void;
  }

  export type {Tutorial, CardProps};
 
