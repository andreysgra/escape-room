import {MapContainer, Marker, TileLayer} from 'react-leaflet';
import {ATTRIBUTION, ContactsLocation, MapIcon, MapZoom, TILE_LAYER_URL} from '../../const';
import 'leaflet/dist/leaflet.css';
import {Icon} from 'leaflet';

const contactIcon = new Icon({
  iconUrl: MapIcon.UrlCurrent,
  iconSize: MapIcon.Size,
  iconAnchor: MapIcon.Anchor
});

function MapContacts() {
  return (
    <div className="contacts__map">
      <div className="map">
        <MapContainer className="map__container" center={ContactsLocation} zoom={MapZoom.Contacts}>
          <TileLayer url={TILE_LAYER_URL} attribution={ATTRIBUTION} />
          <Marker icon={contactIcon} position={ContactsLocation}></Marker>
        </MapContainer>
      </div>
    </div>
  );
}

export default MapContacts;
