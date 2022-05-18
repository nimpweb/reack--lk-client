import React from 'react'

export default function HeaderLogo({ phoneNumber, image, imageTitle }) {
  const imageURL = (image) ? '/images/companies/'+image : null;
  return (
    <div className="header__logo">
      {imageURL && (<img src={imageURL} className="header__logo-image" alt={imageTitle} content={ imageTitle } />)}
      { phoneNumber !== '' &&  (<div className="header__phone">Телефон горячей линии: <a href="tel:{phoneNumber}">{phoneNumber}</a></div>)}
    </div>
  )
}
