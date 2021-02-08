import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  span {
    color: ${({ theme }) => theme.colors.color2};
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
