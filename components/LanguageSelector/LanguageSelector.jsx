import { LanguageSelectorContainer, SelectLanguageTitle } from "./styles"
import SpokenLanguages from "../LanguageComponents/SpokenLanguages/SpokenLanguages"
import LanguageList from "../LanguageComponents/LanguageList/LanguageList"
import { useState } from "react"
import axios from "axios"

const LanguageSelector = ({ highlighted, setHighlighted }) => {
    const [languagesSpoken, setLanguagesSpoken] = useState([])

    const handleLanguageChange = (newLanguage) => {
        if (!languagesSpoken.some(language => language.id === newLanguage.id)) {
            fetchLanguage(newLanguage.id)
            setLanguagesSpoken([...languagesSpoken, newLanguage])
        } else {
            removeLanguage(newLanguage.id)
            setLanguagesSpoken(languagesSpoken.filter(language => language.id !== newLanguage.id))
        }
    }

    const fetchLanguage = async (language) => {
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

    const removeLanguage = async (removedLanguage) => {
        const filteredCountries = highlighted.filter(country => country.language != removedLanguage)
        setHighlighted(filteredCountries)
    }

    return (
        <LanguageSelectorContainer>
            <SelectLanguageTitle>Select your languages</SelectLanguageTitle>
            <SpokenLanguages
                languages={languagesSpoken}
                handleLanguageChange={handleLanguageChange}
            />
            <LanguageList
                handleLanguageChange={handleLanguageChange}
                languagesSpoken={languagesSpoken}
            />
        </LanguageSelectorContainer>
    )
}

export default LanguageSelector