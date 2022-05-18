import React from 'react'
import './input.css'

export default function Input({title, ...props}) {
  const [value, setValue] = React.useState(props.value || '');
  const [inputClass, setInputClass] = React.useState(['uiInput']);
  const [errorMessage] = React.useState('');
  const [chars, setChars] = React.useState({ current: 0, total: props.maxChars || 255 });

  const showChars = props.showChars || false;
  const helpMessage = props.helpMessage || '';

  const onChange = props.onChange || null;

  const ref = React.useRef(null);
  React.useEffect(() => {
    (value.length > 0) ? setInputClass(['uiInput', 'filled']) : setInputClass(['uiInput']);
  }, [value]);

  const handleChangeInput = (e) => {
    if (e.target.value.length > chars.total) { return; }
    setChars(prev => ({...prev, current: e.target.value.length}))
    setValue(e.target.value);
    if (e.target.value.length > 0 || value.length > 0) {
      setInputClass(['uiInput', 'filled']);
    } 
    else {
      setInputClass(['uiInput']);
    }
    if (onChange) { onChange(e) };
  }
  return (
    <div className="uiInputContainer">
      <input 
        ref={ref}
        className={inputClass.join(' ')} 
        type="text" 
        {...props} 
        onChange={handleChangeInput}
        value={value}
      />
      <span className="uiTitle" onClick={() => ref.current.focus() }>{title}</span>
      <div className="uiHelperContainer">
        {errorMessage.length 
          ? <div className="errorMessage">{errorMessage}</div> 
          : <div className="helpMessage">{helpMessage}</div> 
        }
        {showChars && <div className="chars">{chars.current} / {chars.total}</div>}
      </div>
    </div>
  )
}
