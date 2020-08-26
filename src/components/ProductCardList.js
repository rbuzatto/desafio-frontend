import React, { useContext } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import ProductCard from './ProductCard'
import { ProductsContext } from 'App'

const ProductCardList = () => {
  const classes = useStyles()
  const { products } = useContext(ProductsContext)

  const renderProducts = () => {
    if (!products.length) return
    return products.map(product => (
      <Grid item xs={12} sm={6} md={4} key={product.productID}>
        <ProductCard {...product} />
      </Grid>
    ))
  }
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        {renderProducts()}
      </Grid>
    </div>
  )
}

export default ProductCardList

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
}))
