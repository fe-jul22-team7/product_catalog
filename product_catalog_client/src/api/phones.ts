import { Phone } from '../types/Phone';
import { client } from '../utils/fetchClient';

export const getPhones = () => {
  return client.get<Phone[]>('/phones');
};

export const getPhoneID = (phoneId: number) => {
  return client.get<Phone[]>(`/phones?phoneId=${phoneId}`);
};

