//import { render } from "@testing-library/react";
import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

// importing other containers
import Header from './components/header'


function HomepageMain(){  
    const useStyles = makeStyles((theme) => ({
        root: {
          flexGrow: 1
        },
        paper: {
          padding: theme.spacing(2),
          textAlign: "center",
          color: theme.palette.text.secondary,
          backgroundColor: '#fe6b8b'
        }
      }));
    const classes = useStyles();
        return(
            <div className={classes.root}>
                {/* <Navbar bg="light" expand="lg" id="NavigationBar">
                    <Navbar.Brand href="#home">Jessica Hoang</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#link">Link</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar> */}
                <Grid container space={3}>
                    <Grid item xs={12}>
                        <Paper className={classes.paper} padding={2}><Header/></Paper>
                    </Grid>
                    <Grid item xs={12}>
                        <Paper className={classes.paper} padding={2}>Homepage-content</Paper>
                    </Grid>
                    <Grid item xs={12}>
                        <Paper className={classes.paper}>Footer</Paper>
                    </Grid>

                </Grid>

            </div>
        );
}

export default HomepageMain;
