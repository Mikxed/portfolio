import React from 'react'
import { Card, CardContent, Typography, CardActions, Button, Box } from '@mui/material'

function App () {
  const card = (
    <React.Fragment>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          mikohautamaki@gmail.com
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Contact me!</Button>
      </CardActions>
    </React.Fragment>
  )
  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined" style={{ margin: '12px' }}>{card}</Card>
    </Box>
  )
}

export default App
