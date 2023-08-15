import { SpokenLanguage, SpokenLanguagesContainer } from "./styles"

const SpokenLanguages = ({ languages, handleLanguageChange }) => {
    return (
        <SpokenLanguagesContainer>
            {languages.length ? (
                languages.map(language => (
                    <SpokenLanguage key={language.id} onClick={() => handleLanguageChange(language)}>
                        {language.full}
                    </SpokenLanguage>
                ))
            ) : (
                <p>No language selected</p>
            )}
        </SpokenLanguagesContainer>
  )
}

export default SpokenLanguages