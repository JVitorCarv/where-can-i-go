import LanguageSelector from '../LanguageSelector/LanguageSelector'
import MapChart from '../MapChart/MapChart'
import { MainContainer } from './styles'
import { useState } from 'react'
import axios from 'axios'

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