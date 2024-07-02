import { useEffect, useState } from 'react';
import catLogo from './assets/cat.svg'
import coffeeLogo from './assets/coffee.svg'
import './App.css'

function App() {
  const [menu, setMenu] = useState<String>('');

  useEffect(() => {
    const getMenu = async () => {
        const resp = await fetch(`/api/menu`);
        const postResp = await resp.json();
        setMenu(postResp);
    };

    getMenu();
}, []);

  return (
    <>
      <div>
          <img src={coffeeLogo} className="logo coffee-logo" alt="coffee" />
          <img src={catLogo} className="logo cat-logo" alt="cat" />
      </div>
      <h1>Cafe Meow Meow</h1>
      <p>{menu}</p>
    </>
  )
}

export default App
