import React, { useContext } from 'react'
import ItemCard from './ItemCard'
import { makeStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import Typography from '@material-ui/core/Typography'
import { CartContext, ProductsContext } from 'App'

const ItemCardList = () => {
  const classes = useStyles()
  const { cart } = useContext(CartContext)
  const { products } = useContext(ProductsContext)
  const { itemsIds, quantityById } = cart

  const getTotalInCart = () => {
    if (!products.length) return 0
    return itemsIds.reduce((total, nextItemId) => {
      const product = products.find(({ productID }) => productID === nextItemId)
      return total + product.unitPrice * quantityById[nextItemId]
    }, 0)
  }

  const renderItems = () => {
    if (!products.length) return
    return itemsIds.map(id => <ItemCard productId={id} quantity={quantityById[id]} key={id} />)
  }

  if (!products.length) return <></>
  return (
    <>
      <List className={classes.root}>{renderItems()}</List>
      <Typography className={classes.paddingGutter} variant="h5" color="textSecondary">
        Total: ${getTotalInCart()}
      </Typography>
    </>
  )
}

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
    borderBottom: '1px solid #e8e8e8',
    marginBottom: 12,
  },
  paddingGutter: {
    padding: '0 16px',
  },
}))

export default ItemCardList
