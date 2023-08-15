import {
  ComposableMap,
  Geographies,
  ZoomableGroup
} from "react-simple-maps";
import { StyledGeography } from "./styles";
import { Container, MapContainer } from "./styles";

const geoUrl = "/features.json";

const MapChart = ({ highlighted }) => {
  const checkCountry = (country, geo) => {
    if (country.cioc === geo.id || country.cca3 === geo.id) {
      return true;
    }
    return false;
  }
  return (
    <Container>
      <MapContainer>
        <ComposableMap
          width={800}
          height={800}
          projection="geoMercator"
        >
          <ZoomableGroup
            center={[0, 400]}
            minZoom={0}
            maxZoom={10}
            translateExtent={[[-300], [999, 800]]}
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
                      onClick={() => console.log(geo.properties.name)}
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
