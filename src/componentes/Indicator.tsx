import cardStyle from "./card.module.css";

const Indicator = ({ steps, currentStep }: {steps: number, currentStep: number}) => {
  return (
    <div>
      {Array.from({ length: steps }).map((_, index) => (
        <div
          key={index}
          className={`${cardStyle.dot} ${index === currentStep ? cardStyle.dotActive : ''}`}
        />
      ))}
    </div>
  );
};

export default Indicator;

