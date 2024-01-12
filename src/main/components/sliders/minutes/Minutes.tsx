import React, {useState, useContext, ChangeEvent} from 'react';
import classes from './Minutes.module.css'
import { ContextCalculate } from '../../../context/ContextCalculate';

const Minutes = () => {

    // стейты ↓↓↓
    const {
    minutesCalc, setMinutesCalc, minutesSelection, setMinutesSelection,
    } = useContext(ContextCalculate);

    const [changeState, setChangeState] = useState<number>(0)
    const [minutesCurrentVal, setMinutesCurrentVal] = useState<number>(250);

    const handleChange = (event : ChangeEvent<HTMLInputElement>) => {

        const value:number = parseInt(event.target.value);
        setMinutesSelection(value);
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

    // стили ↓↓
    const minutes1style = {
        h2 : {transition : 'all 0.3s',
        marginLeft : minutesSelection === 1 ? ('10px') : ('30px') },
        h3 : {display : minutesSelection === 1 ? ('block') : ('none')}
    }

    const minutes2style = {
        h2 : {transition : 'all 0.3s',
        marginLeft : minutesSelection === 2 ? ('10px') : ('30px') },
        h3 : {display : minutesSelection === 2 ? ('block') : ('none')}
    }
    
    const minutes3style = {
        h2 : {transition : 'all 0.3s',
        marginLeft : minutesSelection === 3 ? ('10px') : ('30px')},
        h3 : {display : minutesSelection === 3 ? ('block') : ('none')},
    }

    const minutes4style = {
        h2 : {transition : 'all 0.3s',
        marginLeft : minutesSelection === 4 ? ('10px') : ('30px') },
        h3 : {display : minutesSelection === 4 ? ('block') : ('none')},
    }

    return (
        <div className={classes.minutes__wrapper}>
            <div className={classes.minutes__title}>
                Минуты
            </div>
            <div className={classes.container}>
                <input className={classes.slider}
                    data-testid='minutesTest'
                    onChange={handleChange}
                    type="range"
                    min="1" max="4"
                    value={minutesSelection}
                />
                <div className={`
                    ${classes.track1}
                    ${minutesSelection === 1 ? classes.track1 : ''} 
                    ${minutesSelection === 2 ? classes.track2 : ''} 
                    ${minutesSelection === 3 ? classes.track3 : ''} 
                    ${minutesSelection === 4 ? classes.track4 : ''}`}
                />
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
