import React, {useEffect, useState, useRef } from 'react'
import './modal.css'

export default function Modal({children, ...props}) {
  const [isClosing, setIsClosing] = useState(props.closing || false);
  const [isClose, setIsClose] = useState(false);
  const title = props.title ? props.title : '';
  const width = props.width || 200;
  const height = props.height || 'fit-content'; 
  const ref = useRef(null);

  const handleCloseClick = ({target, currentTarget}) => {
    if (target === currentTarget) {
      setIsClosing(true);
    }
  }

  const onKeyDown = ({key}) => {
    if (key === 'Escape') {
      setIsClosing(true);
    }
  }

  useEffect(() => {
    setIsClosing(props.closing);
  }, [props.closing])

  useEffect(() => {
    setTimeout(() => {
      if (ref) {ref.current.classList.add('active') }
    }, 10);
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [])



  useEffect(() => {
    if (isClosing) {
      new Promise((resolve, reject) => {
        ref.current.classList.remove('active');
        setTimeout(() => {resolve(setIsClose(true)); }, 600);
      }).then(() => { 
         if (props.onClose) { props.onClose(); }
         setIsClose(true);
      }) 
    }
  }, [isClosing, props.onClose]);

  return (
    <>
      {!isClose && <div ref={ref} className="modalOverlay" onClick={handleCloseClick}>
      <div className="modalContainer" style={{width, height}}>
        {title.length > 0 && <div className="modalHeader">{title}</div>}
        <span className="closeModal" onClick={handleCloseClick}>&times;</span>
        <div className="modalContent">
          {children}
        </div>
      </div>
    </div>}
  </>
  )
}
