import {useState} from 'react'

import Header from './components/Header'
import LandingSection from './components/LandingSection'
import FeaturesSection from './components/FeaturesSection'

const App = () => {
  const [activeLanguage, setLanguage] = useState('EN')

  const changeLanguage = activeLanguage => {
    setLanguage(activeLanguage)
  }

  return (
    <>
      <Header activeLanguage={activeLanguage} changeLanguage={changeLanguage} />
      <LandingSection activeLanguage={activeLanguage} />
      <FeaturesSection activeLanguage={activeLanguage} />
    </>
  )
}

export default App
