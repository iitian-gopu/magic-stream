import {useEffect} from 'react';
import axios from 'axios';

import useAuth from './useAuth';

const apiUrl = import.meta.env.VITE_API_BASE_URL;

const useAxiosPrivate = () =>{

    const axiosAuth = axios.create({
        baseURL: apiUrl,
        withCredentials: true, // important for HTTP-only cookies
    });


    const {auth,setAuth} = useAuth();

    let isRefreshing = false;
    let failedQueue = [];

    // Helper to process queued requests after token refresh
    const processQueue = (error, response = null) => {
        failedQueue.forEach(prom => {
            if (error) {
            prom.reject(error);
            } else {
            prom.resolve(response);
            }
        });

        failedQueue = [];
    };

     useEffect(() => {

        axiosAuth.interceptors.response.use(
