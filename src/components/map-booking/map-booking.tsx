import {useAppSelector} from '../../hooks/use-app-selector';
import {getBookings, getCurrentBooking} from '../../store/booking/selectors';
import {TLocation} from '../../types/location';
import {MapContainer, Marker, TileLayer, Tooltip} from 'react-leaflet';
import {ATTRIBUTION, ContactsLocation, MAP_BOOKING_ZOOM, MapIcon, TILE_LAYER_URL} from '../../const';
import {Icon} from 'leaflet';
import {useAppDispatch} from '../../hooks/use-app-dispatch';
import {TBooking} from '../../types/booking';
import {setCurrentBooking} from '../../store/booking/slice';

const defaultIcon = new Icon({
  iconUrl: MapIcon.UrlDefault,
  iconSize: MapIcon.Size,
  iconAnchor: MapIcon.Anchor
});

const currentIcon = new Icon({
  iconUrl: MapIcon.UrlCurrent,
  iconSize: MapIcon.Size,
  iconAnchor: MapIcon.Anchor
});

function MapBooking() {
  const currentBooking = useAppSelector(getCurrentBooking);
  const bookings = useAppSelector(getBookings);

  const {address} = currentBooking?.location as TLocation;

  const dispatch = useAppDispatch();

  const handleMarkerClick = (booking: TBooking): void => {
    dispatch(setCurrentBooking(booking));
  };

  return (
    <div className="booking-map">
      <div className="map">
        <MapContainer className="map__container" center={ContactsLocation} zoom={MAP_BOOKING_ZOOM}>
          <TileLayer url={TILE_LAYER_URL} attribution={ATTRIBUTION} />
          {/* В некоторых случаях сервер генерирует одинаковые координаты места проведения квеста, что вызывает */}
          {/* перекрытие активного маркера неактивным. Для обхода этой ситуации используется метод reverse().   */}
          {[...bookings].reverse().map((booking) => (
            <Marker
              key={booking.id}
              icon={currentBooking && booking.id === currentBooking.id ? currentIcon : defaultIcon}
              position={booking.location.coords}
              eventHandlers={{click: () => handleMarkerClick(booking)}}
            >
              <Tooltip>{booking.location.address}</Tooltip>
            </Marker>
          ))}
        </MapContainer>
      </div>
      <p className="booking-map__address">Вы&nbsp;выбрали: {address}</p>
    </div>
  );
}

export default MapBooking;
