import React, { useRef } from 'react'
import s from './fileadd.module.css'
import { AttachFile, Close, TimesOneMobiledata } from '@mui/icons-material';
import Button from './../../../../../../components/ui/Button/index';

const FileAdd = ({ title, description, options }) =>  {
  const [files, setFiles] = React.useState([]);
  const fileRef = useRef(null);

  

  const handleClick = () => {
    fileRef.current.click();
  }

  const handleInputFileChange = (event) => {
    console.log(event.target.files)
    setFiles(prev => {
      return [...prev, ...Array.from(event.target.files)]
    })
    // setFiles(event.target.files);
  }

  return (
    <div className={s.fileAddContainer} >
      <div className={s.fileAddWrapper}>
        <div className={s.fileAddDocument}>
          <input ref={fileRef} className={s.hiddenFileInput} type="file" onChange={handleInputFileChange} multiple />
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
        <div className={s.fileAddButtons}>
          <Button type="button" variant="icon" onClick={handleClick}><AttachFile /></Button>
        </div>
      </div>
      { (files.length > 0) && (
        <div className={s.fileAddList}>
          { files.map((fl, index) => (
            <div key={index} className={s.fileBlock}>
              <div className={s.extension}>PDF</div>
              <div className={s.title}>{fl.name}</div>
              <div className={s.remove}>X</div>
            </div>
          )) }
        </div>
      )}
    </div>
  )
}

export default FileAdd