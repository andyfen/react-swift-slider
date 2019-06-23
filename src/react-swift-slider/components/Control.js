import React from 'react';
import styled from 'styled-components';

export const DIRECTION = {
  prev: 'prev',
  next: 'next',
};

const SwiftSliderControlBase = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  z-index: 10;
  padding: 0 2rem;
  width: 30%;
  cursor: pointer;
  align-items: center;
`;

const SwiftSliderControlPrev = styled(SwiftSliderControlBase)`
  left: 0;
  &:hover {
    background: linear-gradient(to right, rgba(0, 0, 0, 0.5), transparent);
  }
`;

const SwiftSliderControlNext = styled(SwiftSliderControlBase)`
  right: 0;
  &:hover {
    background: linear-gradient(to right, transparent, rgba(0, 0, 0, 0.5));
  }
`;

export default function Control({ onPressNext, onPressPrev, direction }) {
  return direction === DIRECTION.prev ? (
    <SwiftSliderControlPrev onClick={onPressPrev} />
  ) : (
    <SwiftSliderControlNext onClick={onPressNext} />
  );
}
