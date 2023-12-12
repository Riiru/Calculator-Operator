import React, { useContext } from 'react';
import { ContextCalculate } from '../../context/ContextCalculate'
import classes from './Socials.module.css'

// uncolored icons
import fb from './socials icons/fb.svg'
import vk from './socials icons/vk.svg'
import ok from './socials icons/ok.svg'
import inst from './socials icons/inst.svg'
import tt from './socials icons/tt.svg'

//colored icons
import fbcolored from './socials colored icons/fbcolored.svg'
import vkcolored from './socials colored icons/vkcolored.svg'
import okcolored from './socials colored icons/okcolored.svg'
import instcolored from './socials colored icons/instcolored.svg'
import ttcolored from './socials colored icons/ttcolored.svg'

const Socials = () => {

    const {
    socialsCalc, setSocialsCalc,
    isFbActive, setIsFbActive,
    isVkActive, setIsVkActive,
    isOkActive, setIsOkActive,
    isInstActive, setIsInstActive,
    isTtActive, setIsTtActive
    } = useContext(ContextCalculate);

    const FbClick = () => {
        console.log('fbchange');
        if (isFbActive === false) {
            setSocialsCalc(socialsCalc + 20)
        } else {setSocialsCalc(socialsCalc - 20)};
        setIsFbActive(!isFbActive);
    }

    const VkClick = () => {
        console.log('vkchange');
        if (isVkActive === false) {
            setSocialsCalc(socialsCalc + 20)
        } else {setSocialsCalc(socialsCalc - 20)};
        setIsVkActive(!isVkActive);
    }

    const OkClick = () => {
        console.log('okchange');
        if (isOkActive === false) {
            setSocialsCalc(socialsCalc + 20)
        } else {setSocialsCalc(socialsCalc - 20)}
        setIsOkActive(!isOkActive);
    }

    const InstClick = () => {
        console.log('instchange');
        if (isInstActive === false) {
            setSocialsCalc(socialsCalc + 60)
        } else {setSocialsCalc(socialsCalc - 60)}
        setIsInstActive(!isInstActive);
    }

    const TtClick = () => {
        console.log('ttchange');
        if (isTtActive === false) {
            setSocialsCalc(socialsCalc + 60)
        } else {setSocialsCalc(socialsCalc - 60)}
        setIsTtActive(!isTtActive);
    }

    return (
        <div>
            <h2 className={classes.socials__title}>Соцсети</h2>
            <ul className={classes.socials__btns}>
                <button data-testid='fbTest' onClick={FbClick}><li className={isFbActive === false ? classes.social__inactive : classes.social__active}><img data-testid='fbicon' src={isFbActive === false ? fb : fbcolored} alt="facebook" /><h3>20 ₽</h3></li></button>
                <button data-testid='vkTest'onClick={VkClick}><li className={isVkActive === false ? classes.social__inactive : classes.social__active}><img src={isVkActive === false ? vk : vkcolored} alt="vk" /><h3>20 ₽</h3></li></button>
                <button data-testid='okTest'onClick={OkClick}><li className={isOkActive === false ? classes.social__inactive : classes.social__active}><img src={isOkActive === false ? ok : okcolored} alt="ok" /><h3>20 ₽</h3></li></button>
                <button data-testid='instTest'onClick={InstClick}><li className={isInstActive === false ? classes.social__inactive : classes.social__active}><img src={isInstActive === false ? inst : instcolored} alt="inst" /><h3>60 ₽</h3></li></button>
                <button data-testid='ttTest'onClick={TtClick}><li className={isTtActive === false ? classes.social__inactive : classes.social__active}><img src={isTtActive === false ? tt : ttcolored} alt="tt" /><h3>60 ₽</h3></li></button>   
            </ul>
        </div>
    );
};

export default Socials;