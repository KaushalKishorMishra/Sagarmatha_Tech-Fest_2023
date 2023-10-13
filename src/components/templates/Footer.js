import { Container, ThemeProvider, Box, Button, Typography, CssBaseline } from '@mui/material'
import React from 'react'
import { theme } from '../../themes/Theme'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBlenderPhone, faBriefcase, faCalendarDays, faChevronUp, faHouse, faInfo, faPeopleGroup } from '@fortawesome/free-solid-svg-icons'

// logo import
// The code snippet imports different social media icons from specific file paths.
import facebookIcon from '../../assets/images/icons8-facebook-3d-fluency/icons8-facebook-30.png'
import gmailIcon from '../../assets/images/icons8-gmail-logo-3d-fluency/icons8-gmail-logo-30.png'
import tiktokIcon from '../../assets/images/icons8-tik-tok-3d-fluency/icons8-tik-tok-30.png'
import instagramIcon from '../../assets/images/icons8-instagram-3d-fluency/icons8-instagram-30.png'
import discordIcon from '../../assets/images/icons8-discord-3d-fluency/icons8-discord-30.png'

const Footer = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ position: 'static' }} className="footer-section">
        <Box sx={{ mb: 1, display: "flex", gap: "2rem", alignItems: "center", px: 5, py: 2 }}>
          <Box sx={{ borderTop: 3, borderColor: "white.main", width: "45%" }}>
          </Box>
          <Box title="Go to top">
            <Button variant='outlined' sx={{
              color: "white.light", fontSize: { lg: "1.1rem", xs: ".8rem" }, width: "fit-content", border: 2, borderRadius: "100%", p: { lg: "24px", xs: "24px" }, '&:hover': {
                border: 2,
              }
            }} href='/'>
              <FontAwesomeIcon icon={faChevronUp} />
            </Button>
          </Box>
          <Box sx={{ borderTop: 3, borderColor: "white.main", width: "45%" }}>
          </Box>
        </Box>
        <Container maxWidth="xl" fixed sx={{ mb: 3, display: "flex", justifyContent: "center", flexDirection: "column" }}>
          <Typography variant='description' sx={{ color: "white.light" }} textAlign="center" >Join Us</Typography>
          <Box sx={{ display: "flex", justifyContent: "center", gap: "10px", mb: 3, alignItems: "center", flexDirection: { lg: "row", xs: "column" } }}>
            <Button variant='text' href='/' disableRipple sx={{
              filter: { lg: 'grayscale(100%)' }, '&:hover': {
                filter: { lg: 'grayscale(0%)' }
              }
            }}>
              <img src={facebookIcon} alt='facebook logo' />
            </Button>
            <Button variant='text' href='/' disableRipple sx={{
              filter: { lg: 'grayscale(100%)' }, '&:hover': {
                filter: { lg: 'grayscale(0%)' }
              }
            }}>
              <img src={gmailIcon} alt='gmail logo' />
            </Button>
            <Button variant='text' href='/' disableRipple sx={{
              filter: { lg: 'grayscale(100%)' }, '&:hover': {
                filter: { lg: 'grayscale(0%)' }
              }
            }}>
              <img src={tiktokIcon} alt='tiktok logo' />
            </Button>
            <Button variant='text' href='/' disableRipple sx={{
              filter: { lg: 'grayscale(100%)' }, '&:hover': {
                filter: { lg: 'grayscale(0%)' }
              }
            }}>
              <img src={instagramIcon} alt='instagram  logo' />
            </Button>
            <Button variant='text' href='/' disableRipple sx={{
              filter: { lg: 'grayscale(100%)' }, '&:hover': {
                filter: { lg: 'grayscale(0%)' }
              }
            }}>
              <img src={discordIcon} alt='discord  logo' />
            </Button>
          </Box>
          <Box sx={{ padding: "0 0 0 10px", backgroundColor: "white.light", borderRadius: 30, display: "flex", alignItems: "center", justifyContent: "center", mb: 2 }}>
            <Typography variant='description' sx={{ color: "blue_color.main", fontSize: { lg: "1.5rem", xs: "1rem" } }} textAlign={"center"}>Not Registered yet for the event? Register Now and get exciting news and gifts.</Typography>
            <Button variant='contained' sx={{ px: 3, py: 1, fontSize: theme.typography.h5, borderRadius: "50px" }}>
              Register
            </Button>
          </Box>
          <Typography variant='description' sx={{ color: "white.light" }} textAlign={"center"}>Navigate to:</Typography>
          <Box sx={{ display: "flex", justifyContent: "center", gap: "20px", flexDirection: { lg: "row", xs: "column" }, alignItems: "center" }}>
            <Button variant='text' sx={{
              display: 'flex', gap: 1, color: "white.main", '&:hover': {
                color: "white.light"
              }
            }} >
              <FontAwesomeIcon icon={faHouse} />
              <Typography variant="caption" >Home</Typography>
            </Button>

            <Button variant='text' sx={{
              display: 'flex', gap: 1, color: "white.main", '&:hover': {
                color: "white.light"
              }
            }}>
              <FontAwesomeIcon icon={faInfo} />
              <Typography variant="caption" >About</Typography>
            </Button>

            <Button variant='text' sx={{
              display: 'flex', gap: 1, color: "white.main", '&:hover': {
                color: "white.light"
              }
            }}>
              {/* <FontAwesomeIcon icon={faCalendarCheck} /> */}
              <FontAwesomeIcon icon={faPeopleGroup} />
              <Typography variant="caption">Teams</Typography>
            </Button>

            <Button variant='text' sx={{
              display: 'flex', gap: 1, color: "white.main", '&:hover': {
                color: "white.light"
              }
            }}>
              <FontAwesomeIcon icon={faCalendarDays} />
              <Typography variant="caption">Schedules</Typography>
            </Button>

            <Button variant='text' sx={{
              display: 'flex', gap: 1, color: "white.main", '&:hover': {
                color: "white.light"
              }
            }}>
              <FontAwesomeIcon icon={faBlenderPhone} />
              <Typography variant="caption">Contact</Typography>
            </Button>

            <Button variant='text' sx={{
              display: 'flex', gap: 1, color: "white.main", '&:hover': {
                color: "white.light"
              }
            }}>
              <FontAwesomeIcon icon={faBriefcase} />
              <Typography variant="caption" >Workshops</Typography>
            </Button>
          </Box>
        </Container>
        <Box sx={{ borderTop: 3, borderColor: "white.light", py: 1, width: "100%", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: { lg: "row", xs: "column" } }}>

          <Typography variant='copyright' sx={{ color: "white.light" }} >Sagarmatha Tech-fest © 2023 - 2024 |</Typography>
          {" "}
          <Typography variant='copyright' sx={{
            borderBottom: 1,
            color: "white.light", "&:hover": {
              color: "white.main",
            }
          }} >
            <a href='/'>
              Terms & Conditions
            </a>
          </Typography>


          <Typography variant='copyright' sx={{ color: "white.light" }} >| Designed By:-        <Typography variant='credit' sx={{
            borderBottom: 1,
            color: "white.light", "&:hover": {
              color: "white.main",
            }
          }}>
            <a href='/'>
              Leon Lama
            </a>
          </Typography></Typography>


        </Box>
      </Box>
    </ThemeProvider>
  )
}

export default Footer

// design the footer Register button