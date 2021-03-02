import styled from 'styled-components';

export const Container = styled.article`
  height: 400px;
  display: inline-block;
  width: 300px;
  max-width: 300px;
  background-color: ${({ theme }) => theme.colors.text};
  margin: 0 10px;
  border-radius: 9px;
  overflow: hidden;
  transition: transform .3s ease;
  /* cursor: default; */

  section {
    padding: 15px 10px;
  }

  h3 {
    color: ${({ theme }) => theme.colors.background};
    font-size: 0.6rem;
  }

  div#links a:first-child {
    margin-right: 7px;
  }

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &:hover {
    transform: scale(1.1);
  }

  p {
    color: #868686;
    font-size: 0.4rem;
    width: 100%;
    white-space: normal;
  }
`;

interface ImageProps {
  src: string,
}

export const Image = styled.div<ImageProps>`
  width: 100%;
  height: 70%;
  background-image: url(${({ src }) => src});
  background-size: cover;
  background-position: center;
`;
