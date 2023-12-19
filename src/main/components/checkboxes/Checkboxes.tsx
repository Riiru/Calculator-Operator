import React, { useContext } from 'react';
import classes from './Checboxes.module.css'
import { ContextCalculate } from '../../context/ContextCalculate';

const Checkboxes = () => {

    // стейты ↓↓
    const {
    setRedeemCalc,
    isRedeemChecked, setIsRedeemChecked,
    isRentChecked, setIsRentChecked,
    } = useContext(ContextCalculate);

    // действия ↓↓
    const handleRentChange: () => void = () => {
        setIsRentChecked(!isRentChecked);
        setIsRedeemChecked(false);
        if (isRentChecked) {setRedeemCalc(0)} else {setRedeemCalc(99)}
    };

    const handleRedeemChange = () => {
        setIsRedeemChecked(!isRedeemChecked);
        setIsRentChecked(false);
        setRedeemCalc(0)
    }

    return (
        <div>
            <div className={classes.checkBox1}>
                <h2 className={classes.wifi__title}>Wi-Fi роутер</h2>
                <label className={classes.custom__checkbox}>
                <input type="checkbox"
                data-testid='rentTest' 
                checked={isRentChecked}
                onChange={handleRentChange}/>
                <span className={classes.custom__checkbox__checkmark}></span>
                <span className={classes.custom__checkbox__label}>Аренда&nbsp;<h2 style={{fontWeight : '700'}}>99&nbsp;</h2>₽/мес.</span>
                </label>
            </div>

            <div className={classes.checkBox2}>
                <label className={classes.custom__checkbox}>
                <input type="checkbox"
                data-testid='redeemTest' 
                checked={isRedeemChecked}
                onChange={handleRedeemChange}/>
                <span className={classes.custom__checkbox__checkmark}/>
                <span className={classes.custom__checkbox__label}>Выкупить&nbsp;<h2 style={{fontWeight : '700'}}>2 600&nbsp;</h2>₽</span>
                </label>
            </div>
        </div>
    );
};

export default Checkboxes;