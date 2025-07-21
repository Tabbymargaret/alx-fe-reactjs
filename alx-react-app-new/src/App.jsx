import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import WelcomeMessage from '/src/components/WelcomeMessage.jsx'
import Header from '/src/components/Header.jsx'
import MainContent from '/src/components/MainContent.jsx'
import Footer from '/src/components/Footer.jsx'
import UserProfile from '/src/components/UserProfile.jsx'
import Counter from '/src/components/Counter.jsx'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
        <WelcomeMessage />
        <Header />
        <MainContent />
        <Counter />
        <UserProfile name="Alice" age="25" bio="Loves hiking and photography" />
        <Footer />
      </div>
    </>
  );
}

export default App
