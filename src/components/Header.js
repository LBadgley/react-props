import React from 'react';

export default function Header() {
  const styles = {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '1em',
    height: '2em'
  };

  return (
    <header style={styles}>
      <img src="https://banner2.kisspng.com/20180517/kww/kisspng-shiba-inu-saluki-akita-puppy-dog-breed-5afd5272d118a8.0540458815265511548565.jpg" style={{ height: '100%' }} />
      <h1 style={{ margin: 0 }}>My doggo</h1>
    </header>
  );
}
