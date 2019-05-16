import React from 'react';
import Dog from './Dog';
import Header from './Header';


export default function App() {
  return (
    <>
      <Header />
      <Dog name="Ruby" age="2" weight="7.5 lbs"/>
    </>
  );
}
