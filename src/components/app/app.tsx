import MainPage from '../../pages/main-page/main-page';
import {HelmetProvider} from 'react-helmet-async';

function App() {
  return (
    <HelmetProvider>
      <MainPage />
    </HelmetProvider>
  );
}

export default App;
