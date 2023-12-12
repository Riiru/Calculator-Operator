import React, { useState, ChangeEvent } from 'react';
import classes from './Phone.module.css';
import errorImg from '../phone/error.svg'
import InputMask from 'react-input-mask';

const Phone: React.FC = () => {
    const [phoneValue, setPhoneValue] = useState<string>('');
    const [errorState, setErrorState] = useState<number>(0);

    // errorState 0 = inactive
    // errorState 1 = active, violet border
    // errorState 2 = error, red border

    // let unmaskedValue = phoneValue.replace(/\D/g,'');      <----------- если будет нужно значение без "маски" react-input-mask

    const handlePhoneChange = (e :
    ChangeEvent<HTMLInputElement>): void => {
    setPhoneValue(e.target.value); 
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {

        if 
            (!/^[0-9]$/.test(e.key) &&
            e.key !== 'Enter' &&
            e.key !== 'Delete' &&
            e.key !== 'Backspace' &&
            e.key !== 'Tab' &&
            e.key !== 'Escape' &&
            e.key !== 'Shift'
            )  {
            setErrorState(2); }
            else { setErrorState(1) };
    };

    //клик на инпут
    const handleFocus = () => {
        if (errorState !== 2) {setErrorState(1);}
    };
    
    const handleBlur = () => {
        if (errorState !== 2) {setErrorState(0);}
    };

        const inputClasses = `${classes.phone__inner} ${errorState === 1 ? classes.active : ''} ${errorState === 2 ? classes.red : ''}`;
        const requiredTextClasses = `${classes.required} ${errorState === 2 ? classes.error : ''}`;

    return (
        <div onKeyDown={handleKeyDown}>
            <h2 className={classes.phone__title}>Телефон</h2>
        
            <div className={classes.phone__input}>
                <InputMask
                    data-testid={'inputTest'}
                    className={inputClasses}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    mask="   +7 (999) 999-99-99"
                    type="tel"
                    value={phoneValue}
                    onChange={handlePhoneChange}
                    placeholder='&nbsp;&nbsp;&nbsp;+7 (___) ___-__-__'
                />
                {<img className={classes.phone__error} src={errorImg} alt="errorImg" 
                style={{width:'24px', height:'24px',position: 'absolute',right: '16px',top: '16px', display: errorState === 2 ? 'block' : 'none'}}/>}
            </div>
            <div style={{display:'flex'}}>
                <h2 className={requiredTextClasses}>Обязательное поле</h2>
                <h2 style={{fontSize:'12px', color:'red', margin: '3px 0 0 135px', fontWeight:'400', 
                display: errorState === 2 ? 'block' : 'none'}}>введите ваш номер</h2>
            </div>
        </div>
    );
};

export default Phone;