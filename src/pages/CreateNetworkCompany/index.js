import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { Input } from '../../components/ui';

import './create-network-company.scss';

export default function CreateNetworkCompanyPage() {
  const history = useHistory();
  const [company, setCompany] = useState('');
  const [clientName, setClientName] = useState('');
  const [email, setEmail] = useState('');

  return (
    <div className="f-container">
      <div className="block-rounded">
        <div className="create-network-copany">
          <div className="top-panel">
            <button
              className="button button-small button-o"
              title="Выбор вида заявки, описание процесса и необходимых документов"
              onClick={() => {
                history.goBack();
              }}>
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="arrow-left"
                className="svg-inline--fa fa-arrow-left fa-w-14 "
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512">
                <path
                  fill="currentColor"
                  d="M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z"></path>
              </svg>
            </button>
            <h2 className="text-center">Подача заявки на подключение личного кабинета</h2>
          </div>
        </div>

        <div className="content-panel">
          <div className="col-12">
            <Input
              // container={'form-ctrl'}
              title="Наименование Вашей сетевой компании"
              onChange={(event) => setCompany(event.target.value)}
              value={company}
            />
          </div>
          <div className="d-flex">
            <div className="col-6 col-12">
              <Input
                title="Ваше имя"
                onChange={(event) => setClientName(event.target.value)}
                value={clientName}
              />
            </div>
            <div className="col-6 col-12">
              <Input
                title="Ваш email"
                onChange={(event) => setEmail(event.target.value)}
                value={email}
              />
            </div>
          </div>
        </div>

        <div classname="bottom-panel">
          <button className="button">Отправить заявку</button>
        </div>
      </div>
    </div>
  );
}
