import React from 'react'
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/fontawesome-free-solid';
import s from './popupmenu.module.css'

export default function PopupMenu(props) {
  const popupRef = React.useRef();
  const {avatar, title, items} = props;
  const [visiblePopup, setVisiblePopup] = React.useState(false);
 
  const togglePopupMenu = () => {
    setVisiblePopup(!visiblePopup);
  }    

  const handleBodyClick = (event) => {
    if (!event.path.includes(popupRef.current)) {
      setVisiblePopup(false);
    }
    
  }

  React.useEffect(() => {
    document.addEventListener('click',  handleBodyClick);
  }, []);

  return (
    <div className={s.popupMenuOverlay} onClick={() => setVisiblePopup(false)}>
      <div ref={popupRef}>
      <span 
        className="menu-link" 
        onClick={togglePopupMenu}>
          {avatar && (<img className="image-small-rounded" src={avatar} alt=""/>)}
          {title} 
          &nbsp;<FontAwesomeIcon icon= { !visiblePopup ? faChevronDown : faChevronUp } />
      </span>
      { visiblePopup && (
        <ul className={s.menu__dropdownList}>
          { items.map( ({ delimiter, url, title, icon }) => {
            return (
              <>
              {delimiter && (<li key={'d'+url} className="delimiter" />)}
              <li key={url}><Link onClick={togglePopupMenu} to={url} key={url}>{icon && (<FontAwesomeIcon icon={icon} />)} {title}</Link></li>
              </>
            )
          })}
        </ul>
      )}
      </div>
    </div>
  )
}

// { item.delimiter && (<li className="delimiter" />) }