import React from 'react'
import classnames from 'classnames'

import { Link as GatsbyLink } from 'gatsby'
import { withStyles } from '@material-ui/core/styles'

const styles = (theme) => ({
  link: {
    color: 'inherit',
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'none',
      color: 'inherit',
    }
  },
  hover: {
    transition: 'color 0.2s',
    '&:hover': {
      color: theme.palette.grey[600]
    }
  }
})

const Link = ({ classes, className, href, children, ...props }) => {
  if (href) {
    return (
      <a href={href} {...props} className={classnames(classes.link, classes.hover, className)}>{children}</a>
    )
  }
  return (
    <GatsbyLink {...props} className={classnames(classes.link, classes.hover, className)}>{children}</GatsbyLink>
  )
}

export default withStyles(styles)(Link)
