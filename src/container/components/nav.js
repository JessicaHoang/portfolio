import React from 'react'
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
//import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import {Link} from 'react-router-dom';

function Nav () {
    function handleClick(event) {
        event.preventDefault();
        console.info('You clicked a breadcrumb.');
      }

return(
        <Breadcrumbs aria-label="breadcrumb">
              <Link to="/about">
                  <li>About</li>
              </Link>
               <Link to="/portfolio">
                    <li>Portfolio</li>
              </Link> 
              <Typography color="textPrimary">Resume</Typography>
              </Breadcrumbs>  
)
}
export default Nav;