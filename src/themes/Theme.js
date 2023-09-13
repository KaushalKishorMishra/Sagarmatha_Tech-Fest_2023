// import AndaluseSelioth from '../assets/fonts/andaluse-selioth/Andaluse Selioth.otf'
// import Bellefair from "../assets/fonts/Bellefair/Bellefair-Regular.ttf"

import { createTheme } from "@mui/material";


export const theme = createTheme({
    palette: {
        primary: {
            main: '#5357c4',
            light: '#989adc',
            dark: '#191a3b',
            contrast: '#c4c053'
        },
        secondary: {
            main: '#1291de',
            light: '#71bdeb',
            dark: '#052b43',
            contrast: '#de5f12'
        },
        danger: {
            main: '#c50606',
            light: '#dc6a6a',
            dark: '#3b0202',
            contrast: '#06c5c5'
        },
        warning: {
            main: '#ff5800',
            light: '#ff9b66',
            dark: '#4c1a00',
            contrast: '#00a7ff'
        },
        calm: {
            main: "",
            light: "",
            dark: "",
            contrast: ""
        },
        white: {
            main: '#e6e6e6',
            light: '#ffffff',
            dark: '#cccccc',
            contrast: '#000000'
        },
        black: {
            main: '#1a1a1a',
            light: '#333333',
            dark: '#000000',
            contrast: '#ffffff'
        },

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
        },
        h6: {
            fontSize: '1.0rem',
            fontWeight: '300'
        },
        title: {
            fontFamily: ['Varela Round', 'sans-serif'].join(','),
            fontSize: '2.5rem',
            fontWeight: '700'
        },
        subtitle: {
            fontFamily: ['Asar', 'serif'].join(','),
            fontSize: '2rem',
            fontWeight: '500'
        },
        description: {
            fontFamily: ['Andika', 'sans-serif'].join(','),
            fontSize: '1.5rem',
        },
        copyright: {
            fontFamily: ['Andika', 'sans-serif'].join(','),
            fontSize: '1.1rem',
        },
        credit: {
            fontFamily: ['Allura', 'cursive'].join(','),
            fontSize: "1.3rem",
            fontWeight: '400',
        },
        AsarFont: {
            fontFamily: ['Asar', 'serif'].join(','),
        },
        AndikaFont: {
            fontFamily: ['Andika', 'sans-serif'].join(','),
        },
        VarelaRoundFont: {
            fontFamily: ['Varela Round', 'sans-serif'].join(','),
        },
    },

    components: {
        MuiButton: {
            styleOverrides: {
                text: {
                    padding: '10px 20px',
                    fontSize: '1.5rem',
                    fontWeight: '500',
                    textTransform: 'uppercase',
                    '&:hover': {
                        color: '#ffffff',
                    }
                },
                action: {
                    padding: '10px 40px',
                    fontSize: { md: '1.2rem' },
                    fontWeight: '700',
                    textTransform: 'uppercase',
                    borderRadius: '50px',
                    backgroundColor: "#1291de",
                    color: '#ffffff',
                    fontFamily: ['Varela Round', 'sans-serif'].join(','),
                    '&:hover': {
                        backgroundColor: "#052b43",
                        transition: ".5s ease-in"
                    }
                },
            }
        }
    }
})
