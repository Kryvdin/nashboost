import React from 'react';

interface ButtonProps {
  onClick?: () => void;
  children: React.ReactNode;
}

export function Button({ onClick, children }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      style={{
        backgroundColor: '#C8B560',
        color: '#2C3E50',
        padding: '10px 20px',
        borderRadius: '12px',
        border: 'none',
        cursor: 'pointer',
        fontWeight: 'bold',
        marginTop: '10px'
      }}
    >
      {children}
    </button>
  );
}
