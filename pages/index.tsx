import Head from 'next/head';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export type Account = {
  bank: string;
  state: string;
  limit: number;
  age: string;
  price: number;
  submissionDate: string;
  type: string;
};

export default function Home() {
  const [windowWidth, setWindowWidth] = useState(0);
  const [cardsData, setCardsData] = useState<Account[]>([]);
  const [filteredCards, setFilteredCards] = useState<Account[]>([]);
  const [minLimit, setMinLimit] = useState<number | string>('');
  const [maxLimit, setMaxLimit] = useState<number | string>('');
  const [minPrice, setMinPrice] = useState<number | string>('');
  const [maxPrice, setMaxPrice] = useState<number | string>('');
  const [minAge, setMinAge] = useState<number | string>('');
  const [maxAge, setMaxAge] = useState<number | string>('');
  const [selectedCards, setSelectedCards] = useState<Account[]>([]);
  const [showPopup, setShowPopup] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({ name: '', surname: '', email: '', phone: '' });

  const isMobile = windowWidth < 600;

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setWindowWidth(window.innerWidth);
      const handleResize = () => setWindowWidth(window.innerWidth);
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://opensheet.elk.sh/1sVp4rsHWCxCe3YaNsODwZrFfhU7NuZ2wialm1LKy5eU/1');
        const data = await response.json();
        const parsed = data.map((row: any) => ({
          bank: row['Банк'],
          state: row['Штат'],
          limit: parseInt(row['Лимит'].replace(/[^\d]/g, '')),
          age: row['Возраст'],
          price: parseInt(row['Цена']),
          submissionDate: row['Дата подачи'],
          type: row['Тип'],
        }));
        setCardsData(parsed);
      } catch (error) {
        console.error('Ошибка загрузки данных:', error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const parseAge = (age: string) => {
      const match = age.match(/\d+(\.\d+)?/);
      return match ? parseFloat(match[0]) : 0;
    };

    const parsedMinLimit = minLimit === '' ? 0 : Number(minLimit);
    const parsedMaxLimit = maxLimit === '' ? Infinity : Number(maxLimit);
    const parsedMinPrice = minPrice === '' ? 0 : Number(minPrice);
    const parsedMaxPrice = maxPrice === '' ? Infinity : Number(maxPrice);
    const parsedMinAge = minAge === '' ? 0 : Number(minAge);
    const parsedMaxAge = maxAge === '' ? Infinity : Number(maxAge);

    const result = cardsData.filter(card => {
      const parsedAge = parseAge(card.age);
      return (
        card.limit >= parsedMinLimit && card.limit <= parsedMaxLimit &&
        card.price >= parsedMinPrice && card.price <= parsedMaxPrice &&
        parsedAge >= parsedMinAge && parsedAge <= parsedMaxAge
      );
    });
    setFilteredCards(result);
  }, [cardsData, minLimit, maxLimit, minPrice, maxPrice, minAge, maxAge]);

  const formatCurrency = (amount: number) => `$${amount.toLocaleString()}`;

  const handleSelect = (card: Account) => {
    setSelectedCards(prev => {
      const exists = prev.find(c => c.bank === card.bank && c.limit === card.limit);
      const updated = exists ? prev.filter(c => c !== exists) : [...prev, card];
      if (updated.length > 0) setShowPopup(true);
      return updated;
    });
  };

  const handleSubmitRequest = () => {
    if (selectedCards.length === 0) return alert('Выберите хотя бы одну карту.');
    setShowForm(true);
  };

  const handleFormSubmit = () => {
    setShowForm(false);
    setSelectedCards([]);
    setTimeout(() => {
      setShowPopup(false);
      const message = `\u2728 Заявка успешно отправлена!\n\n` +
        `Имя: ${formData.name} ${formData.surname}\n` +
        `Email: ${formData.email}\n` +
        `Телефон: ${formData.phone}`;
      const toast = document.createElement('div');
      toast.style.position = 'fixed';
      toast.style.top = '20px';
      toast.style.left = '50%';
      toast.style.transform = 'translateX(-50%)';
      toast.style.backgroundColor = '#C8B560';
      toast.style.color = '#2C3E50';
      toast.style.padding = '1rem 2rem';
      toast.style.borderRadius = '8px';
      toast.style.fontWeight = 'bold';
      toast.style.zIndex = '10000';
      toast.style.boxShadow = '0 0 10px #000';
      toast.textContent = message;
      document.body.appendChild(toast);
      setTimeout(() => document.body.removeChild(toast), 5000);
    }, 100);
  };

  return (
    <div style={{ backgroundColor: '#2C3E50', minHeight: '100vh', color: '#fff', padding: isMobile ? '1rem' : '2rem' }}>
      <Head>
        <title>НАШ БУСТ — Доступные карты</title>
        <meta name="description" content="Подключение к авторизованным кредитным линиям (AU аккаунтам) от крупнейших банков США. Быстрое улучшение кредитной истории." />
      </Head>

      <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
        <h1 style={{ fontSize: isMobile ? '2.5rem' : '4rem', fontWeight: 900, color: '#C8B560', textShadow: '0 0 8px #C8B560' }}>
          НАШ БУСТ
        </h1>
      </div>

      <div style={{ textAlign: 'center', margin: '0 auto 2rem', maxWidth: 800, fontSize: '1.1rem', lineHeight: 1.6, color: '#fff' }}>
        <p>Наш Boost — это возможность временно добавить авторизованные аккаунты к вашему кредитному отчёту на 2 месяца.</p>
        <p>Это может быстро увеличить ваш кредитный скор и помочь получить одобрение на авто или high-limit карты.</p>
        <p>Сначала вы выбираете нужные карты, оставляете заявку, а затем специалист свяжется с вами и проверит вашу историю.</p>
        <p>Если есть проблемы — мы подскажем, как их устранить и подготовим вас к добавлению AU аккаунтов.</p>
        <p>После проверки карты будут добавлены к вашему кредитному отчёту, и начнётся ваш кредитный буст!</p>
      </div>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginBottom: '2rem' }}>
        <input type="number" placeholder="Мин. лимит" value={minLimit} onChange={e => setMinLimit(e.target.value)} style={{ flex: 1 }} />
        <input type="number" placeholder="Макс. лимит" value={maxLimit} onChange={e => setMaxLimit(e.target.value)} style={{ flex: 1 }} />
        <input type="number" placeholder="Мин. цена" value={minPrice} onChange={e => setMinPrice(e.target.value)} style={{ flex: 1 }} />
        <input type="number" placeholder="Макс. цена" value={maxPrice} onChange={e => setMaxPrice(e.target.value)} style={{ flex: 1 }} />
        <input type="number" placeholder="Мин. возраст (лет)" value={minAge} onChange={e => setMinAge(e.target.value)} style={{ flex: 1 }} />
        <input type="number" placeholder="Макс. возраст (лет)" value={maxAge} onChange={e => setMaxAge(e.target.value)} style={{ flex: 1 }} />
      </div>

      <main style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
          {filteredCards.map((card, index) => (
            <div key={index} onClick={() => handleSelect(card)} style={{ borderRadius: 12, padding: '1.2rem', backgroundColor: selectedCards.includes(card) ? '#35475d' : '#1A2633', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <strong style={{ fontSize: '1.3rem' }}>{card.bank}</strong><br />
                Штат: {card.state} | Лимит: {formatCurrency(card.limit)} | Возраст: {card.age} | <strong>Дата подачи: {card.submissionDate}</strong>
              </div>
              <div style={{ textAlign: 'right' }}>
                <div style={{ fontSize: '1.3rem', fontWeight: 'bold', color: '#C8B560' }}>{formatCurrency(card.price)}</div>
                <button style={{ backgroundColor: '#C8B560', color: '#2C3E50', padding: '0.4rem 0.8rem', border: 'none', borderRadius: 8, fontWeight: 600 }}>Оставить заявку</button>
              </div>
            </div>
          ))}
        </div>

        {showPopup && (
          <div style={{ position: 'fixed', bottom: 20, left: '50%', transform: 'translateX(-50%)', backgroundColor: '#C8B560', color: '#2C3E50', padding: '1rem 2rem', borderRadius: 8, fontWeight: 'bold', cursor: 'pointer', boxShadow: '0 0 10px #000' }} onClick={handleSubmitRequest}>
            Подтвердить заявки
          </div>
        )}

        {showForm && (
          <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.7)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000 }}>
            <div style={{ backgroundColor: '#1A2633', color: '#fff', padding: '2rem', borderRadius: 16, maxWidth: 500, width: '95%', boxShadow: '0 0 16px #000', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <h2 style={{ color: '#C8B560', fontSize: '1.6rem', fontWeight: 'bold', textAlign: 'center' }}>Введите ваши данные</h2>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <input placeholder="Имя" value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })} style={{ flex: 1, padding: '0.6rem', borderRadius: 6, border: 'none' }} />
                <input placeholder="Фамилия" value={formData.surname} onChange={e => setFormData({ ...formData, surname: e.target.value })} style={{ flex: 1, padding: '0.6rem', borderRadius: 6, border: 'none' }} />
              </div>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <input placeholder="Email" value={formData.email} onChange={e => setFormData({ ...formData, email: e.target.value })} style={{ flex: 1, padding: '0.6rem', borderRadius: 6, border: 'none' }} />
                <input placeholder="Телефон" value={formData.phone} onChange={e => setFormData({ ...formData, phone: e.target.value })} style={{ flex: 1, padding: '0.6rem', borderRadius: 6, border: 'none' }} />
              </div>
              <button onClick={handleFormSubmit} style={{ backgroundColor: '#C8B560', color: '#2C3E50', padding: '0.8rem', fontWeight: 'bold', border: 'none', borderRadius: 8 }}>Отправить заявку</button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
