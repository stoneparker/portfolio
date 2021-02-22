import styled from 'styled-components';
import ScrollContainer from 'react-indiana-drag-scroll';

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h2 {
    margin-left: 50px;
  }

  h2 span {
    color: ${({ theme }) =>  theme.colors.color1};
  }

  div:first-child {
    width: 100%;
  }
`;

export const Slider = styled(ScrollContainer)`
  /* height: 70%; */
  height: auto;
  white-space: nowrap;
  max-width: 100%;
  cursor: grab;
  padding: 20px 0;

  &:active {
    cursor: grabbing;
  }
`;
