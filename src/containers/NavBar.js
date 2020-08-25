import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import ClickAwayListener from '@material-ui/core/ClickAwayListener'
import MenuIcon from '@material-ui/icons/Menu'
import Close from '@material-ui/icons/Close'
import Link from '@material-ui/core/Link'
import classNames from 'classnames/bind'
import { NavLink as RouterLink } from 'react-router-dom'

const linksValues = [
  {
    to: '/products',
    display: 'Products',
  },
  {
    to: '/top-products',
    display: 'Top5',
  },
  {
    to: '/cart',
    display: 'Cart',
  },
]

const NavBar = () => {
  const classes = useStyles()
  const cx = classNames.bind(classes)
  const [menuOpen, setMenuOpen] = useState(false)
  let anchorElm = null

  const toggleMenu = () => setMenuOpen(menuOpen => !menuOpen)
  const closeMenu = () => setMenuOpen(false)
  const handleClickAway = event => {
    if (anchorElm.isSameNode(event.target) || anchorElm.contains(event.target)) return
    setMenuOpen(false)
  }

  const renderLinks = () =>
    linksValues.map(({ to, display }, idx) => (
      <Link
        key={idx}
        component={RouterLink}
        onClick={closeMenu}
        activeStyle={{ color: '#ff46e7' }}
        style={{ transitionDelay: `${idx * 40}ms` }}
        className={cx(classes.menuLink, { [classes.menuLinkShow]: menuOpen })}
        to={to}
        color="inherit"
      >
        {display}
      </Link>
    ))

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            buttonRef={node => (anchorElm = node)}
            edge="start"
            onClick={toggleMenu}
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <Close className={cx({ [classes.hide]: !menuOpen })} />
            <MenuIcon className={cx({ [classes.hide]: menuOpen })} />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            <Link component={RouterLink} to="/">
              Home
            </Link>
          </Typography>
          <ClickAwayListener onClickAway={handleClickAway}>
            <div
              id="menu-list"
              className={cx(classes.menuList, { [classes.menuListShow]: menuOpen })}
            >
              {renderLinks()}
            </div>
          </ClickAwayListener>
        </Toolbar>
      </AppBar>
    </div>
  )
}

const useStyles = makeStyles(theme => ({
  root: {
    position: 'relative',
    top: 0,
    width: '100vw',
    height: '56px',
    [theme.breakpoints.up('sm')]: {
      height: '64px',
    },
  },
  logo: {
    flexGrow: 1,
    '&:hover': {
      textDecoration: 'none',
    },
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  hide: {
    display: 'none',
  },
  menuLink: {
    marginLeft: 12,
    '&:hover': {
      textDecoration: 'none',
      color: '#4dfeff',
    },
    [theme.breakpoints.down('xs')]: {
      padding: '.8rem',
      opacity: 0,
      transform: 'translateX(-50%)',
      margin: 0,
      background: '#3a5577',
      '&:hover': {
        background: '#3988c3',
      },

      '&:not(:first-child)': {
        borderTop: '1px solid #92b791',
      },
    },
  },
  menuLinkShow: {
    [theme.breakpoints.down('xs')]: {
      opacity: 1,
      transform: 'translateX(0)',
      transition: `
          opacity .3s ease-in,
          transform .3s ease-in,
          background .10s linear,
          color .10s linear
          `,
    },
  },
  menuList: {
    marginLeft: 'auto',
    [theme.breakpoints.down('xs')]: {
      position: 'fixed',
      flexDirection: 'column',
      top: 50,
      left: 20,
      borderRadius: '4px',
      width: '0',
      display: 'flex',
      overflow: 'hidden',
    },
  },
  menuListShow: {
    [theme.breakpoints.down('xs')]: {
      width: '15rem',
    },
  },
}))

export default NavBar
