import './App.css'
import React from 'react'
import Menu from './components/Menu.js'
import About from './components/About.js'
import Art from './components/Art.js'
import Minigame from './components/Minigame.js'
import Contact from './components/Contact.js'
import MikoImg from './static/images/avatar/miko.jpg'
import { useTheme, ThemeProvider, createTheme } from '@mui/material/styles'
import { Typography, Avatar, Stack, IconButton } from '@mui/material'
import Brightness4Icon from '@mui/icons-material/Brightness4'
import Brightness7Icon from '@mui/icons-material/Brightness7'
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'

const ColorModeContext = React.createContext({ toggleColorMode: () => {} })

function App () {
  const theme = useTheme()
  const colorMode = React.useContext(ColorModeContext)

  return (
    <div className="App">
      <IconButton sx={{ ml: 1 }} onClick={colorMode.toggleColorMode} color="inherit">
        {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
      </IconButton>
      <Stack direction="row" spacing={2} style={{ justifyContent: 'center' }}>
        <Avatar alt="Miko" src={MikoImg} style={{ alignSelf: 'center' }} />
        <Typography variant="h4" gutterBottom component="div">
          {"Miko's portfolio"}
        </Typography>
      </Stack>
      <Menu theme={theme}/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<About/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/art" element={<Art/>}/>
          <Route path="/minigame" element={<Minigame/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default function MyApp () {
  const [mode, setMode] = React.useState('dark')
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'))
      }
    }),
    []
  )

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode
        }
      }),
    [mode]
  )

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <App/>
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}
