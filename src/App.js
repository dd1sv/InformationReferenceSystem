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
import ProgramPage from './ProgramPage/ProgramPage';
import Ref from './SecondPage/ref'
import Reff from './SecondPage/reff'


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
    <Route exact path="/search-page/vk" render={()=><Ref url={'/program-pages/vk'}/>} component={Ref}/>
    <Route exact path="/search-page/ok" render={()=><Reff url={'/program-pages/ok'}/>} component={Reff}/>



    </Route>
    </div>
    </Router>
  );
}

export default App;
