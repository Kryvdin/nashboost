// 📁 pages/about.tsx
import React from 'react';
import Navbar from '../components/Navbar'; // 👈 добавлен навбар

export default function AboutPage() {
  return (
    <div style={{ backgroundColor: '#2C3E50', minHeight: '100vh', padding: '40px', color: '#fff' }}>
      <Navbar />

      <h1 style={{ color: '#C8B560', fontSize: '32px', marginBottom: '20px' }}>О нас</h1>

      <p style={{ fontSize: '18px', lineHeight: '1.6', marginBottom: '20px' }}>
        Мы предоставляем авторизованные аккаунты (AU tradelines) для тех, кто хочет быстро и
        легально повысить свой кредитный скор. Это один из самых эффективных способов усилить
        кредитную историю за короткий срок.
      </p>

      <p style={{ fontSize: '18px', lineHeight: '1.6', marginBottom: '20px' }}>
        Наша команда вручную подбирает проверенные аккаунты с высоким лимитом и возрастом,
        размещает вас как авторизованного пользователя и уведомляет, когда аккаунт
        отразится в отчёте. Это может помочь в получении кредитных карт, авто, аренды и
        даже одобрения на бизнес-финансирование.
      </p>

      <p style={{ fontSize: '18px', lineHeight: '1.6' }}>
        Мы работаем честно, без скрытых платежей. Оплата только после подтверждения заявки.
        Все аккаунты проверяются, и вы получаете поддержку на каждом этапе.
      </p>
    </div>
  );
}
