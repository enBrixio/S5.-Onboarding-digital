import { useState } from "react";
import Card from "./componentes/Card";
import { tutorialData } from "./data";

function App() {
  const [step, setStep] = useState(0);
  const nextStep = () => {
    setStep((prev) => (prev + 1) % 3);
  };
  const prevStep = () => {
    setStep((prev) => (prev - 1 + 3) % 3);
  }
  
  console.log("es Step",step);

  return (
    <section className="container">
      <Card cards={tutorialData} prevStep={prevStep} nextStep={nextStep} step={step}  />
    </section>
  );
}

export default App;
