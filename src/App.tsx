import { useState } from "react";
import Card from "./componentes/Card";
import { tutorialData } from "./data";

function App() {
  const [step, setStep] = useState(0);
  const nextStep = () => {
    setStep( prev => prev + 1);
  }

  return (    
    <section className="container">
      <Card cards={tutorialData} nextStep={nextStep} step={step}/>
    </section>
  );
}

export default App;