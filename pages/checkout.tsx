// 📁 pages/checkout.tsx
import Head from 'next/head';
import Navbar from '../components/Navbar';
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

export default function CardsPage() {
  const [windowWidth, setWindowWidth] = useState(0);
  const [cardsData, setCardsData] = useState<Account[]>([]);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    selectedAccounts: ''
  });

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
        const parsed = data.map((row: any, index: number) => ({
          bank: row['Банк'],
          state: row['Штат'],
          limit: parseInt(row['Лимит'].replace(/[^\d]/g, '')),
          age: row['Возраст'],
          price: parseInt(row['Цена']),
          submissionDate: row['Дата подачи'],
          type: row['Тип'],
          id: index + 1
        }));
        setCardsData(parsed);
      } catch (error) {
        console.error('Ошибка загрузки данных:', error);
      }
    };
    fetchData();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formPayload = new URLSearchParams();
    formPayload.append('Имя', formData.firstName);
    formPayload.append('Фамилия', formData.lastName);
    formPayload.append('Email', formData.email);
    formPayload.append('Телефон', formData.phone);
    formPayload.append('Выбранные аккаунты', formData.selectedAccounts);

    try {
      const response = await fetch('https://script.google.com/macros/s/AKfycbxUVnEFOtmp9HT7JAb1LWzbmsZ7ooJLtJGWYvgnemaK9b5J4vV_SmK6Z4Ka9her2V2Y/exec', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: formPayload.toString()
      });

      if (!response.ok) throw new Error('Network response was not ok');

      alert('Заявка отправлена!');
      setFormData({ firstName: '', lastName: '', email: '', phone: '', selectedAccounts: '' });
    } catch (error) {
      alert('Ошибка при отправке формы. Попробуйте снова.');
    }
  };

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
                <span style={{ color: '#C8B560' }}>
                  Штат: {card.state} | Лимит: {formatCurrency(card.limit)} | Возраст: {card.age} | Дата подачи: {card.submissionDate}
                </span>
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

        <form onSubmit={handleSubmit} className="space-y-4" style={{ marginTop: '3rem', maxWidth: 600 }}>
          <input name="firstName" value={formData.firstName} onChange={handleChange} placeholder="Имя" className="w-full border p-2" />
          <input name="lastName" value={formData.lastName} onChange={handleChange} placeholder="Фамилия" className="w-full border p-2" />
          <input name="email" value={formData.email} onChange={handleChange} placeholder="Email" className="w-full border p-2" />
          <input name="phone" value={formData.phone} onChange={handleChange} placeholder="Телефон" className="w-full border p-2" />
          <textarea name="selectedAccounts" value={formData.selectedAccounts} onChange={handleChange} placeholder="Выбранные аккаунты" className="w-full border p-2" />
          <button type="submit" className="bg-gold text-white py-2 px-4 rounded">Отправить заявку</button>
        </form>
      </main>
    </div>
  );
}
