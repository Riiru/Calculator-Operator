import React, { fireEvent, render, screen, } from '@testing-library/react';
import Phone from './Phone';

describe('компонент Phone', () => {

    test('тест всех компонентов в App', () => {
        render(<Phone />);

        const phoneTitle = screen.queryByText('Телефон');
        expect(phoneTitle).toBeInTheDocument();
    });

    test('тест клика на инпут', () => {
        render(<Phone />);

        const phoneInput = screen.getByRole('textbox');
        expect(phoneInput).toBeInTheDocument();
        expect(phoneInput).not.toHaveClass('phone__inner red');
        expect(phoneInput).not.toHaveClass('phone__inner red');

        fireEvent.focus(phoneInput);
        expect(phoneInput).toHaveClass('phone__inner active');

        fireEvent.blur(phoneInput);
        expect(phoneInput).not.toHaveClass('phone__inner active');
    })

    test('тест на blur и focus инпута', () => {
        render(<Phone />)
        const phoneInput = screen.getByRole('textbox');
        fireEvent.change(phoneInput, { target: { value: '111' } });
        let unmaskedValue = screen.getByTestId('inputTest').value.replace(/\D/g, '');
        expect(unmaskedValue).toBe('7111');
        expect(phoneInput).not.toHaveClass('phone__inner red');
    })

    test('тест на typing', () => {
        render(<Phone />)
        const phoneInput = screen.getByRole('textbox');
        expect(phoneInput).not.toHaveClass('phone__inner active');
        expect(phoneInput).not.toHaveClass('phone__inner red');

        fireEvent.keyDown(phoneInput, 'w');
        fireEvent.change(phoneInput, { target: { value: 'www' } });
        let unmaskedValue = screen.getByTestId('inputTest').value.replace(/\D/g, '');
        expect(unmaskedValue).toBe('7');
        expect(phoneInput).toHaveClass('phone__inner red');

    })

});