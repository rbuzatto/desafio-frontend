import React from 'react'
import ProductCardList from 'components/ProductCardList'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'

const Products = () => {
  const classes = useStyles()
  return (
    <div className="container page">
      <Typography className={classes.pageHeader} variant="h4" color="textSecondary">
        All Products For You!
      </Typography>
      <ProductCardList />
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

export default Products
