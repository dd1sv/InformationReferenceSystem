import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';
import Menu from '@material-ui/core/Menu';
import MailIcon from '@material-ui/icons/Mail';


const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'block',
    fontSize: '10px',
    [theme.breakpoints.up('sm')]: {
        fontSize: '14px',
      },
  },  
  
  
  
  
}));

function StartTopMenu() {
  const classes = useStyles();
 
  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      
    >
     
    </Menu>
  );

  

  return (
    <div className={classes.grow}>
      <AppBar position="static">
        <Toolbar>

          <Typography className={classes.title} variant="h6" noWrap>
            <b>Информационно-справочная система </b>
            <br/>по поиску информации о человеке в социальных сетях
          </Typography>
               
         
          <div className={classes.grow} />
         
            <IconButton color="inherit">
              <Badge color="secondary">
                <MailIcon />
              </Badge>
              <Typography>
                  Обратная связь
              </Typography>
            </IconButton>
            
        </Toolbar>
      </AppBar>
      
      {renderMenu}
    </div>
  );
}

export default StartTopMenu;