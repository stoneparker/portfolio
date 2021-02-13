import { Container, UlItem } from '../styles/components/contacts';
import { AiFillLinkedin, AiFillGithub, AiOutlineMail } from 'react-icons/ai';
import theme from '../styles/theme';

const Contacts: React.FC = () => {
  return (
    <Container>
      <h2>
        <span>&#60;</span>
          LetUsTalk
        <span> /&#62;</span>
      </h2>
      <p>
        I’m always available to know new opportunities. <br/>
        Connect with me and let’s make wonder things together.
      </p>

      <ul>
        <UlItem
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.1 }}
          color={theme.colors.color1}
        >
          <a href="https://www.linkedin.com/in/vitorialopesdiogo/" target="_blank">
            <AiFillLinkedin size={64} />
          </a>
        </UlItem>
        <UlItem
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.1 }}
          color={theme.colors.color2}
        >
          <a href="https://github.com/stoneparker" target="_blank">
            <AiFillGithub size={64} />
          </a>
        </UlItem>
        <UlItem
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.1 }}
          color={theme.colors.color3}
        >
          <a href="mailto:heyvitoria.lopes@gmail.com" target="_blank">
            <AiOutlineMail size={64} />
          </a>
        </UlItem>
      </ul>
    </Container>
  )
}

export default Contacts;
