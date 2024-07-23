import parsePhoneNumber from 'libphonenumber-js';

export const phoneData = (phone: string, country?: any) => {
  return parsePhoneNumber(phone, country);
};

export const navigate = (func: any, screen: string, params?: any) => {
  func?.navigate(screen, params);
};

export const hidePhoneNumber = (phone: string) => {
  const phoneNumberArray = phone?.split('');
  const lastTwoDigitsIndex = phoneNumberArray?.length - 2;
  const lastFourDigitsIndex = lastTwoDigitsIndex - 4;

  for (let i = lastFourDigitsIndex; i < lastTwoDigitsIndex; i++) {
    phoneNumberArray[i] = '*';
  }

  return phoneNumberArray?.join('');
};

export const formatTime = (seconds: number) => {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
};

export const isEmpty = (data: any) => {
  if (data == null || typeof data === 'undefined' || data === '') return true;
  return false;
};
