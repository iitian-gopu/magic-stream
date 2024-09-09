import {useState} from 'react'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import {useNavigate, NavLink, Link} from 'react-router-dom'
import useAuth from '../../hooks/useAuth';
import logo from '../../assets/MagicStreamLogo.png';

const Header = ({handleLogout}) => {
    const navigate = useNavigate();
    const {auth} = useAuth();


    return (
        <Navbar bg="dark" variant='dark' expand="lg" stick="top" className="shadow-sm">
            <Container>
                <Navbar.Brand>
                     <img
                        alt=""
                        src={logo}
                        width="30"
