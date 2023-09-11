import { ThemeProvider } from '@mui/material'
import React from 'react'

import {theme} from '../../themes/Theme'

const HomePage = () => {
  return (
    <ThemeProvider theme={theme}>
        hello man
    </ThemeProvider>
  )
}

export default HomePage