import React from 'react';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

// importing other containers
import Header from './container/components/header'
import Footer from './container/components/footer';
import About from './container/components/about';
import Portfolio from './container/components/portfolio';

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
    <div>
      <Router>
        <Switch>
      <div className={classes.root}>
                <Grid container space={3}>
                    <Grid item xs={12}>
                        <Paper className={classes.paper} padding={2}><Header/></Paper>
                    </Grid>
                    <Grid item xs={12}>
                        <Paper className={classes.paper} padding={2}>
                          <Route path="/about" component={About}/>
                        </Paper>
                        <Paper className={classes.paper} padding={2}>
                          <Route path="/portfolio" component={Portfolio}/>
                        </Paper>
                    </Grid>
                    <Grid item xs={12}>
                        <Paper className={classes.paper}><Footer/></Paper>
                    </Grid>
                </Grid>
            </div>
            </Switch>
      </Router>
    </div>
    
  );
}

export default App;
