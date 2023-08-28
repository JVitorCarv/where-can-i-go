import { SpokenLanguage, SpokenLanguagesContainer, Warning } from "./styles"

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
                <Warning>No language selected</Warning>
            )}
        </SpokenLanguagesContainer>
  )
}

export default SpokenLanguages