import { SpokenLanguage, SpokenLanguagesContainer } from "./styles"

const SpokenLanguages = ({ languages, handleLanguageChange }) => {
    return (
        <SpokenLanguagesContainer>
            {languages && languages.map(language => (
                <SpokenLanguage key={language.id} onClick={() => handleLanguageChange(language)}>
                    {language.full}
                </SpokenLanguage>
            ))}
        </SpokenLanguagesContainer>
  )
}

export default SpokenLanguages