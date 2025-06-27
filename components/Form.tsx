import { useState } from 'react';

export default function Form() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    selectedAccounts: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const url = 'https://script.google.com/macros/s/AKfycbykRqyGNaNNeUnuv55unX5BP1VknLi9KW7WhHSZpav-_da8xuShSWNVS4gUX2An_6tG/exec';

    const payload = {
      ...formData,
      timestamp: new Date().toLocaleString(),
    };

    try {
      const response = await fetch(url, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      alert('Заявка отправлена!');
      setFormData({ firstName: '', lastName: '', email: '', phone: '', selectedAccounts: '' });
    } catch (error) {
      alert('Ошибка при отправке формы. Попробуйте снова.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input name="firstName" value={formData.firstName} onChange={handleChange} placeholder="Имя" className="w-full border p-2" />
      <input name="lastName" value={formData.lastName} onChange={handleChange} placeholder="Фамилия" className="w-full border p-2" />
      <input name="email" value={formData.email} onChange={handleChange} placeholder="Email" className="w-full border p-2" />
      <input name="phone" value={formData.phone} onChange={handleChange} placeholder="Телефон" className="w-full border p-2" />
      <textarea name="selectedAccounts" value={formData.selectedAccounts} onChange={handleChange} placeholder="Выбранные аккаунты" className="w-full border p-2" />
      <button type="submit" className="bg-gold text-white py-2 px-4 rounded">Отправить заявку</button>
    </form>
  );
}
