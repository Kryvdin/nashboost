import React from 'react';
import Link from 'next/link';

export default function HowItWorks() {
  return (
    <div style={{ padding: '80px 40px', fontFamily: 'Arial, sans-serif', color: '#fff', backgroundColor: '#2C3E50', fontSize: '20px', lineHeight: '1.8' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 60 }}>
        <h1 style={{ color: '#C8B560', fontSize: '48px', fontWeight: 'bold' }}>Как работает кредитный буст</h1>
        <div style={{ display: 'flex', gap: 40 }}>
          <Link href="/cards" style={{ color: '#C8B560', fontWeight: 'bold', fontSize: 24, textDecoration: 'underline' }}>Выбрать карты</Link>
          <Link href="/" style={{ color: '#C8B560', fontWeight: 'bold', fontSize: 24, textDecoration: 'underline' }}>На главную</Link>
        </div>
      </div>

      <section style={{ marginBottom: 60 }}>
        <h2 style={{ color: '#C8B560', fontSize: '32px' }}>🔍 Что такое кредитный буст?</h2>
        <p>Временное добавление вас как дополнительного пользователя (AU) на аккаунт с идеальной кредитной историей. Вы получаете: высокий лимит, возрастной аккаунт, 0 просрочек.</p>
      </section>

      <section style={{ marginBottom: 60 }}>
        <h2 style={{ color: '#C8B560', fontSize: '32px' }}>📆 Что значит "дата подачи"?</h2>
        <p>Это день, когда банк передаёт информацию в бюро. <strong>19 число</strong> — пример даты подачи. Отображение в отчёте: через 7–15 дней.</p>
      </section>

      <section style={{ marginBottom: 60 }}>
        <h2 style={{ color: '#C8B560', fontSize: '32px' }}>💡 Что добавляется в отчёт?</h2>
        <ul style={{ paddingLeft: '20px' }}>
          <li>💳 Лимит карты (например, $11,800)</li>
          <li>📈 Возраст аккаунта (например, 9 лет)</li>
          <li>✅ Без просрочек и долгов</li>
        </ul>
      </section>

      <section style={{ marginBottom: 60 }}>
        <h2 style={{ color: '#C8B560', fontSize: '32px' }}>🚫 Условия для получения</h2>
        <ul style={{ paddingLeft: '20px' }}>
          <li>Отсутствие коллекшенов</li>
          <li>Нет просрочек</li>
          <li>Минимум hard inquiries</li>
        </ul>
        <p>Если что-то не подходит — поможем исправить до подачи.</p>
      </section>

      <section style={{ marginBottom: 60 }}>
        <h2 style={{ color: '#C8B560', fontSize: '32px' }}>🔁 Как проходит процесс?</h2>
        <ol style={{ paddingLeft: '20px' }}>
          <li>Вы выбираете 1–3 карты</li>
          <li>Оставляете заявку</li>
          <li>Проверяем вашу кредитную историю</li>
          <li>При необходимости — помогаем с удалением ошибок</li>
          <li>В дату подачи карты добавляются в ваш отчёт</li>
          <li>Через 2–3 недели они отображаются</li>
        </ol>
      </section>

      <section style={{ marginBottom: 60 }}>
        <h2 style={{ color: '#C8B560', fontSize: '32px' }}>📆 Срок добавления</h2>
        <p>Карты активны <strong>2 месяца</strong>. За это время ваш кредитный рейтинг может значительно вырасти.</p>
      </section>

      <section style={{ marginBottom: 60 }}>
        <h2 style={{ color: '#C8B560', fontSize: '32px' }}>🏆 Что вы получаете?</h2>
        <ul style={{ paddingLeft: '20px' }}>
          <li>Рост credit score</li>
          <li>Шанс на автокредит и карты с лимитом</li>
          <li>Быстрое одобрение аренды или покупок</li>
        </ul>
      </section>

      <section>
        <h2 style={{ color: '#C8B560', fontSize: '32px' }}>📞 Что дальше?</h2>
        <p>После заявки специалист свяжется с вами, уточнит детали и подберёт решение. Мы всегда рядом.</p>
      </section>
    </div>
  );
}
