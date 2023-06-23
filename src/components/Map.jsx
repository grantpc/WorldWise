import { useNavigate, useSearchParams } from 'react-router-dom';
import styles from './Map.module.css';

function Map() {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  const lat = searchParams.get('lat');
  const lng = searchParams.get('lng');

  return (
    <div className={styles.mapContainer} onClick={() => navigate('form')}>
      <h1>Map</h1>
      <p>
        Position: Lat: {lat} Lng: {lng}
      </p>
      <button onClick={() => setSearchParams({ lat: 23, lng: 55 })}>
        Change position
      </button>
    </div>
  );
}

export default Map;
