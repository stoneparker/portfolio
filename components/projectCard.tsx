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
        <section>
          <header>
            <h3>{data.title}</h3>
            <div id="links">
              <a href={data.github} target="_blank">
                <AiFillGithub color="#6BE2DB" size={25} />
              </a>
              <a href={data.url} target="_blank">
                <FiExternalLink color="#6BE2DB" size={25} />
              </a>
            </div>
          </header>
          <p>
          {data.techs.map((tech, index) => (
            index !== data.techs.length - 1
            ? tech + ', '
            : tech
          ))}
          </p>
      </section>
    </Container>
  )
}

export default ProjectCard;
