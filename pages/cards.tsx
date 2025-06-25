import React, { useState } from 'react';
import { useRouter } from 'next/router';

const accounts = [
  { id: 'NC3649', bank: 'Barclays', state: 'NC', serial: '3649', limit: 38400, age: 7.5, position: '1st', price: 1220, label: '*NC - 3649' },
  { id: 'IL3628', bank: 'Chase', state: 'IL', serial: '3628', limit: 10700, age: 5.5, position: '1st', price: 650, label: '*IL - 3628' },
  { id: 'TX1856', bank: 'Chase', state: 'TX', serial: '1856', limit: 15000, age: 8.0, position: '1st', price: 800, label: '*TX - 1856' },
  { id: 'NC2602', bank: 'Chase', state: 'NC', serial: '2602', limit: 15300, age: 16.5, position: '1st', price: 920, label: '*NC - 2602' },
  { id: 'FL3454', bank: 'Chase', state: 'FL', serial: '3454', limit: 36000, age: 6.0, position: '1st', price: 1080, label: '*FL - 3454' },
  { id: 'NJ9452', bank: 'Amex', state: 'NJ', serial: '9452', limit: 12000, age: 5.0, position: '1st', price: 1100, label: '*NJ - 9452' },
  { id: 'GA8821', bank: 'BoA', state: 'GA', serial: '8821', limit: 20000, age: 9.0, position: '1st', price: 1250, label: '*GA - 8821' },
  { id: 'NY6234', bank: 'Chase', state: 'NY', serial: '6234', limit: 17400, age: 4.5, position: '1st', price: 930, label: '*NY - 6234' },
  { id: 'CA1980', bank: 'Wells Fargo', state: 'CA', serial: '1980', limit: 22400, age: 11.5, position: '1st', price: 1400, label: '*CA - 1980' },
  { id: 'TX7719', bank: 'Capital One', state: 'TX', serial: '7719', limit: 8100, age: 3.0, position: '1st', price: 620, label: '*TX - 7719' },
  // ...ещё 321 карточка — включены при сборке (в реальном коде они будут вставлены сюда)
];

export default function CardsPage() {
  const [selected, setSelected] = useState<string[]>([]);
  const router = useRouter();

  const toggleSelect = (id: string) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleSubmit = () => {
    if (selected.length === 0) {
      alert('Выберите хотя бы один аккаунт.');
      return;
    }
    router.push({ pathname: '/checkout', query: { selected: JSON.stringify(selected) } });
  };

  return (
    <div style={{ backgroundColor: '#2C3E50', minHeight: '100vh', padding: '20px' }}>
      <h1 style={{ color: '#C8B560', fontSize: '28px', marginBottom: '20px' }}>Выберите авторизованные аккаунты:</h1>
      <div>
        {accounts.map((acc) => (
          <div
            key={acc.id}
            onClick={() => toggleSelect(acc.id)}
            style={{
              border: selected.includes(acc.id) ? '2px solid #C8B560' : '1px solid #ccc',
              borderRadius: '10px',
              padding: '10px',
              marginBottom: '10px',
              color: '#fff',
              backgroundColor: '#34495E',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              cursor: 'pointer',
            }}
          >
            <div>
              <strong style={{ color: '#C8B560' }}>{acc.label}</strong> — {acc.bank}, {acc.state}, Лимит: ${acc.limit.toLocaleString()}, Возраст: {acc.age} лет, Позиция: {acc.position}
            </div>
            <div style={{ color: '#C8B560', fontWeight: 'bold' }}>${acc.price}</div>
          </div>
        ))}
      </div>
      <button
        onClick={handleSubmit}
        style={{
          marginTop: '30px',
          backgroundColor: '#C8B560',
          border: 'none',
          padding: '12px 20px',
          borderRadius: '8px',
          fontWeight: 'bold',
          fontSize: '16px',
        }}
      >
        Перейти к заявке
      </button>
    </div>
  );
}
