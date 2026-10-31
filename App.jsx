import { PayPalNavbar } from './components/Navbar/PayPalNavbar'
import { PayPalHero } from './components/Hero/PayPalHero'
import './App.css'

function App() {
  return (
    <div className="app-root">
      <PayPalNavbar />
      <main className="page-content">
        <PayPalHero />
      </main>
    </div>
  )
}

export default App
