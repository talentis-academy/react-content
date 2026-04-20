import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import LoginForm from './LoginForm';

describe('LoginForm', () => {
  test('renders email and password fields', () => {
    render(<LoginForm />);
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
  });

  test('renders submit button', () => {
    render(<LoginForm />);
    expect(screen.getByRole('button', { name: /sign in/i })).toBeInTheDocument();
  });

  test('shows error when fields are empty', async () => {
    render(<LoginForm />);
    await userEvent.click(screen.getByRole('button', { name: /sign in/i }));
    expect(screen.getByRole('alert')).toHaveTextContent(/required/i);
  });

  test('shows error for invalid email', async () => {
    render(<LoginForm />);
    await userEvent.type(screen.getByLabelText(/email/i), 'notanemail');
    await userEvent.type(screen.getByLabelText(/password/i), 'password123');
    await userEvent.click(screen.getByRole('button', { name: /sign in/i }));
    expect(screen.getByRole('alert')).toHaveTextContent(/valid email/i);
  });

  test('shows error for short password', async () => {
    render(<LoginForm />);
    await userEvent.type(screen.getByLabelText(/email/i), 'user@test.com');
    await userEvent.type(screen.getByLabelText(/password/i), '123');
    await userEvent.click(screen.getByRole('button', { name: /sign in/i }));
    expect(screen.getByRole('alert')).toHaveTextContent(/6 characters/i);
  });

  test('calls onLogin with credentials on valid submit', async () => {
    const mockLogin = vi.fn();
    render(<LoginForm onLogin={mockLogin} />);
    await userEvent.type(screen.getByLabelText(/email/i), 'user@test.com');
    await userEvent.type(screen.getByLabelText(/password/i), 'password123');
    await userEvent.click(screen.getByRole('button', { name: /sign in/i }));
    expect(mockLogin).toHaveBeenCalledWith({ email: 'user@test.com', password: 'password123' });
  });

  test('no error shown on valid submit', async () => {
    render(<LoginForm />);
    await userEvent.type(screen.getByLabelText(/email/i), 'user@test.com');
    await userEvent.type(screen.getByLabelText(/password/i), 'securepassword');
    await userEvent.click(screen.getByRole('button', { name: /sign in/i }));
    expect(screen.queryByRole('alert')).not.toBeInTheDocument();
  });
});
