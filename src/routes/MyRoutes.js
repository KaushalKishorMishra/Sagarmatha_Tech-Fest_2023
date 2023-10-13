import React from 'react'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Template from '../components/pages/Template'
import HomePage from '../components/pages/HomePage'
import AboutPage from '../components/pages/AboutPage'

const MyRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path='' element={<Template />} >
                    <Route path='/' element={<HomePage />} />
                    <Route path='/about' element={<AboutPage />} />
                </Route>
            </Routes>
        </Router>
    )
}

export default MyRoutes
