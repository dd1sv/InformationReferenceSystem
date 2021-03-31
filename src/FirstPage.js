import { StartCards} from './StartPage';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {HashRouter as Router} from 'react-router-dom';


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
  //  marginTop: '5%',
  //  display: 'flex',
  //  justifyContent: 'center',
   maxWidth: '1300px',
   display: 'flex',
   alignItems: 'center',
   alignContent: 'center',
   justifyContent: 'space-between',
   margin: '3% auto',
   flexWrap: 'wrap',
  },
  card: {
    margin: '0 15px 10px 15px'
  }
}));

function FirstPage() {
  const classes = useStyles();
  return (
    <>
    <div className={classes.cards}>
    <Router>
    {/* <Grid container spacing={1}> */}
    <div className={classes.card}>
    <StartCards imgUrl={'img/2.webp'} name={'Наставления перед проведением сбора информации в социальных сетях'} url={'/preparation'} description={'Обязательно к изучениею, перед первым этапом поиска и сбора информации о человеке в социальных сетях'}/>
    </div>
    <div className={classes.card}>
    <StartCards imgUrl={'img/1.png'} name={'Реализация поиска информации о человеке в социальных сетях'} url={'/search-page'} description={'Описаны подходы и методика к изучению профилей и их поиску в социальных сетях'}/>
    </div>
    <div className={classes.card}>
    <StartCards imgUrl={'img/3.png'} name={'Программы и сервисов для поиса, сбора и хранения информации в социальных сетях'} url={'/program-pages'} description={'Дерево связей с названиями и URL-адресами'}/>
    </div>
    
    {/* </Grid> */}
    
</Router>
    </div>
    </>
  );
}

export default FirstPage;
