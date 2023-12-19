import React, { fireEvent, screen, render } from '@testing-library/react';
import App from './App';

afterEach(() => {
  jest.useRealTimers();
  jest.clearAllTimers();
});

describe('тест всего приложения', () => {
    
    test('тест инпута телефона', () => {
        render(<App />);
        const phoneInput = screen.getByRole('textbox');
        expect(phoneInput).toBeInTheDocument();
        expect(phoneInput).not.toHaveClass('phone__inner red');
        expect(phoneInput).not.toHaveClass('phone__inner active');

        fireEvent.focus(phoneInput);
        expect(phoneInput).toHaveClass('phone__inner active');

        fireEvent.blur(phoneInput);
        expect(phoneInput).not.toHaveClass('phone__inner active');

        fireEvent.change(phoneInput, { target: { value: 'test with string' } });
        let unmaskedValue = screen.getByTestId('inputTest').value.replace(/\D/g, '');

        expect(unmaskedValue).toBe('7');

        fireEvent.change(phoneInput, { target: { value: '111' } });
        unmaskedValue = screen.getByTestId('inputTest').value.replace(/\D/g, '');
        
        expect(unmaskedValue).toBe('7111');
    })

    const mockedOptions = [
        {label: 'Mocked option 1', value: 'mocked-option-1'},
        {label: 'Mocked option 2', value: 'mocked-option-2'},
        {label: 'Mocked option 3', value: 'mocked-option-3'},
    ];
    
    test('тест select', () => {
        const mockedOnChange = jest.fn();
        render(
        <App
        options={mockedOptions}
        mockedOnChange={mockedOnChange}/>)
        const placeholder = screen.getByText('Оператор №1');
        expect(placeholder).toBeTruthy();
        //тест не дописан, так как планирую заменить react-select dropdown на другой выпадающий список
    })

    test('тест слайдера минут', () => {
    render(<App />);
    
    const minutesTest = screen.getByTestId('minutesTest');
    expect(minutesTest).toBeInTheDocument();
    expect(minutesTest).toHaveValue('3');
    
    
    const calculatedValue = screen.getByTestId('calculatedValue');
    expect(calculatedValue).toBeInTheDocument();
    expect(calculatedValue).toHaveTextContent(749);
    
    
    fireEvent.change(minutesTest, { target: { value: '1' } });
    expect(minutesTest).toHaveValue('1');
    expect(calculatedValue).toHaveTextContent(599);
    
    fireEvent.change(minutesTest, { target: { value: '4' } });
    expect(minutesTest).toHaveValue('4');
    expect(calculatedValue).toHaveTextContent(799);
});

    test('тест слайдера интернета', () => {
        render(<App />);
        
        const minutesTest = screen.getByTestId('internetTest');
        expect(minutesTest).toBeInTheDocument();
        expect(minutesTest).toHaveValue('2');
        
        
        const calculatedValue = screen.getByTestId('calculatedValue');
        expect(calculatedValue).toBeInTheDocument();
        expect(calculatedValue).toHaveTextContent(749);
        
        fireEvent.change(minutesTest, { target: { value: '1' } });
        expect(minutesTest).toHaveValue('1');
        expect(calculatedValue).toHaveTextContent(549);
        
        fireEvent.change(minutesTest, { target: { value: '4' } });
        expect(minutesTest).toHaveValue('4');
        expect(calculatedValue).toHaveTextContent(1049);
});

    test('тест чекбоксов', () => {
        render(<App />);
        
        const calculatedValue = screen.getByTestId('calculatedValue');
        const rentTest = screen.getByTestId('rentTest');
        const redeemTest = screen.getByTestId('redeemTest');
        const redeemDisplayTest = screen.getByTestId('redeemDisplayTest');
        
        expect(rentTest).toBeInTheDocument();
        expect(redeemTest).toBeInTheDocument();
        expect(redeemDisplayTest).toBeInTheDocument();
        
        fireEvent.click(rentTest);
        expect(calculatedValue).toHaveTextContent(650);
        
        expect(redeemDisplayTest).toHaveClass('hidden');
        fireEvent.click(redeemTest);
        expect(redeemDisplayTest).toHaveClass('router__calc');
});

    test('тест кнопок соц. сетей', () => {
        render(<App/>);
        
        const calculatedValue = screen.getByTestId('calculatedValue');
        expect(calculatedValue).toBeInTheDocument();
        expect(calculatedValue).toHaveTextContent(749);

        const fbTest = screen.getByTestId('fbTest');
        expect(fbTest).toBeInTheDocument();
        const vkTest = screen.getByTestId('vkTest');
        expect(vkTest).toBeInTheDocument();

        fireEvent.click(fbTest);
        expect(calculatedValue).toHaveTextContent(769);
        fireEvent.click(vkTest);
        expect(calculatedValue).toHaveTextContent(789);
        fireEvent.click(fbTest);
        expect(calculatedValue).toHaveTextContent(769);
});

});