export interface ConditionalRenderProps {
  condition: boolean;
  children: React.ReactNode;
}

const ConditionalRender: React.FC<ConditionalRenderProps> = ({
  condition,
  children,
}) => {
  if (!condition) return null;
  return children;
};

export default ConditionalRender;
