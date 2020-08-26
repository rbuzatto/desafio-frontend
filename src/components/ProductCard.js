import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import AddIcon from '@material-ui/icons/Add'

const ProductCard = props => {
  const { name, description, unitPrice, unitsInStock, image } = props
  const classes = useStyles()
  return (
    <Card className={classes.root}>
      <CardMedia className={classes.media} image={image} title={name} />
      <CardContent>
        <Typography variant="h5" color="textSecondary">
          {name}
        </Typography>
        <Typography variant="body2" paragraph color="textSecondary" component="p">
          {description}
        </Typography>
        <Typography variant="body1" color="textSecondary" component="p">
          ${unitPrice}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          Left in stock: {unitsInStock}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton className={classes.addIconButton} aria-label="add to favorites">
          <AddIcon />
        </IconButton>
      </CardActions>
    </Card>
  )
}

ProductCard.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  unitPrice: PropTypes.number,
  unitsInStock: PropTypes.number,
}

const useStyles = makeStyles(() => ({
  root: {
    maxWidth: 345,
  },
  addIconButton: {
    backgroundColor: '#f3a7a3',
    boxShadow: '4px 4px 2px rgba(0,0,0, .15)',
    '&:hover': {
      backgroundColor: '#ff7c76',
    },
  },
  media: {
    height: 0,
    paddingTop: '56.25%',
  },
}))

export default ProductCard
