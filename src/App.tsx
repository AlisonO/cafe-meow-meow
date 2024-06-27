import catLogo from './assets/cat.svg'
import coffeeLogo from './assets/coffee.svg'
import './App.css'

function App() {

  return (
    <>
      <div>
          <img src={coffeeLogo} className="logo coffee-logo" alt="coffee" />
          <img src={catLogo} className="logo cat-logo" alt="cat" />
      </div>
      <h1>Meow Meow Cafe</h1>
    </>
  )
}

export default App
