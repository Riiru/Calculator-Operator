import React, {useState, useContext, ChangeEvent} from 'react';
import classes from './Internet.module.css'
import { ContextCalculate } from '../../../context/ContextCalculate';

const Internet = () => {

    const {
    internetCalc, setInternetCalc,
    } = useContext(ContextCalculate);

    const [changeState, setChangeState] = useState<number>(0)

    const [currentValue, setCurrentValue] = useState<number>(2)

    const [internetCurrentVal, setInternetCurrentVal] = useState<number>(300);

    const handleChange = (event : ChangeEvent<HTMLInputElement>) => {
        
        const value:number = parseInt(event.target.value);
        setCurrentValue(value);
        setChangeState(1);
        switch(event.target.value) {

        case '1' :
        setInternetCalc(internetCalc - internetCurrentVal + 100);
        setInternetCurrentVal(100);
        break;

        case '2' :
        setInternetCalc(internetCalc - internetCurrentVal + 300);
        setInternetCurrentVal(300);
        break;
        
        case '3' :
        setInternetCalc(internetCalc - internetCurrentVal + 550);
        setInternetCurrentVal(550);
        break;

        case '4' :
        setInternetCalc(internetCalc - internetCurrentVal + 600);
        setInternetCurrentVal(600);
        break;
        default:;
        }
    }

    const minutes1style = {
        h2 : {transition : 'all 0.3s',
        marginLeft : currentValue === 1 ? ('25px') : ('35px') },
        h3 : {display : currentValue === 1 ? ('block') : ('none')}
    }

    const minutes2style = {
        h2 : {transition : 'all 0.3s',
        marginLeft : currentValue === 2 ? ('20px') : ('35px') },
        h3 : {display : currentValue === 2 ? ('block') : ('none')}
    }
    
    const minutes3style = {
        h2 : {transition : 'all 0.3s',
        marginLeft : currentValue === 3 ? ('18px') : ('35px')},
        h3 : {display : currentValue === 3 ? ('block') : ('none')}
    }

    const minutes4style = {
        h2 : {transition : 'all 0.3s',
        marginLeft : currentValue === 4 ? ('18px') : ('35px') },
        h3 : {display : currentValue === 4 ? ('block') : ('none')}
    }

    return (
        <div>
            <div className={classes.minutes__title}>Интернет</div>
            <div className={classes.container}>
            <input className={classes.slider}
            data-testid='internet__test'
            onChange={handleChange}
            type="range" 
            min="1" max="4" 
            value={currentValue}
            />
            <div className={`
                ${classes.track1}
                ${currentValue === 1 ? classes.track1 : ''} 
                ${currentValue === 2 ? classes.track2 : ''} 
                ${currentValue === 3 ? classes.track3 : ''} 
                ${currentValue === 4 ? classes.track4 : ''}
                ${changeState !== 1 ? classes.trackDefault : ''}
                `}/>
            </div>
            <ul className={classes.minutes__description}>
                <li ><h2 style={minutes1style.h2}>5</h2><h3 data-testid='text1' style={minutes1style.h3}>&nbsp;ГБ</h3></li>
                <li ><h2 style={changeState !== 1 ? {marginLeft : '20px'} : minutes2style.h2}>15</h2><h3 data-testid='text2' style={changeState !== 1 ? {display : 'block'} : minutes2style.h3}>&nbsp;ГБ</h3></li>
                <li ><h2 style={minutes3style.h2}>30</h2><h3 data-testid='text3' style={minutes3style.h3}>&nbsp;ГБ</h3></li>
                <li ><h2 style={minutes4style.h2}>35</h2><h3 data-testid='text4' style={minutes4style.h3}>&nbsp;ГБ</h3></li>
            </ul>
        </div>
    );
};

export default Internet;
