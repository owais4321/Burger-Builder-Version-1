import React from "react";
import './BuildController.css'
const buildController = props => {
  return (
    
    <div className="BuildControl">
      <div className="Label">{props.label}</div>
      <button className="Less"
      disabled={props.disable} 
      onClick={props.removed}>Less</button>
      <button className="More" 
      onClick={props.added}>More</button>
    </div>
  );
};

export default buildController;
