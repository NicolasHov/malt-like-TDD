import { render, screen } from '@testing-library/react';
import App from './App';

it('renders all freelances', () => {
  render(<App />);
  expect(screen.getByText('Antonio Ribeiro')).toBeInTheDocument();
});
