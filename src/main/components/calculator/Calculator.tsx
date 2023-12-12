import React from 'react';
import { ContextCalculate } from '../../context/ContextCalculate'
import { useContext } from 'react';
import classes from './Calculator.module.css'; 

const Calculator: React.FC = () => {

    const {
    operatorCalc,
    minutesCalc,
    internetCalc,
    socialsCalc,
    isRedeemChecked,
    redeemCalc,
    } = useContext(ContextCalculate);

    // const FinalCalc: number = minutesCalc;
    const FinalCalc: number = operatorCalc + minutesCalc + internetCalc + socialsCalc + redeemCalc;


  return (
    <div className={classes.wrapper}>
      <button className={classes.button}>
      <div className={classes.button__calc__wrap}>
      <h2>{FinalCalc}</h2>
      <h3>₽ в месяц</h3>
      </div>
      </button>
      <h4 className={isRedeemChecked === true ? classes.router__calc : classes.hidden}>и 2600 ₽ роутер</h4> 
    </div>
  );
};

export default Calculator;