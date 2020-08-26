import React from 'react'
import ProductCardList from 'components/ProductCardList'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'

const TopProducts = () => {
  const classes = useStyles()
  return (
    <div className="container page">
      <Typography className={classes.pageHeader} variant="h4" color="textSecondary">
        Here are the exclusive Top 5!
      </Typography>
      <ProductCardList count={5} filter="unitPrice" order="desc" />
    </div>
  )
}

const useStyles = makeStyles(() => ({
  pageHeader: {
    borderBottom: '1px solid #e8e8e8',
    paddingBottom: 8,
    marginBottom: 24,
  },
}))

export default TopProducts
