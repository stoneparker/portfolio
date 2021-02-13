import styled from 'styled-components';
import ScrollContainer from 'react-indiana-drag-scroll';

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Slider = styled(ScrollContainer)`
  height: 70%;
  white-space: nowrap;
  max-width: 100%;
  cursor: grab;

  &:active {
    cursor: grabbing;
  }
`;

interface ProjectCardProps {
  show: boolean;
}

export const ProjectCard = styled.div<ProjectCardProps>`
  height: 100%;
  display: inline-block;
  width: 300px;
  max-width: 300px;
  background-color: #f00;
  margin: 0 5px;

  /* display: ${ props => props.show ? 'none' : 'block' }; */
`;
