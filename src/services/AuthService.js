import $api from '../http';

export default class AuthService {
  static async login(dispatch, payload) {
    // dispatch(loginStart());
    // console.log('IN LOGIN');
    // try {
    //   // const response = await $api.post('/auth/login', payload);
    //   // if (response.status === 200 && response.data) {
    //   //   dispatch(loginSuccess(response.data));
    //   // }
    // } catch (error) {
    //   dispatch(loginFailure(error.message));
    // }
  }
  static async register(login, password) {}

  static async logout() {
    localStorage.removeItem(process.env.REACT_APP_LOCAL_STORAGE);
    return $api.post('/auth/logout');
  }
}
