import cardStyle from "./card.module.css";
import React from "react";


function BnStep({
  children,
  click,
  color,
}: {
  children: React.ReactNode;
  click: () => void;
  color: string; 
}) {
 
  const style = { backgroundColor: color }; 

  return (
    <button style={style} onClick={click} className={cardStyle.button}>
      {children}
    </button>
  );
}

export default BnStep;

