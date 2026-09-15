import ContactsList from '../../components/contacts-list/contacts-list';

function ContactsPage() {
  return (
    <main className="page-content decorated-page">
      <div className="decorated-page__decor" aria-hidden="true">
        <picture>
          <source
            type="image/webp"
            srcSet="img/content/maniac/maniac-bg-size-m.webp, img/content/maniac/maniac-bg-size-m@2x.webp 2x"
          />
          <img
            src="img/content/maniac/maniac-bg-size-m.jpg"
            srcSet="img/content/maniac/maniac-bg-size-m@2x.jpg 2x"
            width={1366}
            height={1959}
            alt=""
          />
        </picture>
      </div>
      <div className="container">
        <div className="page-content__title-wrapper page-content__title-wrapper--underlined">
          <p className="subtitle page-content__subtitle">
            квесты в&nbsp;Санкт-Петербурге
          </p>
          <h1 className="title title--size-m page-content__title">Контакты</h1>
        </div>
        <div className="contacts">
          <ContactsList />
          <div className="contacts__map">
            <div className="map">
              <div className="map__container"/>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default ContactsPage;
