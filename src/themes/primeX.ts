import { Config } from 'tailwindcss';

const primeX: Config['theme'] = {
  extend: {
    colors: {
      primary: {
        light: '#FFD7D9',
        main: '#E32228',
        dark: '#A80D12',
      },
      secondary: {
        main: '#660F14',
        light: '#FFD7D9',
        dark: '#A80D12',
      },
      grey: {
        light: '#F5F5F5',
        main: '#757575',
        dark: '#424242',
      },
    },
    fontSize: {
      h1: [
        '3.75rem',
        {
          fontWeight: '700',
        },
      ],
      h2: [
        '3rem',
        {
          fontWeight: '700',
        },
      ],
      h3: ['1.875rem', { fontWeight: '400' }],
      h4: ['1.5rem', { fontWeight: '400' }],
      h5: ['1.125rem', { fontWeight: '700' }],
      h6: '1.5rem',
      body1: ['1.25rem', { fontWeight: '400' }],
      body2: ['0.75rem', { fontWeight: '400' }],
    },
  },
};
export default primeX;
