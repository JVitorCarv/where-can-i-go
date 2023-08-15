import { useState } from 'react'
import Output from '../../../public/output.json'
import { LanguageListContainer, LanguageListItem } from './styles'

const LanguageList = ({ handleLanguageChange, languagesSpoken }) => {
    const [search, setSearch] = useState('')

    const checkIfSelected = (id) => languagesSpoken.some(language => language.id === id)

    const handleSearchChange = (e) => setSearch(e.target.value)

    const includesSubstring = (language, search) => language.full.toLowerCase().includes(search.toLowerCase())

    return (
        <LanguageListContainer>
            <input 
                type="text" 
                onChange={handleSearchChange}
                placeholder='Type a language...'
            />
            {Output.filter(language => includesSubstring(language, search)).map(language => (
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