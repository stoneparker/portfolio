import styled from 'styled-components';

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

export const UlItem = styled.a`
  background-color: ${({ color }) => color};
  width: 90px;
  height: 90px;
  margin: 0 10px;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.text};

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`
