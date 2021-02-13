import { Container, Slider, ProjectCard } from '../styles/components/projects';

const Projects: React.FC = () => {
  const projects = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <Container>
      <h2>
        <span>&#60;</span>
          WhatIHaveBuilting
        <span> /&#62;</span>
      </h2>

      <Slider>
        { projects.map((item) => (
          <ProjectCard
            key={item}
            show={item == 1 || item == 4}
          >
            project
          </ProjectCard>
        ))}
      </Slider>
    </Container>
  )
}

export default Projects;
