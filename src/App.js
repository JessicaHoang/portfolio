import React from 'react';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

// importing other containers
import Header from './container/components/header'
import About from './container/components/about';
import Footer from './container/components/footer';

function App() { 
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
  return (
    <div className={classes.root}>
                <Grid container space={3}>
                    <Grid item xs={12}>
                        <Paper className={classes.paper} padding={2}><Header/></Paper>
                    </Grid>
                    <Grid item xs={12}>
                        <Paper className={classes.paper} padding={2}><About/></Paper>
                    </Grid>
                    <Grid item xs={12}>
                        <Paper className={classes.paper}><Footer/></Paper>
                    </Grid>

                </Grid>

            </div>
  );
}

export default App;
