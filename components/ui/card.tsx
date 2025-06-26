import React from 'react';

export function Card({ children }: { children: React.ReactNode }) {
  return (
    <div style={{
      border: '1px solid #C8B560',
      borderRadius: '16px',
      padding: '16px',
      marginBottom: '12px',
      backgroundColor: '#2C3E50',
      color: 'white'
    }}>
      {children}
    </div>
  );
}

export function CardContent({ children }: { children: React.ReactNode }) {
  return <div>{children}</div>;
}
