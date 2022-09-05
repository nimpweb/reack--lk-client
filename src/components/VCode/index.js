import React from 'react'
import { faArrowRight } from '@fortawesome/fontawesome-free-solid'
import './vcode.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Loader from '../Loader/Loader';

export default function VCode(props) {
  const [isLoading, setIsLoading] = React.useState(false);
  const { validCode } = props;
  const [errorMessage, setErrorMessage] = React.useState('');
  const [codes, setCodes] = React.useState(['', '', '', '']);
  const isButtonDisabled = codes.some((c) => !c);

  const handleInputChange = (event) => {
    const index = Number(event.target.dataset.id);
    const value = event.target.value;

    setCodes((prev) => {
      const newArr = [...prev];
      newArr[index] = value;
      return newArr;
    });

    if (value && event.target.nextElementSibling) {
      event.target.nextElementSibling.focus();
    }
  };

  const putErrorMessage = (message) => {
    setErrorMessage(message);
    setTimeout(() => {
      setCodes(['', '', '', '']);
      setErrorMessage('');
    }, 2000);
  };

  const onSubmit = async () => {
    const code = codes.join('');
    try {
      if (validCode === code) {
        setIsLoading(true);
      } else {
        putErrorMessage('Код введен не верно!');
      }
    } catch (err) {
      putErrorMessage('Ошибка получения кода');
    }
  };

  return (
    <div className="f-container">
      <div className="vcode-container">
        <div className="d-flex d-flex-cc">
          <img src="/images/code-block.svg" alt="" />
        </div>
        <h3 className="text-center mt10px">Введите код активации</h3>

        <div className="vcode-block">
          {isLoading ? (
            <div className="text-center">
              <Loader visible={true} content={<p className="text-center">Ждите... Активация...</p>}>
                Проверка связи
              </Loader>
            </div>
          ) : (
            <>
              <div className="vcode-inputs">
                <input
                  type="tel"
                  onChange={handleInputChange}
                  data-id={0}
                  placeholder="x"
                  maxLength={1}
                  value={codes[0]}
                />
                <input
                  type="tel"
                  onChange={handleInputChange}
                  data-id={1}
                  placeholder="x"
                  maxLength={1}
                  value={codes[1]}
                />
                <input
                  type="tel"
                  onChange={handleInputChange}
                  data-id={2}
                  placeholder="x"
                  maxLength={1}
                  value={codes[2]}
                />
                <input
                  type="tel"
                  onChange={handleInputChange}
                  data-id={3}
                  placeholder="x"
                  maxLength={1}
                  value={codes[3]}
                />
              </div>
              <h5 className="vcode-error">{errorMessage}</h5>
              <div className="vcode-button-container">
                <button className="button" onClick={onSubmit} disabled={isButtonDisabled}>
                  Подтвердить <FontAwesomeIcon icon={faArrowRight} />
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
