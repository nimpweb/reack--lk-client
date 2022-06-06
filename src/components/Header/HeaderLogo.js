import React from 'react'
import { Link } from 'react-router-dom';

export default function HeaderLogo({ phoneNumber, image, imageTitle }) {
  const imageURL = image ? '/images/companies/' + image : null;
  return (
    <Link to="http://webstudio56.ru" target="_blank">
      <div className="header__logo">
        {imageURL && (
          <img
            src={imageURL}
            className="header__logo-image"
            alt={imageTitle}
            content={imageTitle}
          />
        )}
        {phoneNumber !== '' && (
          <div className="header__phone">
            Телефон горячей линии: <a href="tel:{phoneNumber}">{phoneNumber}</a>
          </div>
        )}
      </div>
    </Link>
  );
}
