import { Box, Button, Container, ThemeProvider, Typography } from '@mui/material'
import React from 'react'

import { theme } from '../themes/Theme'

import introVideo from '../assets/images/Techfest_intro_1.mp4'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretRight } from '@fortawesome/free-solid-svg-icons'
// import banner from '../../assets/images/Facebook Cover 2.1.png'
// import techFestLogo from '../../assets/images/logo.png'  

const HomePage = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box className="home-page" sx={{ mb: 3 }}>
        <Box className="hero-section" sx={{ height: { lg: "80vh", xs: "60vh" } }} >
          <video autoPlay muted loop className='bg-video'>
            <source src={introVideo} type="video/mp4" />
          </video>
          {/* <img src={techFestLogo} alt='Banner' className='bg-video'/>  */}
          <Box className="overlay">
          </Box>
          <Container maxWidth="xl" >
            <Box sx={{ display: 'flex', alignItems: "baseline", flexDirection: "column", justifyContent: "start", m: 0 }} className="action-area">
              <Typography variant="title" color={theme.palette.white.light} sx={{ fontSize: { md: "5rem", xs: "2rem" }, lineHeight: { md: "5rem", xs: 1 }, mb: 3, fontWeight: "bold", wordWrap: "break-word" }}>
                Grab your <br /> opportunity now
              </Typography>
              <Typography variant='subtitle' sx={{ fontSize: { md: "2rem", xs: "1rem" }, fontFamily: theme.typography.VarelaRoundFont, textTransform: "uppercase", color: "white.light", letterSpacing: { md: "5px", xs: "1px" }, mb: 3, wordWrap: "break-word", }}>
                The Perfect Tech
                <br />
                EVENT FOR YOUTHS & TECH enthusiast
              </Typography>
              <Button variant='action' className='hero-action-btn'>
                Enquiry Now
                <FontAwesomeIcon icon={faCaretRight} className='btn-icon' />
              </Button>
            </Box>
          </Container>
        </Box>
        <Box className="about-section">
          <Container maxWidth="xl">
            <Typography variant="title" sx={{ color: "primary.main" }}>
              About Us
            </Typography>
          </Container>
        </Box>
      </Box >
    </ThemeProvider >
  )
}

export default HomePage