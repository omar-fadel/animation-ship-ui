import SpaceBetween from '@templates/SpaceBetween';

const meta = {
  title: 'Templates/SpaceBetween',
  component: SpaceBetween,
  args: {},
};

export default meta;

export const Primary = {
  args: {
    className: 'bg-red-400',
    children: [
      <div className="h-32 w-32 bg-black" />,
      <div className="h-32 w-32 bg-green-400" />,
      <div className="h-32 w-32 bg-blue-400" />,
      <div className="h-32 w-32 bg-black" />,
      <div className="h-32 w-32 bg-green-400" />,
      <div className="h-32 w-32 bg-blue-400" />,
    ],
  },
};
