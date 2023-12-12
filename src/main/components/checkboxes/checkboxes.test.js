import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { ContextCalculate } from '../../context/ContextCalculate';
import Checkboxes from './Checkboxes';

describe('тест чекбоксов', () => {

    test('тест контекста', () => {

        const IsRedeemChecked = jest.fn();
        const setIsRedeemChecked = jest.fn();
        const setRedeemCalc = jest.fn();

        render(
            <ContextCalculate.Provider value={{ IsRedeemChecked, setIsRedeemChecked, setRedeemCalc }}>
                <Checkboxes />
            </ContextCalculate.Provider>
        );

        const rent = screen.getByTestId('rent');

        expect(rent).toBeInTheDocument();
        expect(rent).toBeChecked();

        fireEvent.click(rent);
        expect(rent).not.toBeChecked();
    })

})