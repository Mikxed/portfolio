import React from 'react'
import { Card, CardContent, Typography, Box } from '@mui/material'

function App () {
  const card = (
    <React.Fragment>
      <CardContent>
        <Typography variant="body1" gutterBottom>
        In 1995 Finland won the hockey world championship title and four months after that, I was born. Those two are (not) comparable. Fast forward 18 years and 8 months from that day and there I was, graduated straight out of high school.
        </Typography>
      </CardContent>
    </React.Fragment>
  )

  return (
    <Box sx={{ minWidth: 275 }}>
    <Card variant="outlined" style={{ margin: '12px' }}>{card}</Card>
  </Box>
  )
}

export default App
