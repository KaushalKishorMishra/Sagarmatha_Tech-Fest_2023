// import AndaluseSelioth from '../assets/fonts/andaluse-selioth/Andaluse Selioth.otf'
// import Bellefair from "../assets/fonts/Bellefair/Bellefair-Regular.ttf"

import { createTheme } from "@mui/material";


export const theme = createTheme({
    palette: {
        primary: {
            main: '#5357c4',
            light: '',
            dark: '',
            contrast: ''
        },
        secondary: {
            main: '#1291de',
            light: '',
            dark: '',
            contrast: ''
        },
        danger: {
            main: '#c50606',
            light: '',
            dark: '',
            contrast: ''
        },
        warning: {
            main: '#6bb0db',
            light: '',
            dark: '',
            contrast: ''
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
            fontWeight: '600'
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
    },

    components: {

    }
})
