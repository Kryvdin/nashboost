import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <div style={{ backgroundColor: '#2C3E50', minHeight: '100vh', color: '#C8B560', padding: '2rem' }}>
      <Head>
        <title>НАШ БУСТ — Главная</title>
      </Head>

      <div style={{ textAlign: 'center', marginTop: '2rem', marginBottom: '3rem' }}>
        <h1 style={{ fontSize: '6rem', fontWeight: 'bold', letterSpacing: '0.15em', marginBottom: '1rem' }}>
          НАШ БУСТ
        </h1>
      </div>

      <p style={{ fontSize: '1.4rem', color: '#fff', maxWidth: 1000, margin: '0 auto', lineHeight: 1.6 }}>
        Подключение к авторизованным кредитным линиям (AU аккаунтам) — это один из самых эффективных способов
        резко поднять ваш кредитный скор. Мы предлагаем доступ к проверенным кредитным линиям от крупнейших банков США.
        Это легально, быстро и мощно: ваш кредитный отчёт обновится, и вы получите высокий возраст аккаунта, лимит
        и своевременные платежи. Всё это повысит ваши шансы на одобрение крупных займов и кредитных карт.
        Оплата — только после подтверждения. Выбирайте, подключайтесь и начинайте новый финансовый уровень.
      </p>

      <div style={{ textAlign: 'center', marginTop: '4rem' }}>
        <Link href="/cards">
          <button style={{
            backgroundColor: '#C8B560',
            color: '#2C3E50',
            padding: '1rem 2rem',
            borderRadius: 8,
            fontWeight: 'bold',
            fontSize: '1.3rem',
            cursor: 'pointer',
            border: 'none'
          }}>
            Перейти к выбору аккаунтов
          </button>
        </Link>
      </div>
    </div>
  );
}
