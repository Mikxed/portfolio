import React from 'react'
import { Button, ButtonGroup, Box } from '@mui/material'

function App () {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        '& > *': {
          m: 1
        }
      }}
    >
      <ButtonGroup variant="text" aria-label="text button group">
        <Button href="/about">About</Button>
        <Button href="/art">Art</Button>
        <Button href="/minigame">Minigame</Button>
        <Button href="/contact">Contact</Button>
      </ButtonGroup>
    </Box>
  )
}

export default App
