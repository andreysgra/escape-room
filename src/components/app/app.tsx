import MainPage from '../../pages/main-page/main-page';
import {HelmetProvider} from 'react-helmet-async';
import HistoryRouter from '../history-router/history-router';
import browserHistory from '../../services/browser-history';
import {Route, Routes} from 'react-router-dom';
import {AppRoute} from '../../const';
import Layout from '../layout/layout';
import PrivateRoute from '../private-route/private-route';
import {AuthorizationStatus} from '../../services/api/const';
import BookingPage from '../../pages/booking-page/booking-page';
import ContactsPage from '../../pages/contacts-page/contacts-page';
import LoginPage from '../../pages/login-page/login-page';
import MyQuestsPage from '../../pages/my-quests-page/my-quests-page';
import QuestPage from '../../pages/quest-page/quest-page';
import NotFoundPage from '../../pages/not-found-page/not-found-page';

function App() {
  return (
    <HelmetProvider>
      <HistoryRouter history={browserHistory}>
        <Routes>
          <Route
            path={AppRoute.Main}
            element={<Layout />}
          >
            <Route
              index
              element={<MainPage />}
            />
            <Route
              path={AppRoute.Booking}
              element={
                <PrivateRoute restrictedFor={AuthorizationStatus.NoAuth} redirectedTo={AppRoute.Login}>
                  <BookingPage />
                </PrivateRoute>
              }
            />
            <Route
              path={AppRoute.Contacts}
              element={<ContactsPage />}
            />
            <Route
              path={AppRoute.Login}
              element={
                <PrivateRoute restrictedFor={AuthorizationStatus.Auth} redirectedTo={AppRoute.Main}>
                  <LoginPage />
                </PrivateRoute>
              }
            />
            <Route
              path={AppRoute.MyQuests}
              element={
                <PrivateRoute restrictedFor={AuthorizationStatus.NoAuth} redirectedTo={AppRoute.Login}>
                  <MyQuestsPage />
                </PrivateRoute>
              }
            />
            <Route
              path={AppRoute.Quest}
              element={<QuestPage />}
            />
            <Route
              path={AppRoute.NotFound}
              element={<NotFoundPage />}
            />
          </Route>
        </Routes>
      </HistoryRouter>
    </HelmetProvider>
  );
}

export default App;
