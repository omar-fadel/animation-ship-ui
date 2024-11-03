import { Decorator } from '@storybook/react';

const GridDecorator: (cols: number, rows: number) => Decorator =
  (cols, rows) => (Story) => (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: `repeat(${cols}, 1fr)`,
        gridTemplateRows: `repeat(${rows}, 1fr)`,
        gap: '0.5rem',
      }}
    >
      {<Story />}
    </div>
  );
export default GridDecorator;
