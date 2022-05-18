import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import thunk from "redux-thunk";
import reduxLogger from "redux-logger";

import rootReducers from "./modules";

// const configureStore = (reducers = {}, preloadedstate = {}, middlewares = []) =>
//   createStore(
//     combineReducers(...rootReducers, ...reducers),
//     preloadedstate,
//     compose(
//       applyMiddleware(...middlewares, thunk, reduxLogger),
//       window.__REDUX_DEVTOOLS_EXTENSION__ &&
//         window.__REDUX_DEVTOOLS_EXTENSION__()
//     )
//   );
const profile = {
  firstName: 'Нестеров',
  middleName: 'Максим',
  lastName: 'Петрович',
  avatar: '',
  personalNumber: '99125632145',

}

const order = {
  number: '123',
  state: 'draft',
  createdAt: new Date(),
  title: 'Технологическое присоединение физического лица мощностью 15кВт',
  userId: 1,
  gpId: null,
  gpUserId: null,

  steps: [
    {id: 1, state: false, stateMessage: 'Данные не заполнены', items: {
      skId: 1, sid: 1, toa: 1, agree: false
    } },
    {id: 2, state: false, stateMessage: '', items: {
      applicantFio: '',
      applicantPhone: '',
      isRepresentativeOfApplicant: false,
      applicantRepresentativeFio: '',
      applicantRepresentativePhone: '',
      applicantRepresentativeDocument: '',
      applicantDocument: 'паспорт',
      applicantDoucmentSerial: '5300',
      applicantDocumentNumber: '781592',
      applicantDocumentDate: new Date('2003-08-23').toDateString(),
      applicantDocumentWhoGive: 'ОВД Промышленного района г.Оренбурга'
    }},
    {id: 3, state: false, stateMessage: '', items: {

    }
    ]
}

export default configureStore;
