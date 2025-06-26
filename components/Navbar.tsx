import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Navbar = () => {
  const router = useRouter();
  const currentPath = router.pathname;

  const linkStyle = (path: string) => ({
    color: currentPath === path ? '#C8B560' : '#fff',
    textDecoration: 'none',
    fontWeight: currentPath === path ? 'bold' : 'normal',
  });

  return (
    <nav style={{
      backgroundColor: '#1A252F',
      padding: '20px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }}>
      <Link href="/">
        <span style={{ color: '#C8B560', fontSize: '24px', fontWeight: 'bold', cursor: 'pointer' }}>
          НАШ БУСТ
        </span>
      </Link>
      <div style={{ display: 'flex', gap: '20px' }}>
        <Link href="/howitswork" style={linkStyle('/howitswork')}>Как это работает</Link>
        <Link href="/checkout" style={linkStyle('/checkout')}>Заявка</Link>
        <Link href="/contact" style={linkStyle('/contact')}>Контакты</Link>
      </div>
    </nav>
  );
};

export default Navbar;
