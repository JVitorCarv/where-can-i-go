import {
  ComposableMap,
  Geographies,
  ZoomableGroup
} from "react-simple-maps";
import { StyledGeography } from "./styles";
import { Container, MapContainer } from "./styles";
import { useState } from "react";
import CountryName from "../CountryName";

const geoUrl = `${import.meta.env.BASE_URL}features.json`;;

const MapChart = ({ highlighted }) => {
  const [countryInfo, setCountryInfo] = useState({})

  const checkCountry = (country, geo) => country.cioc === geo.id || country.cca3 === geo.id
  
  const checkIfHighlighted = (geo) => highlighted.some(country => checkCountry(country, geo))
  
  const handleMouseOver = (geo) => {
    let languages = [] 
    if (checkIfHighlighted(geo)) {
      languages = highlighted.filter(country => checkCountry(country, geo))
                             .map(country => country.fullLanguage)
    }
    setCountryInfo({
      name: geo.properties.name,
      languages: languages
    })
  }

  const handleMouseOut = () => setCountryInfo({})
  
  return (
    <Container>
      <CountryName countryInfo={countryInfo}/>
      <MapContainer>
        <ComposableMap
          width={900}
          height={900}
          projection="geoMercator"
        >
          <ZoomableGroup
            center={[0, 400]}
            minZoom={1}
            maxZoom={10}
            translateExtent={[[-30, -300], [930, 930]]}
          >
            <Geographies geography={geoUrl} stroke="#FFF" strokeWidth={0.5}>
              {({ geographies }) =>
                geographies.map((geo) => {
                  const isHighlighted = checkIfHighlighted(geo)
                  return (
                    <StyledGeography
                      key={geo.rsmKey}
                      geography={geo}
                      ishighlighted={isHighlighted}
                      onMouseOver={() => handleMouseOver(geo)}
                      onMouseOut={() => handleMouseOut(geo)}
                    />
                  );
                })
              }
            </Geographies>
          </ZoomableGroup>
        </ComposableMap>
      </MapContainer>
    </Container>
  );
};

export default MapChart;
