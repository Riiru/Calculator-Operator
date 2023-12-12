import React, { fireEvent, render, screen } from '@testing-library/react';
import { ContextCalculate } from '../../context/ContextCalculate';
import Socials from './Socials';

describe('тест соц. сетей', () => {

    test('тест клика', () => {
        const setSocialsCalc = jest.fn();
        const socialsCalc = jest.fn();
        const isFbActive = false;
        const setIsFbActive = jest.fn();

        render(
            <ContextCalculate.Provider
                value={{
                    socialsCalc, setSocialsCalc, isFbActive, setIsFbActive
                }}>
                <Socials />
            </ContextCalculate.Provider>);


        const fb = screen.getByTestId('fbTest');
        expect(fb).toBeInTheDocument();

        const fbicon = screen.getByTestId('fbicon');
        expect(fbicon).toBeInTheDocument();



        expect(fbicon).toHaveAttribute('src', 'fb.svg');
        expect(isFbActive).toBe(false);

        fireEvent.click(fb);

        expect(setIsFbActive).toHaveBeenCalledWith(true);
        expect(fbicon).toHaveAttribute('src', 'fb.svg')
    })
})