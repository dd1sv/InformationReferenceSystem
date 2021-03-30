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
    textDecoration: 'none!important',
    
  },
 
  
}));

export default function Menu() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
     
      
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="right"
      >
        <div className={classes.toolbar} />
        <Link to='/' className={classes.link} >
            <ListItem ListItem button key={'Вернуться в главное меню'}>
              <ListItemIcon>{0 % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText  primary={'Главное меню'} />
            </ListItem>
            </Link>
        <Divider />
        <Divider />
        <Divider/>
        <List>
          <Link to='/search-page/vk' className={classes.link}>
            <ListItem ListItem button key={'vk'}>
              <ListItemIcon>{0 % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={'Вконакте'} />
            </ListItem>
            </Link>

            <Link to='/search-page/ok'className={classes.link}>
            <ListItem ListItem button key={'ok'} >
              <ListItemIcon>{0 % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={'Одноклассники'} />
            </ListItem>
            </Link>
            <Link to='/search-page/Facebook' className={classes.link}>
            <ListItem ListItem button key={'Facebook'}>
              <ListItemIcon>{0 % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={'Facebook'} />
            </ListItem>
            </Link>
            <Link to='/search-page/Instagram' className={classes.link}>
            <ListItem ListItem button key={'Instagram'}>
              <ListItemIcon>{0 % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={'Instagram'} />
            </ListItem>
            </Link>
            <Link to='/search-page/Twitter' className={classes.link}>
            <ListItem ListItem button key={'Twitter'}>
              <ListItemIcon>{0 % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={'Twitter'} />
            </ListItem>
            </Link>
            <Link to='/search-page/TikTok' className={classes.link}>
            <ListItem ListItem button key={'TikTok'}>
              <ListItemIcon>{0 % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={'Tik-Tok'} />
            </ListItem>
            </Link>
          {/* {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))} */}
        </List>
        
      </Drawer>
    </div>
  );
}
