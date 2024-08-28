import {createContext, useState,useEffect} from 'react';

const AuthContext = createContext({});

export const AuthProvider = ({children}) => {
    const [auth, setAuth] = useState();
    const [loading, setLoading] = useState(true);
        useEffect(() => {
                try { 
                    const storedUser = localStorage.getItem('user');
