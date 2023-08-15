import { LanguageSelectorContainer, SelectLanguageTitle } from "./styles"
import SpokenLanguages from "../LanguageComponents/SpokenLanguages/SpokenLanguages"
import LanguageList from "../LanguageComponents/LanguageList/LanguageList"

const LanguageSelector = ({ fetchLanguage, languagesSpoken, setLanguagesSpoken, removeLanguage }) => {
    const handleLanguageChange = (newLanguage) => {
        if (!languagesSpoken.some(language => language.id === newLanguage.id)) {
            fetchLanguage(newLanguage.id)
            setLanguagesSpoken([...languagesSpoken, newLanguage])
        } else {
            removeLanguage(newLanguage.id)
            setLanguagesSpoken(languagesSpoken.filter(language => language.id !== newLanguage.id))
        }
    }

    return (
        <LanguageSelectorContainer>
            <SelectLanguageTitle>Select your languages</SelectLanguageTitle>
            {languagesSpoken.length > 0 ? (
                <SpokenLanguages
                    languages={languagesSpoken}
                    handleLanguageChange={handleLanguageChange}
                />
            ) : (
                (<p>No languages selected</p>)
            )}
            <LanguageList
                handleLanguageChange={handleLanguageChange}
                languagesSpoken={languagesSpoken}
            />
        </LanguageSelectorContainer>
    )
}

export default LanguageSelector