import React, { render, screen } from '@testing-library/react';
import Operator from './Operator';

test('тест оператора', () => {
    render(<Operator />)
    const dropdown = screen.getByRole('combobox');
    expect(dropdown).toBeInTheDocument();
});