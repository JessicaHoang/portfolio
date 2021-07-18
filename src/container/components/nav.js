import React from 'react'
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';

function Nav () {
    function handleClick(event) {
        event.preventDefault();
        console.info('You clicked a breadcrumb.');
      }
return(
    <Breadcrumbs aria-label="breadcrumb">
              <Link color="inherit" href="/about.js" onClick={handleClick}>
              About
              </Link>
              <Link color="inherit" href="/homepage-content.js" onClick={handleClick}>
              Portfolio
              </Link>
              <Typography color="textPrimary">Resume</Typography>
              </Breadcrumbs>
)
}

export default Nav;