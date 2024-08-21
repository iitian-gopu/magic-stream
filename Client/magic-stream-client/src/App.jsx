import { useState, useEffect } from 'react'
import './App.css'
import Home from './components/home/Home';
import Recommended from './components/recommended/Recommended';
import Review from './components/review/Review';
import Header from './components/header/Header';
import Register from './components/register/Register';
import Login from './components/login/Login';
import Layout from './components/Layout';
import RequiredAuth from './components/RequiredAuth';
import axiosClient from './api/axiosConfig';
import useAuth from './hooks/useAuth';
