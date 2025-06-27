import Head from 'next/head';
import Navbar from '../components/Navbar';
import { useState, useEffect } from 'react';
import { cardsData } from '../deprecated/accounts';

export default function CardsPage() {
  const [windowWidth, setWindowWidth] = useState(0);
  const isMobile = windowWidth < 600;

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setWindowWidth(window.innerWidth);
      const handleResize = () => setWindowWidth(window.innerWidth);
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  const formatCurrency = (amount: number) => `$${amount.toLocaleString()}`;

  return (
    <div style={{ backgroundColor: '#2C3E50', minHeight: '100vh', color: '#fff', padding: isMobile ? '1rem' : '2rem' }}>
      <Head>
        <title>AU Аккаунты | НАШ БУСТ</title>
      </Head>

      <Navbar isMobile={isMobile} />

      <main style={{ maxWidth: 1200, margin: '0 auto', marginTop: isMobile ? '1rem' : '2rem' }}>
        <h1 style={{
          fontSize: isMobile ? '2rem' : '3rem',
          fontWeight: 900,
          color: '#C8B560',
          marginBottom: '2rem'
        }}>
          Доступные AU аккаунты
        </h1>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {cardsData.map((card, index) => (
            <div key={index} style={{
              backgroundColor: '#1A2633',
              borderRadius: 12,
              padding: '1rem 1.5rem',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap'
            }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                <span style={{ fontWeight: 'bold', color: '#fff' }}>{card.bank}</span>
                <span style={{ color: '#C8B560' }}>Штат: {card.state} | Лимит: {formatCurrency(card.limit)} | Возраст: {card.age}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <span style={{ fontWeight: 'bold', fontSize: '1.2rem', color: '#C8B560' }}>{formatCurrency(card.price)}</span>
                <button style={{
                  backgroundColor: '#C8B560',
                  color: '#2C3E50',
                  padding: '0.6rem 1.2rem',
                  borderRadius: 8,
                  fontWeight: 'bold',
                  border: 'none',
                  cursor: 'pointer'
                }}>Оставить заявку</button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
