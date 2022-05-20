import React from 'react';
import styled from '@emotion/styled';

const TooltipContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  width: max-content;
  height: auto;

  &:hover .tooltip {
    opacity: 1;
  }
`;

const TooltipContent = styled.div`
  opacity: 0;
  position: absolute;
  top: 40px;
  width: max-content;
  height: auto;
  padding: 5px 15px;
  border-radius: 6px;
  text-align: center;
  ${({ theme: { colors } }) => `
  color: ${colors.default};
    background-color: ${colors.backgroundReversed};
    transition: opacity 0.25s;
  `}
`;

interface Props {
  value: string;
  children?: React.ReactNode;
}

const Tooltip: React.FC<Props> = ({ value, children }) => {
  return (
    <TooltipContainer>
      {children}
      <TooltipContent className="tooltip">{value}</TooltipContent>
    </TooltipContainer>
  );
};

export default Tooltip;
