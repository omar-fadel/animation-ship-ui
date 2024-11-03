import { Config } from 'tailwindcss';

const primeX: Config['theme'] = {
  screens: {
    sm: '--var(--screen-sm, 640px)',
    md: '--var(--screen-md, 768px)',
    lg: '--var(--screen-lg, 1440px)',
  },
  extend: {
    colors: {
      primary: {
        light: 'var(--color-primary-light, #FFD7D9)',
        main: 'var(--color-primary-main, #E32228)',
        dark: 'var(--color-primary-dark, #A80D12)',
      },
      secondary: {
        main: 'var(--color-secondary-main, #660F14)',
        light: 'var(--color-secondary-light, #FFD7D9)',
        dark: 'var(--color-secondary-dark, #A80D12)',
      },
      grey: {
        light: 'var(--color-grey-light, #F5F5F5)',
        main: 'var(--color-grey-main, #757575)',
        dark: 'var(--color-grey-dark, #424242)',
      },
    },
    fontSize: {
      h1: [
        'var(--font-size-h1, 3.75rem)',
        {
          fontWeight: 'var(--font-weight-h1, 700)',
        },
      ],
      h2: [
        'var(--font-size-h2, 3rem)',
        {
          fontWeight: 'var(--font-weight-h2, 700)',
        },
      ],
      h3: [
        'var(--font-size-h3, 1.875rem)',
        {
          fontWeight: 'var(--font-weight-h3, 400)',
        },
      ],
      h4: [
        'var(--font-size-h4, 1.5rem)',
        {
          fontWeight: 'var(--font-weight-h4, 400)',
        },
      ],
      h5: [
        'var(--font-size-h5, 1.125rem)',
        {
          fontWeight: 'var(--font-weight-h5, 700)',
        },
      ],
      h6: 'var(--font-size-h6, 1.5rem)',
      body1: [
        'var(--font-size-body1, 1.25rem)',
        {
          fontWeight: 'var(--font-weight-body1, 400)',
        },
      ],
      body2: [
        'var(--font-size-body2, 0.75rem)',
        {
          fontWeight: 'var(--font-weight-body2, 400)',
        },
      ],
    },
  },
};
export default primeX;
