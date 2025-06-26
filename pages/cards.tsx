import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { fetchCardsFromSheet } from '../lib/fetchCards';

export default function CardsScreen() {
  const router = useRouter();
  const [cards, setCards] = useState<any[]>([]);
  const [selectedCards, setSelectedCards] = useState<any[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    fetchCardsFromSheet().then((data) => {
      setCards(data.filter(card => card.Банк));
    });
  }, []);

  const toggleCardSelection = (card: any) => {
    setSelectedCards(prev => {
      const exists = prev.find(c => c.Банк === card.Банк && c.Лимит === card.Лимит);
      if (exists) {
        return prev.filter(c => !(c.Банк === card.Банк && c.Лимит === card.Лимит));
      } else {
        return [...prev, card];
      }
    });
  };

  const handleSend = () => {
    // Тут позже можно будет настроить отправку на email или Telegram
    console.log('Заявка отправлена:', { name, surname, email, phone, карты: selectedCards });
    setSubmitted(true);
    setTimeout(() => {
      setShowModal(false);
      setSubmitted(false);
      setName('');
      setSurname('');
      setEmail('');
      setPhone('');
      setSelectedCards([]);
    }, 3000); // скрыть через 3 сек
  };

  return (
    <div style={{ padding: '2rem', backgroundColor: '#2C3E50', minHeight: '100vh', position: 'relative' }}>
      
      {/* Кнопка возврата на главную */}
      <button
        onClick={() => router.push('/')}
        style={{
          backgroundColor: '#C8B560',
          color: '#2C3E50',
          padding: '0.5rem 1.25rem',
          borderRadius: '8px',
          border: 'none',
          fontWeight: 'bold',
          marginBottom: '1.5rem',
          cursor: 'pointer',
        }}
      >
        ← Назад на главную
      </button>

      <h1 style={{ color: 'white', marginBottom: '2rem' }}>Доступные AU аккаунты</h1>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', gap: '2rem' }}>
        {cards.map((card, index) => (
          <div
            key={index}
            onClick={() => toggleCardSelection(card)}
            style={{
              border: '2px solid gold',
              borderRadius: '12px',
              padding: '1.5rem',
              backgroundColor: selectedCards.includes(card) ? '#C8B560' : '#1B2A38',
              color: 'white',
              cursor: 'pointer'
            }}
          >
            <h2 style={{ color: '#C8B560' }}>{card.Банк}</h2>
            <p><strong>Штат:</strong> {card.Штат}</p>
            <p><strong>Лимит:</strong> ${card.Лимит}</p>
            <p><strong>Возраст:</strong> {card.Возраст} лет</p>
            <p><strong>Цена:</strong> {card.Цена}</p>
            <p><strong>Подача:</strong> </p>
            <p><strong>Дата подачи:</strong> {card['Дата подачи']}</p>
            <p><strong>Тип:</strong> {card.Тип}</p>
          </div>
        ))}
      </div>

      {selectedCards.length > 0 && !showModal && (
        <div
          style={{
            position: 'fixed',
            bottom: '20px',
            left: '50%',
            transform: 'translateX(-50%)',
            backgroundColor: '#C8B560',
            color: '#2C3E50',
            padding: '1rem 2rem',
            borderRadius: '10px',
            fontWeight: 'bold',
            boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
            zIndex: 999,
            cursor: 'pointer'
          }}
          onClick={() => setShowModal(true)}
        >
          Оформить заявку на {selectedCards.length} карт(ы)
        </div>
      )}

      {showModal && (
        <div style={{
          position: 'fixed',
          top: 0, left: 0, width: '100%', height: '100%',
          backgroundColor: 'rgba(0,0,0,0.7)',
          display: 'flex', justifyContent: 'center', alignItems: 'center',
          zIndex: 1000
        }}>
          <div style={{
            backgroundColor: '#1B2A38',
            padding: '2rem',
            borderRadius: '12px',
            width: '90%',
            maxWidth: '500px',
            color: 'white',
            boxShadow: '0 0 20px gold'
          }}>
            <h2 style={{ marginBottom: '1rem', color: '#C8B560' }}>
              {submitted ? 'Заявка отправлена' : 'Оформление заявки'}
            </h2>

            {!submitted ? (
              <>
                <input
                  type="text"
                  placeholder="Имя"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  style={inputStyle}
                />
                <input
                  type="text"
                  placeholder="Фамилия"
                  value={surname}
                  onChange={(e) => setSurname(e.target.value)}
                  style={inputStyle}
                />
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  style={inputStyle}
                />
                <input
                  type="tel"
                  placeholder="Телефон"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  style={inputStyle}
                />
                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '1.5rem' }}>
                  <button onClick={handleSend} style={buttonStyle}>Отправить</button>
                  <button onClick={() => setShowModal(false)} style={{ ...buttonStyle, backgroundColor: '#999' }}>Отмена</button>
                </div>
              </>
            ) : (
              <p style={{ fontSize: '16px', marginTop: '1rem' }}>
                Ваша заявка отправлена. Специалист свяжется с вами в ближайшее время.
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

const inputStyle = {
  width: '100%',
  padding: '0.75rem',
  marginBottom: '1rem',
  borderRadius: '6px',
  border: '1px solid #ccc',
  fontSize: '16px'
};

const buttonStyle = {
  backgroundColor: '#C8B560',
  color: '#2C3E50',
  padding: '0.75rem 1.5rem',
  border: 'none',
  borderRadius: '8px',
  fontWeight: 'bold',
  cursor: 'pointer'
};
