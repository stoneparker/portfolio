import { Container, FiArrowDownS } from '../styles/components/header';

const Header: React.FC = () => {
  return (
    <Container>
      <div>
        <h1>Hi, I'm <span>Vitória Lopes</span></h1>
        <h2>web developer and aspiring UI/UX designer</h2>
      </div>

      <FiArrowDownS size={30} />
    </Container>
  )
}

export default Header;
