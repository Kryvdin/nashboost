// 📁 app/checkout.tsx
import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';

const accounts = [
  {
    id: 'A101',
    bank: 'American Express',
    state: 'CA',
    limit: 10000,
    age: 4,
    price: 650,
  },
  {
    id: 'A102',
    bank: 'Discover',
    state: 'NY',
    limit: 5000,
    age: 2,
    price: 400,
  },
  {
    id: 'A103',
    bank: 'Chase',
    state: 'TX',
    limit: 15000,
    age: 5,
    price: 850,
  },
  {
    id: 'A104',
    bank: 'Bank of America',
    state: 'FL',
    limit: 8000,
    age: 3,
    price: 500,
  },
];

export default function Checkout() {
  const router = useRouter();
  const selectedQuery = router.query.selected as string;
  const selectedIds = selectedQuery ? JSON.parse(selectedQuery) : [];
  const selectedAccounts = accounts.filter((acc) => selectedIds.includes(acc.id));

  const [formData, setFormData] = useState({ name: '', lastName: '', email: '', phone: '' });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(
      `Заявка отправлена:\nИмя: ${formData.name}\nФамилия: ${formData.lastName}\nEmail: ${formData.email}\nТелефон: ${formData.phone}\nВыбранные аккаунты: ${selectedAccounts
        .map((a) => a.id)
        .join(', ')}`
    );
  };

  return (
    <div style={{ backgroundColor: '#2C3E50', minHeight: '100vh', padding: '40px', color: '#fff' }}>
      <h1 style={{ color: '#C8B560', fontSize: '32px', marginBottom: '20px' }}>
        Вы выбрали следующие аккаунты:
      </h1>
      {selectedAccounts.length === 0 ? (
        <p>Нет выбранных аккаунтов.</p>
      ) : (
        <ul>
          {selectedAccounts.map((acc) => (
            <li key={acc.id} style={{ marginBottom: '10px' }}>
              <strong style={{ color: '#C8B560' }}>#{acc.id}</strong> — {acc.bank}, {acc.state}, Лимит: ${acc.limit.toLocaleString()}, Возраст: {acc.age} лет, Цена: <strong style={{ color: '#C8B560' }}>${acc.price}</strong>
            </li>
          ))}
        </ul>
      )}

      <form onSubmit={handleSubmit} style={{ marginTop: '40px', maxWidth: '500px' }}>
        <label style={{ display: 'block', marginBottom: '10px' }}>
          Имя:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
            style={{ width: '100%', padding: '10px', marginTop: '5px' }}
          />
        </label>
        <label style={{ display: 'block', marginBottom: '10px' }}>
          Фамилия:
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
            required
            style={{ width: '100%', padding: '10px', marginTop: '5px' }}
          />
        </label>
        <label style={{ display: 'block', marginBottom: '10px' }}>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
            style={{ width: '100%', padding: '10px', marginTop: '5px' }}
          />
        </label>
        <label style={{ display: 'block', marginBottom: '20px' }}>
          Телефон:
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            required
            style={{ width: '100%', padding: '10px', marginTop: '5px' }}
          />
        </label>
        <button
          type="submit"
          style={{
            backgroundColor: '#C8B560',
            border: 'none',
            padding: '12px 20px',
            borderRadius: '8px',
            fontWeight: 'bold',
            fontSize: '16px',
          }}
        >
          Отправить заявку
        </button>
      </form>
    </div>
  );
}
