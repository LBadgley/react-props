import React from 'react';
import Dog from './Dog';
import Header from './Header';


export default function App() {
  console.log('that is my dog, maaaan');
  return (
    <>
      <Header />
      <Dog name="Ruby" age="2" weight="7.5 lbs"/>
    </>
  );
}
