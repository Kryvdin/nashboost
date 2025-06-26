import { useState } from 'react';
import accounts from './accounts';

const cards = accounts.slice(300); // последние 31 карта

export default function CardsPage4() {
  return (
    <div>
      {cards.map((account) => (
        <div key={account.id}>
          <p>{account.bank} – ${account.price}</p>
        </div>
      ))}
    </div>
  );
}
