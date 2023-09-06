import { Box, Button, Typography, ThemeProvider } from '@mui/material'
import React from 'react'

import { theme } from '../../themes/Theme'

const PageNotFound = () => {
    return (
        <ThemeProvider theme={theme}>
            <Box className="page-not-found flex" sx={{backgroundColor:"primary", color:""}}>
                <Box>
                    <Typography variant='h3' sx={{ mb: 3, fontWeight: 600 }} className='title'>
                        Page not found!!!
                    </Typography>
                    <Typography variant='h1'>
                        Looks like  you are lost click here to go home.
                    </Typography>
                    <Button href='/'>
                        GO HOME
                    </Button>
                </Box>
                <Box>
                    {/* <img src="" alt=""> */}
                    Lang
                </Box>
            </Box>
        </ThemeProvider>
    )
}

export default PageNotFound