import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Counter from './Counter';

describe('Counter', () => {
  test('renders initial count of 0', () => {
    render(<Counter />);
    expect(screen.getByTestId('count')).toHaveTextContent('0');
  });

  test('renders custom initial count', () => {
    render(<Counter initialCount={5} />);
    expect(screen.getByTestId('count')).toHaveTextContent('5');
  });

  test('increments count when + button is clicked', async () => {
    render(<Counter />);
    await userEvent.click(screen.getByTestId('increment'));
    expect(screen.getByTestId('count')).toHaveTextContent('1');
  });

  test('decrements count when − button is clicked', async () => {
    render(<Counter initialCount={3} />);
    await userEvent.click(screen.getByTestId('decrement'));
    expect(screen.getByTestId('count')).toHaveTextContent('2');
  });

  test('resets count to initial value', async () => {
    render(<Counter initialCount={10} />);
    await userEvent.click(screen.getByTestId('increment'));
    await userEvent.click(screen.getByTestId('reset'));
    expect(screen.getByTestId('count')).toHaveTextContent('10');
  });

  test('can increment multiple times', async () => {
    render(<Counter />);
    await userEvent.click(screen.getByTestId('increment'));
    await userEvent.click(screen.getByTestId('increment'));
    await userEvent.click(screen.getByTestId('increment'));
    expect(screen.getByTestId('count')).toHaveTextContent('3');
  });
});
