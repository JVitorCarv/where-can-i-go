import LanguageSelector from '../LanguageSelector/LanguageSelector'
import MapChart from '../MapChart/MapChart'
import { MainContainer } from './styles'
import { useEffect, useState } from 'react'
import axios from 'axios'

const Main = () => {
  const [highlighted, setHighlighted] = useState([])
  const [languagesSpoken, setLanguagesSpoken] = useState([])

  const fetchLanguage = async(language) => {
    try {
      const response = await axios.get(`https://restcountries.com/v3.1/lang/${language}?fields=cioc,cca3`)
      const countryList = []
      response.data.forEach(country => {
        countryList.push({
          cioc: country.cioc,
          cca3: country.cca3,
          language: language
        });
      })
      setHighlighted([...highlighted, ...countryList])
    } catch (error) {
      console.error(error);
    }
  }

  const removeLanguage = async(removedLanguage) => {
    const filteredCountries = highlighted.filter(country => country.language != removedLanguage)
    setHighlighted(filteredCountries)
  }

  return (
    <MainContainer>
      <LanguageSelector 
        languagesSpoken={languagesSpoken} 
        setLanguagesSpoken={setLanguagesSpoken}
        fetchLanguage={fetchLanguage}
        removeLanguage={removeLanguage}
      />
      <MapChart highlighted={highlighted}/>
    </MainContainer>
  )
}

export default Main