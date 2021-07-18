import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faTwitter
} from "@fortawesome/free-brands-svg-icons";
import { CardActionArea, CardMedia } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';

function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

function Header(){

    // JSS Styling
    const useStyles = makeStyles((theme) => ({
        root: {
          flexGrow: 1
        },
        backgroundColor: '#add8e6',
        social: {
          padding: '0 3px',
          float: 'left'
        },
        media: {
          height: 105,
          width: 90,
          alignItems: 'center',
          display:'fleBox',
          justifyContent: 'center',
          
        }
      }));

      const classes = useStyles();

 return(
     
     <div className={classes.root}>
         <Grid container space={3}>
            <Grid item xs={12}>
            <a href="https://github.com/JessicaHoang" className={classes.social} alignItems= 'flex-start' >
            <FontAwesomeIcon icon={faGithub} size="x" />
            </a>
            <a href="https://www.linkedin.com/in/jessica-hoang/" className={classes.social}>
            <FontAwesomeIcon icon={faLinkedin} size="x" />
            </a>
            <a href="https://twitter.com/jessicahoang_" className={classes.social}>
            <FontAwesomeIcon icon={faTwitter} size="x" />
            </a>
            <a className={classes.social}>jessicahoang@gmail.com</a>
            </Grid>
            <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justify="center"
            >
            <Grid item xs={12}>
              <Card className={classes.media}>
                <CardActionArea>
                  <CardMedia
                  className={classes.media}
                  image="Portfolio-logo.jpg"
                  title="logo" />
                   <Typography gutterBottom variant="h5" component="h2"> Jessica Hoang
          </Typography>
                </CardActionArea>
              </Card>
              
            </Grid>
            <Grid item xs={12}>
              <Breadcrumbs aria-label="breadcrumb">
              <Link color="inherit" href="/" onClick={handleClick}>
              something
              </Link>
              <Link color="inherit" href="/homepage-content.js" onClick={handleClick}>
              Portfolio
              </Link>
              <Typography color="textPrimary">Resume</Typography>
              </Breadcrumbs>
            </Grid>
            </Grid>
         </Grid>
     </div>
 )
}

export default Header;