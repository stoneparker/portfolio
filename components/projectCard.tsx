import { Container, Image } from '../styles/components/projectCard';
import { AiFillGithub } from 'react-icons/ai';
import { FiExternalLink } from 'react-icons/fi';

interface Props {
  data: {
    _id: number,
    title: string,
    techs: String[],
    url: string,
    github: string,
    img_url: string,
  },
}

const ProjectCard: React.FC<Props> = ({ data }) => {
  return (
    <Container>
      <Image src={data.img_url} />
      <header>
        <h3>{data.title}</h3>
        <div id="links">
          <a href={data.github}>
            <AiFillGithub color="#6BE2DB" size={30} />
          </a>
          <a href={data.url}>
            <FiExternalLink color="#6BE2DB" size={30} />
          </a>
        </div>
      </header>
    </Container>
  )
}

export default ProjectCard;
