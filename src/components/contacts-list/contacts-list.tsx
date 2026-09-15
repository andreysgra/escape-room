function ContactsList() {
  return (
    <dl className="contacts__list">
      <div className="contacts__item">
        <dt className="contacts__dt">Адрес</dt>
        <dd className="contacts__dd">
          <address className="contacts__address">
            Санкт-Петербург,
            <br/> Набережная реки Карповка, д 5П
          </address>
        </dd>
      </div>
      <div className="contacts__item">
        <dt className="contacts__dt">Режим работы</dt>
        <dd className="contacts__dd">
          Ежедневно, с&nbsp;10:00 до&nbsp;22:00
        </dd>
      </div>
      <div className="contacts__item">
        <dt className="contacts__dt">Телефон</dt>
        <dd className="contacts__dd">
          <a className="link" href="tel:88003335599">
            8 (000) 111-11-11
          </a>
        </dd>
      </div>
      <div className="contacts__item">
        <dt className="contacts__dt">E–mail</dt>
        <dd className="contacts__dd">
          <a className="link" href="mailto:info@escape-room.ru">
            info@escape-room.ru
          </a>
        </dd>
      </div>
    </dl>
  );
}

export default ContactsList;
