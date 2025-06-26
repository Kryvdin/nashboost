// 📁 pages/contact.tsx
import React from 'react';
import Navbar from '../components/Navbar'; // 👈 добавлен импорт

const Contact = () => {
  return (
    <div style={{ backgroundColor: '#2C3E50', color: '#fff', minHeight: '100vh', padding: '40px' }}>
      <Navbar /> {/* 👈 вставлен компонент */}
      <h1 style={{ fontSize: '32px', color: '#C8B560' }}>Контакты (скоро будет)</h1>
    </div>
  );
};

export default Contact;
