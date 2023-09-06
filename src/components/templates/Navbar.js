import React from 'react'

// logo import 
import Logo from '../../assets/images/logo.png'
import { Navigations } from '../../details/Details'
import { AppBar, Box, Button, Container, Link } from '@mui/material'


// 



const Navbar = () => {
    const id = 1
    const changeId = (v) => {
        console.log(v)
    }
    return (
        <>
            {/* <nav>
                <div className='logo-size'>
                    <img src={Logo} alt="Sagarmatha Tech-Fest 2023 logo." />
                </div>
                <div className='navigations'>
                    <ul>
                        {Navigations.map(nav => {
                            return (
                                <li key={nav.id} className={nav.id === id ? "active" : null} onClick={changeId(nav.id)}>
                                    <a href={nav.href}>
                                        {nav.title}
                                    </a>
                                </li>
                            )
                        })}
                    </ul>
                </div>
                <div>
                    <button type="" className='action-btn'>Register</button>
                </div>
            </nav> */}

            <AppBar position="static" className='nav rm-bg' elevation={false}>
                <Container maxWidth="xl" fixed>
                    <Box className="flex">
                        <Link href="/" className="logo-img">
                            <img src={Logo} alt="Sagarmatha Tech-Fest 2023 Logo" />
                        </Link>
                        <Box className="nav-list">
                            <ul className='flex '>
                                {
                                    Navigations.map(nav => {
                                        return (
                                            <li key={nav.id} className={nav.id === id ? "list active" : "list"}>
                                                <a href={nav.href}>
                                                    {nav.title}
                                                </a>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </Box>
                        <Button className='btn action-btn' href='/register'>
                            Register
                        </Button>
                    </Box>
                </Container>
            </AppBar>
        </>
    )
}

export default Navbar