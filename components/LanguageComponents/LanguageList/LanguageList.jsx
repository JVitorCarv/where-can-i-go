import Output from '../../../public/output.json'
import { LanguageListContainer, LanguageListItem } from './styles'

const LanguageList = ({ handleLanguageChange, languagesSpoken }) => {
    const checkIfSelected = (id) => {
        if (languagesSpoken.some(language => language.id === id)) {
            return true;
        }
        return false;
    }
    return (
        <LanguageListContainer>
            {Output.map(language => (
                <li key={language.id}>
                    <LanguageListItem
                        value={language.full}
                        id={language.id}
                        display={checkIfSelected(language.id)}
                        onClick={() => handleLanguageChange(language)}
                    >
                        {language.full}
                    </LanguageListItem>
                </li>
            ))}
        </LanguageListContainer>
    )
}

export default LanguageList