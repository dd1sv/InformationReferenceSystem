import logo from './logo.svg';
import './App.css';
import {StartTopMenu, StartCards} from './StartPage'
import Grid from '@material-ui/core/Grid';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FirstPage from './FirstPage';
import {HashRouter as Router, Route} from 'react-router-dom';
import PreparationPage from './PreparationPage/PreparationPage';
import SecondPage from './SecondPage/SecondPage';
import ProgramPage from './ProgramPage/ProgramPage'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  cards: {
    

  }
}));

function App() {
  const classes = useStyles();
  return (
    <Router>
    <div className={classes.root}>
    <StartTopMenu/>
    {/* <FirstPage/> */}
    <Route>
    <Route exact path="/"  component={FirstPage}/>
    <Route exact path="/preparation" render={()=><PreparationPage url={'/preparation'}/>} component={PreparationPage}/>
    <Route exact path="/program-pages" render={()=><PreparationPage url={'/program-pages'}/>} component={ProgramPage}/>
    <Route exact path="/search-page" render={()=><PreparationPage url={'/search-page'}/>} component={SecondPage}/>

    </Route>
    </div>
    </Router>
  );
}

export default App;
