import React, {useState, useContext, ChangeEvent} from 'react';
import classes from './Minutes.module.css'
import { ContextCalculate } from '../../../context/ContextCalculate';

const Minutes = () => {

    const {
    minutesCalc, setMinutesCalc,
    } = useContext(ContextCalculate);

    const [changeState, setChangeState] = useState<number>(0)

    const [currentValue, setCurrentValue] = useState<number>(3)

    const [minutesCurrentVal, setMinutesCurrentVal] = useState<number>(250);

    const handleChange = (event : ChangeEvent<HTMLInputElement>) => {

        const value:number = parseInt(event.target.value);
        setCurrentValue(value);
        setChangeState(1);
        switch(event.target.value) {

        case '1' :
        setMinutesCalc(minutesCalc - minutesCurrentVal + 100);
        setMinutesCurrentVal(100);
        break;
            
        case '2' :
        setMinutesCalc(minutesCalc - minutesCurrentVal + 176);
        setMinutesCurrentVal(176);
        break;

        case '3' :
        setMinutesCalc(minutesCalc - minutesCurrentVal + 250);
        setMinutesCurrentVal(250);
        break;

        case '4' :
        setMinutesCalc(minutesCalc - minutesCurrentVal + 300);
        setMinutesCurrentVal(300);
        break;
        default :;
        }
    }

    const minutes1style = {
        h2 : {transition : 'all 0.3s',
        marginLeft : currentValue === 1 ? ('10px') : ('30px') },
        h3 : {display : currentValue === 1 ? ('block') : ('none')}
    }

    const minutes2style = {
        h2 : {transition : 'all 0.3s',
        marginLeft : currentValue === 2 ? ('10px') : ('30px') },
        h3 : {display : currentValue === 2 ? ('block') : ('none')}
    }
    
    const minutes3style = {
        h2 : {transition : 'all 0.3s',
        marginLeft : currentValue === 3 ? ('10px') : ('30px')},
        h3 : {display : currentValue === 3 ? ('block') : ('none')},
    }

    const minutes4style = {
        h2 : {transition : 'all 0.3s',
        marginLeft : currentValue === 4 ? ('10px') : ('30px') },
        h3 : {display : currentValue === 4 ? ('block') : ('none')},
    }

    return (
        <div>
            <div className={classes.minutes__title}>Минуты</div>
            <div className={classes.container}>
            <input className={classes.slider}
            data-testid='minutes__test'
            onChange={handleChange}
            type="range"
            min="1" max="4"
            value={currentValue}
            aria-label="Volume slider"
            />
            <div data-testid='tracktest' className={`
                ${classes.track1}
                ${currentValue === 1 ? classes.track1 : ''} 
                ${currentValue === 2 ? classes.track2 : ''} 
                ${currentValue === 3 ? classes.track3 : ''} 
                ${currentValue === 4 ? classes.track4 : ''}
                `}/>
            </div>
            <ul className={classes.minutes__description}>
                <li ><h2 style={minutes1style.h2}>200</h2><h3 data-testid='text1' style={minutes1style.h3}>&nbsp;мин.</h3></li>
                <li ><h2 style={minutes2style.h2}>350</h2><h3 data-testid='text2' style={minutes2style.h3}>&nbsp;мин.</h3></li>
                <li ><h2 style={changeState !== 1 ? {marginLeft : '10px'} : minutes3style.h2}>600</h2><h3 data-testid='text3' style={changeState !== 1 ? {display : 'block'} : minutes3style.h3}>&nbsp;мин.</h3></li>
                <li ><h2 style={minutes4style.h2}>650</h2><h3 data-testid='text4' style={minutes4style.h3}>&nbsp;мин.</h3></li>
            </ul>
        </div>
    );
};

export default Minutes;
