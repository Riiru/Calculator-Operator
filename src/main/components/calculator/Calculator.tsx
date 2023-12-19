import React from 'react';
import { ContextCalculate } from '../../context/ContextCalculate'
import { useContext } from 'react';
import classes from './Calculator.module.css'; 

const Calculator: React.FC = () => {

    const {
    phoneValue,
    operatorCalc,
    minutesCalc,
    internetCalc,
    socialsCalc,
    isRedeemChecked,
    isRentChecked,
    redeemCalc,
    choosenOperator,
    minutesSelection,
    internetSelection,
    isFbActive,
    isVkActive,
    isOkActive,
    isInstActive,
    isTtActive,
    setErrorState,
    } = useContext(ContextCalculate);

    //                                        сумма всего ↓↓

    const finalCalc: number = operatorCalc + minutesCalc + internetCalc + socialsCalc + redeemCalc;
    const initialRentCalc = isRedeemChecked === true ? 2600 : 0;
    const initialRedeemCalc = isRentChecked === true ? 99: 0;
    const totalAmount: number = operatorCalc + minutesCalc + internetCalc + socialsCalc + initialRentCalc + initialRedeemCalc;
    // проверка правописания номера, и создание json с данными о номере выбранных опциях

    const clickAndCalc = () => {
      const unmaskedValue = phoneValue.replace(/\D/g,'');
        if (unmaskedValue.length === 11) {
        const data = {
          phoneNumber: phoneValue.replace(/\D/g,''),
          choosenOperator: choosenOperator,
          minutesSelectedOption: minutesSelection,
          internetSeletedOption: internetSelection,
          rent: isRentChecked,
          redeem: isRedeemChecked,
          socials: [isFbActive, isVkActive, isOkActive, isInstActive, isTtActive],
          totalAmount: totalAmount,
        } 
        const SelectedOptionsToBackend = JSON.stringify(data);
        console.log(SelectedOptionsToBackend);
      } else {
        setErrorState(2);
        window.scrollTo({
        top: 0,
        behavior: 'smooth',
        }); }
    }

  return (
    <div className={classes.wrapper}>
      <button className={classes.button} onClick={clickAndCalc}>
        <div className={classes.button__calc__wrap}>
          <h2 data-testid='calculatedValue'>{finalCalc}</h2>
          <h3>₽ в месяц</h3>
        </div>
      </button>
        <h4 data-testid='redeemDisplayTest' className={isRedeemChecked === true ? classes.router__calc : classes.hidden}>и 2600 ₽ роутер</h4> 
    </div>
  );
};

export default Calculator;