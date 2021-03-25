import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import { Link } from 'react-router-dom';
import Menu from './menu'
import Box from '@material-ui/core/Box';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    width: `calc(0% - ${drawerWidth}px)`,
    marginRight: drawerWidth,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
  link: {
    color: 'black',
    textDecoration: 'underline',
  }
}));

export default function PermanentDrawerRight() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" noWrap>
            Permanent drawer
          </Typography>
        </Toolbar>
      </AppBar>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Typography paragraph>
        <Box fontFamily="Monospace">Поиск в каждой социальной сети различается,     
      так как каждое расследование уникально. Необходимым действием для корректного поиска и сбора информации является фиксация информации, она происходит различным способом. Один из самых распространнёных является MindMap, иначе говоря диаграмма связей или ассоциативная карта (метод структуризации концепций с использованием графической записи в виде диаграммы). Благодаря такому способу идёт наилучшее восприятие информации ей анализа на основе полученных и собранных сведений. Ниже приведён список наиболее популярных и удобный сервисов и программ для её осуществления.
      </Box></Typography>
         <Typography variant="h6" gutterBottom>
      Онлайн сервисы:
        </Typography>
        <Typography  gutterBottom>
         <a href="https://app.diagrams.net/" className={classes.link}>Draw.io</a>, <a href="https://www.mindmup.com/" className={classes.link}>MindMap</a>, <a href="https://www.wisemapping.com/" className={classes.link}>Wisemapping</a>, <a href="https://www.mindmeister.com/ru" className={classes.link}>Mindmeister</a>, <a href="https://www.mindomo.com" className={classes.link}>Mindmomo</a>
        </Typography>
        <Typography variant="h6" gutterBottom>
      Приложения требующие скачивания:
        </Typography>
        <Typography  gutterBottom>
         <a href="https://www.xmind.net/" className={classes.link}>Xmind</a>
        </Typography>
        <Typography variant="h6" gutterBottom>
      Расширения для браузера:
        </Typography>
        <Typography  gutterBottom>
         <a href="https://workspace.google.com/marketplace/app/mindmup_2_for_google_drive/758379822725" className={classes.link}>Mindmup 2</a>
        </Typography>

        <Typography paragraph variant="h5" gutterBottom style={{marginTop: '60px'}}>
        В меню справа выберите социальную сеть, в которой вы хотите провести исследование для поиска информации, после чего вам отобразиться меню состоящее из пунктов, в зависимости от искомой информации. Последовательность необязательна.
        </Typography>
      </main>
      <Menu/>
    </div>
  );
}
