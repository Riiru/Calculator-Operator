import classes from './mainStyles/Base.module.css'
import Calculator from './components/calculator/Calculator';
import Phone from './components/phone/Phone';
import Operator from './components/operator/Operator';
import Minutes from './components/sliders/minutes/Minutes';
import Internet from './components/sliders/internet/Internet';
import Checkboxes from './components/checkboxes/Checkboxes';
import Socials from './components/socials/Socials';

const Base: React.FC = () => {
    return (
        <div className={classes.base__bg}>
            <div className={classes.wrapper}>
                <div className={classes.container}>
                    <h1>
                        Настройте тариф
                    </h1>
                    <Phone />
                    <Operator />
                    <Minutes />
                    <Internet />
                    <Checkboxes />
                    <Socials />
                    <Calculator />
                </div>
            </div>
        </div>
    );
};

export default Base;