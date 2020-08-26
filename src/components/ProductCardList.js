import React, { useContext, useCallback } from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import ProductCard from './ProductCard'
import { ProductsContext } from 'App'

const ProductCardList = ({ count, filter, order }) => {
  const classes = useStyles()
  const { products } = useContext(ProductsContext)

  const filterProducts = useCallback(
    () =>
      products
        .sort((p1, p2) => {
          if (order === 'desc') {
            return p1[filter] < p2[filter] ? 1 : -1
          }
          return p1[filter] > p2[filter] ? 1 : -1
        })
        .slice(0, count),
    [products, filter, count, order],
  )

  const renderProducts = () => {
    if (!products.length) return
    let productsList = products
    if (filter) {
      productsList = filterProducts()
    }
    return productsList.map(product => (
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

ProductCardList.propTypes = {
  count: PropTypes.number,
  filter: PropTypes.string,
  order: PropTypes.string,
}

export default ProductCardList

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
}))
