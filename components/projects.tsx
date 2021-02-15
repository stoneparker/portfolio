import ProjectCard from './projectCard';
import { Container, Slider } from '../styles/components/projects';

import projects from '../constants/projects';

const Projects: React.FC = () => {
  return (
    <Container>
      <div>
        <h2>
          <span>&#60;</span>
            WhatIHaveBuilt
          <span> /&#62;</span>
        </h2>
      </div>

      <Slider>
        { projects.map((item) => (
          <ProjectCard key={item._id} data={item} />
        ))}
      </Slider>
    </Container>
  )
}

export default Projects;
