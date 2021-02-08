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
              <a href="https://www.linkedin.com/in/vitorialopesdiogo/" target="_blank">
                <AiFillLinkedin size={35} />
              </a>
            </li>
            <li>
              <a href="https://github.com/stoneparker" target="_blank">
                <AiFillGithub size={35} />
              </a>
            </li>
            <li>
              <a href="mailto:heyvitoria.lopes@gmail.com" target="_blank">
                <AiOutlineMail size={35} />
              </a>
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
