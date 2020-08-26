import React, { useContext } from 'react'
import ItemCard from './ItemCard'
import { makeStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import { CartContext, ProductsContext } from 'App'

const ItemCardList = () => {
  const classes = useStyles()
  const { cart } = useContext(CartContext)
  const { products } = useContext(ProductsContext)
  const { itemsIds, quantityById } = cart

  const renderItems = () => {
    if (!products.length) return
    return itemsIds.map(id => <ItemCard productId={id} quantity={quantityById[id]} key={id} />)
  }
  return <List className={classes.root}>{renderItems()}</List>
}

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}))

export default ItemCardList
