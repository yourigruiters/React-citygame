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

const TooltipContent = styled.div<{
  position: 'bottom' | 'right';
  display: boolean;
}>`
  ${({ theme: { colors }, position, display }) => `
    display: ${display ? 'block' : 'none'};
    opacity: 0;
    position: absolute;
    top: ${position === 'bottom' ? '40px' : '0px'};
    left: ${position === 'bottom' ? '0px' : '50px'};;
    width: max-content;
    height: auto;
    padding: 5px 15px;
    border-radius: 6px;
    text-align: center;

  color: ${colors.default};
    background-color: ${colors.backgroundReversed};
    transition: opacity 0.25s;
  `}
`;

interface Props {
  value: string;
  position?: 'bottom' | 'right';
  display?: boolean;
  children?: React.ReactNode;
}

const Tooltip: React.FC<Props> = ({
  value,
  position = 'bottom',
  display = true,
  children,
}) => {
  return (
    <TooltipContainer>
      {children}
      <TooltipContent
        className="tooltip"
        position={position}
        display={display}
      >
        {value}
      </TooltipContent>
    </TooltipContainer>
  );
};

export default Tooltip;
