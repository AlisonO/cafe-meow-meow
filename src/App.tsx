import { useEffect, useState } from 'react';
import catLogo from './assets/cat.svg'
import coffeeLogo from './assets/coffee.svg'
import './App.css'

function App() {
  const [menu, setMenu] = useState("");

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
      <p>{JSON.stringify(menu)}</p>
    </>
  )
}

export default App
