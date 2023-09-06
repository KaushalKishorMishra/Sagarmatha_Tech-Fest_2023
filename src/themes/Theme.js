import AndaluseSelioth from '../assets/fonts/andaluse-selioth/Andaluse Selioth.otf'
import Bellefair from "../assets/fonts/Bellefair/Bellefair-Regular.ttf"

import { createTheme } from "@mui/material";


export const theme = createTheme({
    palette: {
        primary: {
            main: '#5357c4',
        },
        secondary: {
            main: '#1291de'
        },
        danger: {
            main: '#c50606'
        },
        calm: {
            main: '#6bb0db'
        }
    },

    typography: {
        h1: {
            fontSize: '3.713rem',
            fontWeight: '800'
        },
        h2: {
            fontSize: '2.865rem',
            fontWeight: '700'
        },
        h3: {
            fontSize: '2.197rem',
            fontWeight: '600'
        },
        h4: {
            fontSize: '1.69rem',
            fontWeight: '500'
        },
        h5: {
            fontSize: '1.3rem',
            fontWeight: '400'
        }
    },

    components: {
        MuiButton: {
            
        }
    }
})


export const fontAndaluseSelioth = createTheme({
    typography: {
        fontFamily: "Andaluse Selioth"
    },
    components: {
        MuiCssBaseline: {
            styleOverrides: `
                @font-face {
                    font-family: 'Andaluse Selioth';
                    font-display:'fallout';
                    src: url(${AndaluseSelioth}) format('otf');
                }
            `
        }
    }
})
export const fontBellefairRegular = createTheme({
    typography: {
        fontFamily: "Andaluse Selioth"
    },
    components: {
        MuiCssBaseline: {
            styleOverrides: `
                @font-face {
                    font-family: 'Bellefair-Regular';
                    font-display:'fallout';
                    src: url(${Bellefair}) format('otf');
                }
            `
        }
    }
})