import React from 'react'
import Navbar from '../templates/Navbar'
import Footer from '../templates/Footer'
import { Outlet } from 'react-router-dom'

const Template = () => {
    return (
        <>
            <Navbar />
            <Outlet />
            <Footer />
        </>
    )
}

export default Template
