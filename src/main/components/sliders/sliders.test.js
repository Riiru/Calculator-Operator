import React, { render, screen, fireEvent } from '@testing-library/react';
import Minutes from './minutes/Minutes';
import Internet from './internet/Internet';
import { ContextCalculate } from '../../context/ContextCalculate';

describe('тест слайдеров', () => {

    test('тест слайдера минут', () => {

        const setMinutesCalc = jest.fn();

        render(
            <ContextCalculate.Provider value={{ minutesCalc: 0, setMinutesCalc }}>
                <Minutes />
            </ContextCalculate.Provider>
        );

        const text1 = screen.getByTestId('text1');
        const text2 = screen.getByTestId('text2');
        const text3 = screen.getByTestId('text3');
        const text4 = screen.getByTestId('text4');

        const minutes = screen.getByTestId('minutes__test');
        expect(minutes).toBeInTheDocument();
        let selectedOption = minutes.value;
        expect(selectedOption).toBe('3');

        expect(text1).toHaveStyle('display: none');
        expect(text2).toHaveStyle('display: none');
        expect(text3).toHaveStyle('display: block');
        expect(text4).toHaveStyle('display: none');

        fireEvent.change(minutes, { target: { value: '2' } });
        selectedOption = minutes.value;
        expect(selectedOption).toBe('2');
        expect(text1).toHaveStyle('display: none');
        expect(text2).toHaveStyle('display: block');
        expect(text3).toHaveStyle('display: none');
        expect(text4).toHaveStyle('display: none');

    });


    test('тест слайдера интернета', () => {

        const setInternetCalc = jest.fn();

        render(
            <ContextCalculate.Provider value={{ internetCalc: 0, setInternetCalc }}>
                <Internet />
            </ContextCalculate.Provider>
        );

        const text1 = screen.getByTestId('text1');
        const text2 = screen.getByTestId('text2');
        const text3 = screen.getByTestId('text3');
        const text4 = screen.getByTestId('text4');

        const internet = screen.getByTestId('internet__test');
        expect(internet).toBeInTheDocument();
        let selectedOption = internet.value;
        expect(selectedOption).toBe('2');

        expect(text1).toHaveStyle('display: none');
        expect(text2).toHaveStyle('display: block');
        expect(text3).toHaveStyle('display: none');
        expect(text4).toHaveStyle('display: none');

        fireEvent.change(internet, { target: { value: '4' } });
        selectedOption = internet.value;
        expect(selectedOption).toBe('4');
        expect(text1).toHaveStyle('display: none');
        expect(text2).toHaveStyle('display: none');
        expect(text3).toHaveStyle('display: none');
        expect(text4).toHaveStyle('display: block');
    })
})