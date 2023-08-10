import { render } from '@testing-library/react';
import Login from '../components/Login';


describe('Login', () => {
  it('should render the Login component', () => {
    const { getByText } = render(<Login />);

    // If these values were null, meaning not rendered, the test would fail.
    expect(getByText('Login.Title')).toBeTruthy();
    expect(getByText('Login.Enter Login Info')).toBeTruthy();
    expect(getByText('Login.Email')).toBeTruthy();
    expect(getByText('Login.Password')).toBeTruthy();
    expect(getByText('Login.Login Button')).toBeTruthy();
    expect(getByText('Login.Create an Account')).toBeTruthy();
  });
});