// 📁 pages/success.tsx
import React from 'react';
import { useRouter } from 'next/router';
import Navbar from '../components/Navbar'; // 👈 вставили навбар

export default function Success() {
  const router = useRouter();

  const goHome = () => {
    router.push('/');
  };

  return (
    <div style={{ backgroundColor: '#2C3E50', minHeight: '100vh', color: '#fff', padding: '40px' }}>
      <Navbar /> {/* 👈 отрисовываем навбар */}

      <div style={{ maxWidth: '600px', margin: '60px auto', textAlign: 'center' }}>
        <h1 style={{ color: '#C8B560', fontSize: '36px', marginBottom: '20px' }}>
          Спасибо за заявку!
        </h1>
        <p style={{ fontSize: '18px', marginBottom: '30px' }}>
          Мы получили вашу информацию. Наш специалист свяжется с вами в ближайшее время.
        </p>
        <button
          onClick={goHome}
          style={{
            backgroundColor: '#C8B560',
            border: 'none',
            padding: '12px 24px',
            borderRadius: '8px',
            fontWeight: 'bold',
            fontSize: '16px',
            cursor: 'pointer',
          }}
        >
          Назад на главную
        </button>
      </div>
    </div>
  );
}
