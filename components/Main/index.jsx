import LanguageSelector from '../LanguageSelector'
import MapChart from '../MapChart'
import { MainContainer } from './styles'
import { useState } from 'react'

const Main = () => {
  const [highlighted, setHighlighted] = useState([])

  return (
    <MainContainer>
      <LanguageSelector 
        highlighted={highlighted}
        setHighlighted={setHighlighted}
      />
      <MapChart highlighted={highlighted}/>
    </MainContainer>
  )
}

export default Main