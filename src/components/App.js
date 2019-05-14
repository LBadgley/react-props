import React from 'react';
import Color from './Color';

export default function App() {
  const name = 'Arsenic';
  const rgb = {
    red: 64,
    green: 61,
    blue: 88
  };

  return <Color name={name} rgb={rgb} />;
}
