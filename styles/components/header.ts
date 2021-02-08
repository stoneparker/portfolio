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

  main nav ul li a {
    color: ${({ theme }) => theme.colors.background};
  }

  main .texts {
    max-width: 90%;
    margin-left: auto;
    color: ${({ theme }) => theme.colors.background};
    text-align: right;
  }

  main .texts h1 {
    margin: 30px 0 30px auto;
    line-height: 85px;
  }

  main footer {
    display: flex;
    justify-content: center;
  }

  @media (max-width: 900px) {
    main {
      background-image: url(${banner});
      backdrop-filter: grayscale(100%);
      width: 100vw;
      padding: 40px;
    }

    main * {
      filter: blur(0);
    }

    main nav {
      width: 35%;
    }

    main nav ul li a {
      color: ${({ theme }) => theme.colors.text};
    }

    main .texts {
      color: ${({ theme }) => theme.colors.text};
      margin: 0;
      text-align: left;
      max-width: 100vw;
    }

    main h1 {
      color: ${({ theme }) => theme.colors.text};
    }

    main footer {
      background-color: ${({ theme }) => theme.colors.text};
    }
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

  @media (max-width: 900px) {
    display: none;
  }
`;
