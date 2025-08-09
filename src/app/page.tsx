"use client";
import React, { useState } from 'react';

const HomePage = () => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    console.log(inputValue);
  };

  return (
    <div style={{ padding: '20px', background: '#000', color: '#fff' }}>
      <h1>NEXT.JS Form Example</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={handleChange}
          placeholder="Ketik sesuatu..."
          style={{ padding: '10px', width: '100%', marginBottom: '10px' }}
        />
        <button type="submit" style={{ padding: '10px', background: '#0070f3', color: '#fff' }}>
          Kirim
        </button>
      </form>
      <h2>Input Anda:</h2>
      <p>{inputValue}</p>
    </div>
  );
};

export default HomePage;
