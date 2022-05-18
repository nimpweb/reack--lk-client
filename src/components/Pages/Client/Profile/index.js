import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { profileActions } from '../../../../store/profile';

export const Profile = () => {
  const { profile } = useSelector((state) => state.profile);
  const dispatch = useDispatch();
  const handleSubmitForm = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    dispatch(profileActions.setProfile(...form));
  };
  return (
    <div className="profile_wrapper">
      <div className="f-container">
        <div className="block-rounded">
          <h1 className="mb10px">Профиль пользователя</h1>
          <form action="/profile" className="row w-100" method="POST" onSubmit={handleSubmitForm}>
            <div className="col-12 col-6">
              <div className="col-12 form-ctrl">
                <label className="form-control-label">Фамилия</label>
                <input
                  type="text"
                  name="f_name"
                  className="form-ctrl-input"
                  value={profile.firstName}
                />
              </div>
              <div className="col-12 form-ctrl">
                <label className="form-control-label">Имя</label>
                <input
                  type="text"
                  name="n_name"
                  className="form-ctrl-input"
                  value={profile.middleName}
                />
              </div>
              <div className="col-12 form-ctrl">
                <label className="form-control-label">Отчество</label>
                <input
                  type="text"
                  name="o_name"
                  className="form-ctrl-input"
                  value={profile.lastName}
                />
              </div>
            </div>

            <div className="col-12 col-6">
              <div className="col-12  form-ctrl">
                <label className="form-ctrl-label">Номер телефона</label>
                <div className="email-verify-block">
                  <input
                    type="text"
                    id=""
                    name="phone"
                    className="form-ctrl-input email-verify-disabled"
                    value=""
                    disabled="disabled"
                  />
                  <button type="button" className="button js-verify-btn">
                    Подтвердить
                  </button>
                </div>
              </div>
              <div className="col-12 form-ctrl">
                <label className="form-control-label">Email</label>
                <input
                  type="email"
                  name="email"
                  className="form-ctrl-input"
                  value="nimpweb@yandex.ru"
                />
              </div>
            </div>

            <hr />
            <div className="col-12 bottom_message_text">
              <ul className="profile-list-message">
                <li className="list-item">
                  Чтобы изменить пароль, необходимо нажать кнопку <strong>Изменить пароль</strong> и
                  указать старый и новый пароль в соответствующие поля
                </li>
                <li className="list-item">
                  Для подтверждения или изменения номера телефона, нажмите кнопку "Подтвердить".
                  Прежде чем получить код подтверждения, убедитесь в правильности ввода номера
                  телефона
                </li>
              </ul>
            </div>

            <div className="container block-submit">
              <button type="button" className="button button-transparent js-change-pwd">
                Изменить пароль
              </button>
              <button type="submit" className="button">
                Сохранить изменения
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
