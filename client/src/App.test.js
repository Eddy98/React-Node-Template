import { expect, test } from '@jest/globals';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

describe('App Component', () => {
  test('Renders Eduardo Graziano', async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve({ message: 'Eduardo Graziano' }),
      })
    );

    const { findByText } = render(<App />);
    expect(await findByText('Eduardo Graziano')).toBeVisible();
  });

  test('Renders unexpected error', async () => {
    fetch.mockImplementationOnce(() => Promise.reject('API is down'));

    const { findByText } = render(<App />);
    expect(await findByText('Unexpected error')).toBeVisible();
  });
});
