import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

const Home = () => {
  const classes = useStyles()
  return (
    <div className={classes.landingHome}>
      <Typography className={classes.landingHeader} variant="h2" color="textSecondary">
        Welcome to T-Market
      </Typography>
    </div>
  )
}

const useStyles = makeStyles(() => ({
  landingHeader: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    color: '#1352c9',
  },
  landingHome: {
    position: 'relative',
    backgroundImage:
      'linear-gradient(rgb(207 234 233 / 59%), rgb(180 224 241 / 93%)), url(./img/landing.jpg)',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    height: 'calc(100vh - 64px)',
  },
}))

export default Home
