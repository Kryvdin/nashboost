import Head from 'next/head';
import Link from 'next/link';
import Navbar from '../components/Navbar';

export default function Home() {
  return (
    <div style={{ backgroundColor: '#2C3E50', minHeight: '100vh', color: '#C8B560', padding: '2rem' }}>
      <Head>
        <title>НАШ БУСТ — Главная</title>
        <meta name="description" content="Подключение к авторизованным кредитным линиям (AU аккаунтам) от крупнейших банков США. Быстрое улучшение кредитной истории." />
      </Head>

      <Navbar />

      <main style={{ maxWidth: 1000, margin: '0 auto', textAlign: 'center', marginTop: '4rem' }}>
        <h1 style={{
          fontSize: '5rem',
          fontWeight: '900',
          color: '#C8B560',
          textShadow: '0 0 20px rgba(200, 181, 96, 0.6)',
          marginBottom: '2rem',
          lineHeight: 1.1,
        }}>
          НАШ БУСТ
        </h1>

        <p style={{
          fontSize: '1.7rem',
          color: '#ffffff',
          lineHeight: 2,
          marginBottom: '3.5rem',
          fontWeight: 300
        }}>
          Подключение к авторизованным кредитным линиям (AU аккаунтам) — один из самых мощных способов поднять ваш кредитный скор. <br />
          Мы предлагаем проверенные аккаунты от крупнейших банков США с высоким лимитом и возрастом. <br />
          Всё официально, легально и без предоплаты.
        </p>

        <Link href="/cards">
          <button style={{
            backgroundColor: '#C8B560',
            color: '#2C3E50',
            padding: '1.2rem 3rem',
            borderRadius: 12,
            fontWeight: 'bold',
            fontSize: '1.4rem',
            cursor: 'pointer',
            border: 'none',
            transition: '0.3s',
            boxShadow: '0 0 15px rgba(200, 181, 96, 0.3)'
          }}>
            Перейти к выбору аккаунтов
          </button>
        </Link>
      </main>
    </div>
  );
}