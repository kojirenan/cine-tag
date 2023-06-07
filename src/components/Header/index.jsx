import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import HeaderLink from 'components/HeaderLink';

function Header() {
  return (
    <header className={styles.header}>
      <Link to="/">Logo</Link>
      <nav>
        <HeaderLink url="/">Home</HeaderLink>
        <HeaderLink url="/fav">Favoritos</HeaderLink>
      </nav>
    </header>
  );
}

export default Header;
