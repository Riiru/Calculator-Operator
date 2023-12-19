import React, { createContext, useState, ReactNode, Dispatch, SetStateAction } from 'react';

interface CalculateContextType {

  
  // номер телефона
  phoneValue: string,
  setPhoneValue: Dispatch<SetStateAction<string>>,
  
  // выбранный оператор
  choosenOperator: string,
  setChoosenOperator: Dispatch<SetStateAction<string>>,

    // сумма выбранного оператора
  operatorCalc: number,
  setOperatorCalc: Dispatch<SetStateAction<number>>,

    // состояние ошибки инпута оператора
  errorState: number,
  setErrorState: Dispatch<SetStateAction<number>>,

    // сумма чекбоксов
  redeemCalc: number,
  setRedeemCalc: Dispatch<SetStateAction<number>>,

    // checked чекбоксы
  isRedeemChecked: boolean,
  setIsRedeemChecked: Dispatch<SetStateAction<boolean>>,
  isRentChecked: boolean,
  setIsRentChecked: Dispatch<SetStateAction<boolean>>,

    // выбранный пункт минут
  minutesSelection: number,
  setMinutesSelection: Dispatch<SetStateAction<number>>,

    // сумма range слайдера минут
  minutesCalc: number,
  setMinutesCalc: Dispatch<SetStateAction<number>>,

    // выбранный пункт интернета
  internetSelection: number,
  setInternetSelection: Dispatch<SetStateAction<number>>,

    // сумма range слайдера гигабайтов
  internetCalc: number,
  setInternetCalc: Dispatch<SetStateAction<number>>,

    // сумма выбранных соц. сетей
  socialsCalc: number,
  setSocialsCalc: Dispatch<SetStateAction<number>>,

    // выбранные соц. сети
  isFbActive: boolean,
  setIsFbActive: Dispatch<SetStateAction<boolean>>,
  isVkActive: boolean,
  setIsVkActive: Dispatch<SetStateAction<boolean>>,
  isOkActive: boolean,
  setIsOkActive: Dispatch<SetStateAction<boolean>>,
  isInstActive: boolean,
  setIsInstActive: Dispatch<SetStateAction<boolean>>,
  isTtActive: boolean,
  setIsTtActive: Dispatch<SetStateAction<boolean>>,
}

const ContextCalculate = createContext<any>(0);

const CalculateProvider = ({ children }: { children : ReactNode }) => {
    const [phoneValue, setPhoneValue] = useState<string>('');
    const [errorState, setErrorState] = useState<number>(0);
    const [choosenOperator, setChoosenOperator] = useState<string>('firstOperator');
    const [operatorCalc, setOperatorCalc] = useState<number>(100);
    const [redeemCalc, setRedeemCalc] = useState<number>(99);
    const [minutesCalc, setMinutesCalc] = useState<number>(250);
    const [minutesSelection, setMinutesSelection] = useState<number>(3);
    const [internetCalc, setInternetCalc] = useState<number>(300);
    const [internetSelection, setInternetSelection] = useState<number>(2);
    const [socialsCalc, setSocialsCalc] = useState<number>(0);
    const [isRedeemChecked, setIsRedeemChecked] = useState<boolean>(false);
    const [isRentChecked, setIsRentChecked] = useState<boolean>(true);
    const [isFbActive, setIsFbActive] = useState<boolean>(false);
    const [isVkActive, setIsVkActive] = useState<boolean>(false);
    const [isOkActive, setIsOkActive] = useState<boolean>(false);
    const [isInstActive, setIsInstActive] = useState<boolean>(false);
    const [isTtActive, setIsTtActive] = useState<boolean>(false);

    const contextValue: CalculateContextType = {
        phoneValue,
        setPhoneValue,
        errorState,
        setErrorState,
        choosenOperator,
        setChoosenOperator,
        operatorCalc,
        setOperatorCalc,
        minutesSelection,
        setMinutesSelection,
        internetSelection,
        setInternetSelection,
        minutesCalc,
        setMinutesCalc,
        internetCalc, 
        setInternetCalc,
        isRedeemChecked,
        setIsRedeemChecked,
        isRentChecked,
        setIsRentChecked,
        redeemCalc,
        setRedeemCalc,
        socialsCalc,
        setSocialsCalc,
        isFbActive,
        setIsFbActive,
        isVkActive,
        setIsVkActive,
        isOkActive,
        setIsOkActive,
        isInstActive,
        setIsInstActive,
        isTtActive,
        setIsTtActive,
    };

    return (
        <ContextCalculate.Provider value={contextValue}>
            {children}
        </ContextCalculate.Provider>
    );
};

export { ContextCalculate, CalculateProvider };