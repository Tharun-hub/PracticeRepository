import {useState} from 'react'

import Header from './components/Header'
import LandingSection from './components/LandingSection'
import FeaturesSection from './components/FeaturesSection'
import LanguageContext from './context/LanguageContext'
const App = () => {
  const [activeLanguage, setLanguage] = useState('EN')

  const changeLanguage = activeLanguage => {
    setLanguage(activeLanguage)
  }

  return (
    <LanguageContext value={
      {
        activeLanguage, 
        changeLanguage:changeLanguage}
      }>
      <Header />
      <LandingSection />
      <FeaturesSection />
    </LanguageContext>
  )
}

export default App
