type NavbarProps = {
  isMobile?: boolean;
};

export default function Navbar({ isMobile }: NavbarProps) {
  return (
    <nav style={{
      fontSize: isMobile ? '1.3rem' : '2rem',
      paddingBottom: '1rem'
    }}>
      {/* Твой контент */}
      <a href="/cards" style={{ color: '#C8B560', marginRight: 20 }}>Выбрать карты</a>
      <a href="/" style={{ color: '#C8B560' }}>На главную</a>
    </nav>
  );
}
