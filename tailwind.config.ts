import { Config } from 'tailwindcss';
import primeX from './src/themes/primeX';

const config: Config = {
  content: [
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/stories/**/*.{js,ts,jsx,tsx}',
  ],
  theme: primeX,
  plugins: [],
  important: true,
};

export default config;
