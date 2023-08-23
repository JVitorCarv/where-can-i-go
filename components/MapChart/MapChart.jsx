import {
  ComposableMap,
  Geographies,
  ZoomableGroup
} from "react-simple-maps";
import { StyledGeography } from "./styles";
import { Container, MapContainer } from "./styles";
import { useState } from "react";
import CountryName from "../CountryName/CountryName";

const geoUrl = "/features.json";

const MapChart = ({ highlighted }) => {
  const [displayCountryName, setDisplayCountryName] = useState(false)
  const [countryName, setCountryName] = useState('')

  const checkCountry = (country, geo) => country.cioc === geo.id || country.cca3 === geo.id
  
  const handleMouseOver = (geoName) => {
    setDisplayCountryName(true)
    setCountryName(geoName)
    console.log(geoName)
  }

  const handleMouseOut = (geoName) => {
    setDisplayCountryName(false)
    setCountryName('')
    console.log(`leaving ${geoName}`)
  }
  
  return (
    <Container>
      <CountryName name={countryName}/>
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
                  const isHighlighted = highlighted.some(country => checkCountry(country, geo))
                  return (
                    <StyledGeography
                      key={geo.rsmKey}
                      geography={geo}
                      ishighlighted={isHighlighted}
                      onMouseOver={() => handleMouseOver(geo.properties.name)}
                      onMouseOut={() => handleMouseOut(geo.properties.name)}
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
