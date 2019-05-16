import React from 'react';
import Color from './Color';

export default function App() {
  const name = 'Ruby';
  const rgb = {
    red: 168,
    green: 61,
    blue: 88
  };

  return <Color name={name} rgb={rgb} />;
}
