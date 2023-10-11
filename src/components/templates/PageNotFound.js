import { Box, Button, Typography, ThemeProvider, Container } from '@mui/material'
import React from 'react'

import { theme } from '../../themes/Theme'


import pageNotFound from '../../assets/images/404 error lost in space(2).gif'

const PageNotFound = () => {
    return (
        <ThemeProvider theme={theme}>
            <Container>
                <Box className="page-not-found flex" sx={{ backgroundColor: "", color: "" }}>
                    <Box>
                        <Typography variant='h3' sx={{ mb: 3, fontWeight: 600, }} className='title'>
                            Page not found!!!
                        </Typography>
                        <Typography variant='h1'>
                            Looks like  you are lost click here to go home.
                        </Typography>
                        <Button href='/'>
                            GO HOME
                        </Button>
                    </Box>
                    <Box sx={{}}>
                        <img src={pageNotFound} alt="" />
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    )
}

export default PageNotFound