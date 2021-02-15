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
  transition: transform 0.7s;
  cursor: default;

  h3 {
    color: ${({ theme }) => theme.colors.background};
    font-size: 0.6rem;
  }

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &:hover {
    transform: scale(1.1);
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
