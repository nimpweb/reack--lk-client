import jwt from 'jsonwebtoken';

export const localUser = () => {
  const token = localStorage.getItem(process.env.REACT_APP_LOCAL_STORAGE);
  if (!token) {
    return null;
  }
  return jwt.decode(token);
};

export const redirectLinkOnAuth = () => {
  const user = localUser();
  if (user) {
    if (user.role === 1) {
      return '/profile';
    }
    if ([2, 4].includes(user.role)) {
      return '/monitor';
    }
    if ([3].includes(user.role)) {
      return '/order/list';
    }
  }
  return '/auth';
};


export const objectAsArray = (obj) => {
  let array = new Array();
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      array.push({ [key]: obj[key] });
    }
  }
  return array;
};