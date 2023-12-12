import React, { createContext, useState, ReactNode, Dispatch, SetStateAction } from 'react';

interface CalculateContextType {
  operatorCalc: number,
  setOperatorCalc: Dispatch<SetStateAction<number>>,
  redeemCalc: number,
  setRedeemCalc: Dispatch<SetStateAction<number>>,
  isRedeemChecked: boolean,
  setIsRedeemChecked: Dispatch<SetStateAction<boolean>>,
  minutesCalc: number,
  setMinutesCalc: Dispatch<SetStateAction<number>>,
  internetCalc: number,
  setInternetCalc: Dispatch<SetStateAction<number>>,
  socialsCalc: number,
  setSocialsCalc: Dispatch<SetStateAction<number>>,
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
    const [operatorCalc, setOperatorCalc] = useState<number>(100);
    const [redeemCalc, setRedeemCalc] = useState<number>(99);
    const [minutesCalc, setMinutesCalc] = useState<number>(250);
    const [internetCalc, setInternetCalc] = useState<number>(300);
    const [socialsCalc, setSocialsCalc] = useState<number>(0);
    const [isRedeemChecked, setIsRedeemChecked] = useState<boolean>(false);
    const [isFbActive, setIsFbActive] = useState<boolean>(false);
    const [isVkActive, setIsVkActive] = useState<boolean>(false);
    const [isOkActive, setIsOkActive] = useState<boolean>(false);
    const [isInstActive, setIsInstActive] = useState<boolean>(false);
    const [isTtActive, setIsTtActive] = useState<boolean>(false);

    const contextValue: CalculateContextType = {
        operatorCalc,
        setOperatorCalc,
        isRedeemChecked,
        setIsRedeemChecked,
        redeemCalc,
        setRedeemCalc,
        minutesCalc,
        setMinutesCalc,
        internetCalc, 
        setInternetCalc,
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
        setIsTtActive
    };

    return (
        <ContextCalculate.Provider value={contextValue}>
            {children}
        </ContextCalculate.Provider>
    );
};

export { ContextCalculate, CalculateProvider };