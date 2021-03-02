import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  background-color: ${({ theme }) => theme.colors.text};

  span {
    color: ${({ theme }) => theme.colors.color2};
  }

  h2, p {
    color: ${({ theme }) => theme.colors.background};
  }

  p {
    max-width: 40%;
    text-align: center;
    margin-bottom: 70px;
  }

  ul {
    list-style: none;
    display: flex;
    flex-direction: row;
  }

  .a-btn {
    border: 5px solid #000;
    padding: 17px 30px;
    border-image: linear-gradient(to right, #FF5FB1, #6BE2DB, #87DA94);
    border-image-slice: 1;

    color: ${({ theme }) => theme.colors.background};
    text-decoration: none;
    text-transform: uppercase;
    font-size: 0.7rem;
    margin-top: 40px;
  }

  @media (max-width: 900px) {
    p {
      max-width: 90%;
    }
  }
`;

export const UlItem = styled(motion.li)`
  background-color: ${({ color }) => color};
  width: 90px;
  height: 90px;
  margin: 0 10px;
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  a {
    color: ${({ theme }) => theme.colors.text};
  }
`
