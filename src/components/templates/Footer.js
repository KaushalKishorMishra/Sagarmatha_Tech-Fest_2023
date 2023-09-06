import { Container, ThemeProvider, Box, Button } from '@mui/material'
import React from 'react'
import { theme } from '../../themes/Theme'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ backgroundColor: "primary.main", borderRadius: "100px 100px 0 0", padding: "10px 50px", position: 'static' }}>
        <Box className="footer divider">
          <Box className="line">
          </Box>
          <Box className="arrow-icon" sx={{ outline: "2px solid white", p: 2, borderRadius: "100%", m: 2 }}>
            {/* <FontAwesomeIcon icon={faArrowUp} style={{ color: "#000000", }} /> */}
            <FontAwesomeIcon icon={faChevronUp} style={{ color: "#fff", }} />
          </Box>
          <Box className="line">

          </Box>
        </Box>
        <Container maxWidth="xl" fixed>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Button href='/' disableRipple>
              <FontAwesomeIcon icon={faFacebook} style={{ color: "#fff", }} size='2xl' />
            </Button>
            <Button href='/' disableRipple>
              <FontAwesomeIcon icon={faEnvelope} style={{ color: "#fff", }} size='2xl' />
            </Button>
            <Button href='/' disableRipple>
              <FontAwesomeIcon icon={faInstagram} style={{ color: "#fff", }} size='2xl' />
            </Button>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "center", }}>
            <Button>Home</Button>
            <Button>About</Button>
            <Button>Pre-Event</Button>
            <Button>Exhibition Schedule</Button>
            <Button>Contact</Button>
            <Button>Workshops</Button>
          </Box>
        </Container>
      </Box>
    </ThemeProvider>
  )
}

export default Footer