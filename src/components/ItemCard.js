import React, { useContext } from 'react'
import { ADD_TO_CART, SUBTRACT_FROM_CART, REMOVE_FROM_CART } from 'constants/index'
import { CartContext, ProductsContext } from 'App'
import PropTypes from 'prop-types'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Button from '@material-ui/core/Button'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import { makeStyles } from '@material-ui/core/styles'

const ItemCard = ({ productId, quantity }) => {
  const classes = useStyles()
  const { dispatch } = useContext(CartContext)
  const { products } = useContext(ProductsContext)

  const product = products.find(({ productID }) => productID === productId)

  const addToCart = () => dispatch({ type: ADD_TO_CART, productId })
  const subtractFromCart = () => dispatch({ type: SUBTRACT_FROM_CART, productId })
  const removeFromCart = () => dispatch({ type: REMOVE_FROM_CART, productId })
  return (
    <ListItem className={classes.root}>
      <ListItemText
        primary={product.name}
        secondary={product.unitsInStock}
        className={classes.description}
      />
      <ListItemText primary={`Price: $${product.unitPrice}`} className={classes.price} />
      <div className={classes.quantityAction}>
        <ListItemText primary={quantity} className={classes.quantity} />
        <ButtonGroup
          orientation="vertical"
          color="primary"
          aria-label="vertical outlined primary button group"
          variant="contained"
        >
          <Button onClick={addToCart} className={classes.button}>
            +
          </Button>
          <Button onClick={subtractFromCart} className={classes.button}>
            -
          </Button>
        </ButtonGroup>
      </div>
      <Button onClick={removeFromCart}>X</Button>
    </ListItem>
  )
}

ItemCard.propTypes = {
  productId: PropTypes.number,
  quantity: PropTypes.number,
}

export default ItemCard

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
      flexGrow: 0,
    },
  },
  button: {
    height: 18,
  },
  quantityAction: {
    display: 'flex',
    border: '1px solid #a2b0ce',
    borderRadius: 4,
  },
  quantity: {
    width: 32,
    textAlign: 'center',
  },
  description: {
    width: 290,
  },
  price: {
    width: 104,
  },
}))
