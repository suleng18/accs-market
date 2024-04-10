import { IParams, IPost } from '@/types';
import axios from 'axios';

const BASE_URL = 'https://jsonplaceholder.typicode.com/';

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 30000,
  headers: { 'Content-Type': 'application/json;charset=utf-8' },
});

export const getPosts = async (params: IParams) => {
  try {
    const res = await axiosInstance.get<IPost[]>('posts', { params });
    return res.data;
  } catch (error) {
    throw Error('Error');
  }
};

export const getDetailPost = async (id: string) => {
  try {
    const res = await axiosInstance.get<IPost>(`posts/${id}`);
    return res.data;
  } catch (error) {
    throw Error('Error');
  }
};
