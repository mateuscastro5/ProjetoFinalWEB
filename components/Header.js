import styles from '../styles/Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src="/logo.png" alt="Fit Flex Logo" />
      </div>
      <nav className={styles.nav}>
        <a href="#inicio" className={`${styles.link} ${styles.active}`}>INICIO</a>
        <a href="#planos" className={styles.link}>PLANOS</a>
        <a href="#sobre-nos" className={styles.link}>SOBRE NÓS</a>
      </nav>
    </header>
  );
};

export default Header;
