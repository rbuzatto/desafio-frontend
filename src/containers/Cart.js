import React from 'react'
import ItemCardList from 'components/ItemCardList'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'

const Cart = () => {
  const classes = useStyles()
  return (
    <>
      <Typography className={classes.pageHeader} variant="h4" color="textSecondary">
        Your Cart Items
      </Typography>
      <ItemCardList />
    </>
  )
}

const useStyles = makeStyles(() => ({
  pageHeader: {
    borderBottom: '1px solid #e8e8e8',
    paddingBottom: 8,
    marginBottom: 24,
  },
}))

export default Cart
