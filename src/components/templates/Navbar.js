import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { AppBar, Box, Button, Container, List, ListItem, ThemeProvider } from '@mui/material'


// logo import 
import Logo from '../../assets/images/logo.png'
import { theme } from '../../themes/Theme'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'



// 



const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);



    const clicked = () => {
        setIsOpen(!isOpen)
    }

    useEffect(() => {
        isOpen ?
            document.getElementById('navigation').classList.add('nav-open')
            :
            document.getElementById('navigation').classList.remove('nav-open')
    }, [isOpen])


    return (
        <ThemeProvider theme={theme}>
            <AppBar position="sticky" sx={{ backgroundColor: "white.light", color: "black.main", }} className='lg-screen'>
                <Container maxWidth="xl">
                    <Box sx={{ py: 1 }}>
                        <Box className="flex">
                            <Box className="logo-img" sx={{margin: "0 auto 0 0"}}>
                                <Link to="/" >
                                    <img src={Logo} alt="Sagarmatha Tech-Fest 2023 Logo" />
                                </Link>
                            </Box>
                            <Box className="flex" sx={{ display: { md: "block", xs: "none" }, justifyContent: "end", margin: "0", width:"80%" }}>
                                <Box className="nav-list">
                                    <List sx={{ display: "flex", flexDirection: "row" }}>
                                        <ListItem>
                                            <Link to="/" className="nav-link">Home</Link>
                                        </ListItem>
                                        <ListItem>
                                            <Link to="/about" className="nav-link">About</Link>
                                        </ListItem>
                                        <ListItem>
                                            <Link to="/preEvent" className="nav-link">Teams</Link>
                                        </ListItem>
                                        <ListItem>
                                            <Link to="/exhbitionSchedule" className="nav-link">Schedules</Link>
                                        </ListItem>
                                        <ListItem>
                                            <Link to="/contact" className="nav-link">Contact</Link>
                                        </ListItem>
                                        <ListItem>
                                            <Link to="/workshops" className="nav-link">Workshops</Link>
                                        </ListItem>
                                        <ListItem>
                                            <Button variant='action_outline' href='/register'>
                                                Register
                                            </Button>
                                        </ListItem>
                                    </List>
                                </Box>
                            </Box>
                            <Button variant="contained" onClick={clicked} sx={{ display: { md: "none", xs: "block" } }}>
                                {
                                    isOpen ? <FontAwesomeIcon icon={faXmark} /> : <FontAwesomeIcon icon={faBars} />
                                }
                            </Button>
                        </Box>
                        {/* {menuButton} */}
                        <Box className="sm-nav-list" id="navigation" >
                            <List sx={{ display: "flex", flexDirection: "column", minWidth: "100%" }}>
                                <ListItem>
                                    <Link to="/" className="nav-link">Home</Link>
                                </ListItem>
                                <ListItem>
                                    <Link to="/about" className="nav-link">About</Link>
                                </ListItem>
                                <ListItem>
                                    <Link to="/preEvent" className="nav-link">Teams</Link>
                                </ListItem>
                                <ListItem>
                                    <Link to="/exhbitionSchedule" className="nav-link">Schedules</Link>
                                </ListItem>
                                <ListItem>
                                    <Link to="/contact" className="nav-link">Contact</Link>
                                </ListItem>
                                <ListItem>
                                    <Link to="/workshops" className="nav-link">Workshops</Link>
                                </ListItem>
                                <ListItem sx={{ display: "flex", justifyContent: "center" }}>
                                    <Button variant='action_outline' href='/register'>
                                        Register
                                    </Button>
                                </ListItem>
                            </List>

                        </Box>
                    </Box>
                </Container>
            </AppBar>
        </ThemeProvider>
    )
}

export default Navbar