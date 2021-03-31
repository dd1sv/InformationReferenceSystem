import './App.css';
import {StartTopMenu} from './StartPage'

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FirstPage from './FirstPage';
import {HashRouter as Router, Route} from 'react-router-dom';
import PreparationPage from './PreparationPage/PreparationPage';
import SecondPage from './SecondPage/SecondPage';
import ProgramPage from './ProgramPage/ProgramPage';
import VK from './SecondPage/VK';
import OK from './SecondPage/OK';
import Facebook from './SecondPage/Facebook';
import Instagram from './SecondPage/Instagram';
import TikTok from './SecondPage/TikTok';
import Twitter from './SecondPage/Twitter';



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
    <Route exact path="/search-page/vk" render={()=><VK url={'/program-pages/vk'}/>} component={VK}/>
    <Route exact path="/search-page/ok" render={()=><OK url={'/program-pages/ok'}/>} component={OK}/>
    <Route exact path="/search-page/Facebook" render={()=><Facebook url={'/program-pages/Facebook'}/>} component={Facebook}/>
    <Route exact path="/search-page/Twitter" render={()=><Twitter url={'/program-pages/Twitter'}/>} component={Twitter}/>
    <Route exact path="/search-page/Instagram" render={()=><Instagram url={'/program-pages/Instagram'}/>} component={Instagram}/>
    <Route exact path="/search-page/TikTok" render={()=><TikTok url={'/program-pages/TikTok'}/>} component={TikTok}/>
   




    </Route>
    </div>
    </Router>
  );
}

export default App;
