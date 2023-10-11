import { Box, Button, Container, ThemeProvider, Typography } from '@mui/material'
import React from 'react'
import TypeIt from "typeit-react";
import { theme } from '../../themes/Theme'

import introVideo from '../../assets/images/Techfest_intro_1.mp4'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretRight } from '@fortawesome/free-solid-svg-icons'

const HomePage = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box className="home-page" sx={{ mb: 3 }}>

        {/* hero section start */}
        <Box className="hero-section" sx={{ height: { lg: "80vh", xs: "60vh" } }} id="hero" >
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
              {/* <Typography variant='subtitle' sx={{ fontSize: { md: "2rem", xs: "1rem" }, fontFamily: theme.typography.VarelaRoundFont, textTransform: "uppercase", color: "white.light", letterSpacing: { md: "5px", xs: "1px" }, mb: 3, wordWrap: "break-word", }}>
                The Perfect Tech
                <br />
                Event For Youths & TECH Enthusiast
              </Typography> */}
              <Box sx={{ fontSize: { md: "3rem", xs: "1.3rem" }, fontFamily: theme.typography.AndikaFont, color: "white.light", letterSpacing: { md: "3px", xs: "1px" }, mb: 3, mx: 0, wordWrap: "break-word", lineHeight: 1.2, fontVariant: "small-caps" }}>
                <TypeIt
                  getBeforeInit={(instance) => {
                    instance.type("Tha", { delay: 500 })
                      .delete(1)
                      .type("e")
                      .move(null, { to: "END" })
                      .type(" Perfevt", { delay: 300 })
                      .pause(300)
                      .delete(2)
                      .type("ct Tch")
                      .move(-2)
                      .type("e")
                      .move(null, { to: "END" })
                      .break({ delay: 500 })
                      .type(" Event for Youths & Tech Enthusiast ")
                      .pause(500)
                      .go();
                    return instance;
                  }}
                />
              </Box>
              <Button variant='action' className='hero-action-btn'>
                Enquiry Now
                <FontAwesomeIcon icon={faCaretRight} className='btn-icon' />
              </Button>
            </Box>
          </Container>
        </Box>
        {/* hero section ends */}

        {/* event sponsors starts */}
        <Box className="event-sponsors" sx={{ pb: 3 }}>
          <Container maxWidth="xl">
            <Box sx={{ my: 2, mx: 0 }} className="title-bg">
              <Typography variant="title" sx={{ color: "white.light", fontSize: { lg: '2.5rem', xs: '2rem' } }}>
                Event Sponsors
              </Typography>
            </Box>
            <Box component="div" className='carousel' data-flickity='{"wrapAround": true,"prevNextButtons": false, "pageDots": false,"autoPlay": 3000 }' sx={{ my: 2 }}>
              <Box component="div" className='carousel-cell' sx={{ width: { md: "30%", xs: "100%" }, backgroundColor: "primary.light" }}>
                <img src="" alt="" />
              </Box>
              <Box component="div" className='carousel-cell' sx={{ width: { md: "30%", xs: "100%" }, backgroundColor: "primary.light" }}>
                <img src="" alt="" />
              </Box>
              <Box component="div" className='carousel-cell' sx={{ width: { md: "30%", xs: "100%" }, backgroundColor: "primary.light" }}>
                <img src="" alt="" />
              </Box>
              <Box component="div" className='carousel-cell' sx={{ width: { md: "30%", xs: "100%" }, backgroundColor: "primary.light" }}>
                <img src="" alt="" />
              </Box>
              <Box component="div" className='carousel-cell' sx={{ width: { md: "30%", xs: "100%" }, backgroundColor: "primary.light" }}>
                <img src="" alt="" />
              </Box>
            </Box>
          </Container>
        </Box>
        {/* event sponsors ends */}

        {/* events in tech-fest starts */}
        <Box className="events-tech-fest">
          <Container maxWidth="xl">
            <Box sx={{ my: 2, mx: 0 }} className="title-bg">
              <Typography variant="title" sx={{ color: "white.light", fontSize: { lg: '2.5rem', xs: '2rem' } }}>
                What we've got for you
              </Typography>
            </Box>
            <Box className="">

            </Box>
          </Container>
        </Box>
        {/* events in tech-fest ends */}
      </Box >
    </ThemeProvider >
  )
}

export default HomePage