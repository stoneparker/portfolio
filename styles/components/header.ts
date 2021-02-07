import styled from 'styled-components';
import { FiArrowDown } from 'react-icons/fi';
import banner from '../../assets/keyboardHeader.jpg';

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: row;

  main {
    background-color: ${({ theme }) => theme.colors.text};
    padding: 50px;
    width: 50%;
    height: 100vh;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  main nav {
    width: 30%;
    margin-left: auto;
  }

  main nav ul {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    list-style: none;
  }

  main nav ul li {
    color: ${({ theme }) => theme.colors.background};
  }

  main .texts {
    max-width: 80%;
    margin-left: auto;
  }

  main .texts h1 {
    text-align: right;
    margin: 30px 0 30px auto;
    line-height: 85px;
  }

  main .texts p {
    color: ${({ theme }) => theme.colors.background};
    font-size: 35px;
    text-align: right;
  }

  main footer {
    display: flex;
    justify-content: center;
  }
`;

export const FiArrowDownS = styled(FiArrowDown)`
  align-self: flex-end;
  color: ${({ theme }) => theme.colors.background};
  cursor: pointer;
`;

export const Banner = styled.div`
  background-image: url(${banner});
  width: 50%;
  height: 100vh;
  background-size: cover;
`;
