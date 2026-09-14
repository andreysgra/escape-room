import {Helmet} from 'react-helmet-async';
import Header from '../header/header';
import Footer from '../footer/footer';
import {Outlet, useLocation} from 'react-router-dom';
import {AppRoute, PageTitle} from '../../const';

function Layout() {
  let pageTitle: string;

  const {pathname} = useLocation();
  const path = ('/').concat(pathname.split('/')[1]) as AppRoute;

  switch (path) {
    case AppRoute.Booking:
      pageTitle = PageTitle.Booking;
      break;
    case AppRoute.Contacts:
      pageTitle = PageTitle.Contacts;
      break;
    case AppRoute.Login:
      pageTitle = PageTitle.Login;
      break;
    case AppRoute.Main:
      pageTitle = PageTitle.Main;
      break;
    case AppRoute.MyQuests:
      pageTitle = PageTitle.MyQuests;
      break;
    case AppRoute.Quest.replace('/:id', ''):
      pageTitle = PageTitle.Quest;
      break;
    default:
      pageTitle = PageTitle.Main;
      break;
  }

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
      </Helmet>
      <div className="wrapper">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </>
  );
}

export default Layout;

