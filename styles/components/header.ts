import styled from 'styled-components';
import { FiArrowDown } from 'react-icons/fi';
import { CgMouse } from 'react-icons/cg';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  padding: 80px 130px;

  display: flex;
  align-items: center;

  div {
    display: flex;
    flex-direction: column;
  }

  h2 {
    font-size: 25px;
  }

  span {
    color: ${({ theme }) => theme.colors.color1};
  }
`;

export const FiArrowDownS = styled(FiArrowDown)`
  align-self: flex-end;
  color: ${({ theme }) => theme.colors.color1};
  cursor: pointer;
`;
