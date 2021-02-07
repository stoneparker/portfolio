import { Container, Banner, FiArrowDownS } from '../styles/components/header';
import { AiFillLinkedin, AiFillGithub, AiOutlineMail } from 'react-icons/ai';

const Header: React.FC = () => {
  return (
    <Container>
      <Banner />
      <main>
        <nav>
          <ul>
            <li>
              <AiFillLinkedin size={35} />
            </li>
            <li>
              <AiFillGithub size={35} />
            </li>
            <li>
              <AiOutlineMail size={35} />
            </li>
          </ul>
        </nav>

        <div className="texts">
          <p>Hi, I’m</p>
          <h1>Vitória Lopes</h1>
          <p>Web developer and aspiring UI/UX designer based in São Paulo, Brazil.</p>
        </div>

        <footer>
          <FiArrowDownS size={50} />
        </footer>
      </main>
    </Container>
  )
}

export default Header;
