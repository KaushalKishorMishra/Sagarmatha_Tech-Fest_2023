import { Box, Container, CssBaseline, TextField, ThemeProvider } from '@mui/material'
import React from 'react'
import { theme } from '../../themes/Theme'

const RegisterForm = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="xl">
        <Box className="register-form">
          <TextField id="name" label="User Name:" variant='outlined' />
          <TextField id="email" label="Email: " variant='outlined' />
        </Box>
      </Container>
    </ThemeProvider>
  )
}

export default RegisterForm
