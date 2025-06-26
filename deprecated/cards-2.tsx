import accounts from './accounts';
import { useState } from 'react';
import Navbar from '../components/Navbar';
import { useRouter } from 'next/router';

export default function CardsPage() {
  const [selected, setSelected] = useState<string[]>([]);
  const router = useRouter();

  const toggleSelect = (id: string) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleCheckout = () => {
    if (selected.length > 0) {
      const query = selected.map((id) => `id=${id}`).join('&');
      router.push(`/checkout?${query}`);
    }
  };

  return (
    <div
      style={{
        backgroundColor: '#2C3E50',
        minHeight: '100vh',
        padding: '20px',
        color: 'white',
      }}
    >
      <Navbar />

      <h1
        style={{
          color: '#C8B560',
          fontSize: '28px',
          marginBottom: '20px',
        }}
      >
        Выберите авторизованные аккаунты:
      </h1>

      <div
        style={{
          maxHeight: '70vh',
          overflowY: 'auto',
          paddingRight: '10px',
        }}
      >
        {accounts.map((acc) => (
          <div
            key={acc.id}
            onClick={() => toggleSelect(acc.id)}
            style={{
              border: selected.includes(acc.id)
                ? '2px solid #C8B560'
                : '1px solid #ccc',
              borderRadius: '10px',
              padding: '10px',
              marginBottom: '10px',
              backgroundColor: '#34495E',
              cursor: 'pointer',
              transition: '0.2s',
            }}
          >
            <strong></strong> – {acc.bank}, {acc.state},{' '}
            ${acc.limit} / {acc.age}
            <div style={{ marginTop: '4px', fontSize: '14px', color: '#aaa' }}>
              Дата добавления: {acc.added}
            </div>
            <div
              style={{
                marginTop: '5px',
                color: '#C8B560',
                fontWeight: 'bold',
              }}
            >
              ${acc.price}
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={handleCheckout}
        style={{
          marginTop: '20px',
          padding: '10px 20px',
          backgroundColor: '#C8B560',
          color: '#2C3E50',
          border: 'none',
          borderRadius: '8px',
          fontWeight: 'bold',
          cursor: 'pointer',
        }}
      >
        Перейти к заявке
      </button>
    </div>
  );
}
