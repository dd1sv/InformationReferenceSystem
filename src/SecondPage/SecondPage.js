import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
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

       <Typography paragraph variant="h6" gutterBottom style={{marginTop: '60px'}}>
        Также уделите внимание используемым никнеймам и логинам изучаемой цели, они могут повторно использоваться в разных социальных сетях. Автоматизировать процесс проверки других социальных сетей на их использование можно с помощью:
        </Typography>
        <Typography  gutterBottom>
         <a href="go.mail.ru/search_social" className={classes.link}>Сервис от mail.ru</a>
        </Typography>
        <Typography  gutterBottom>
         <a href="instantusername.com" className={classes.link}>Instantusername</a>
        </Typography>
        <Typography  gutterBottom>
         <a href="whatsmyname.app" className={classes.link}>Whatsmyname.app</a>
        </Typography>
        <Typography  gutterBottom>
         <a href="https://namechk.com" className={classes.link}>Namechk</a>
        </Typography>

        <Typography paragraph variant="h6" gutterBottom style={{marginTop: '60px'}}>
        рекомендуется найденные профили - либо добавлять в избранные, если такая функция есть в социальных сетях, либо совершать учёт id. Так как исследумые обект может менять - адрес страницы, имена, фамилии и имена, сведения о себе, в отличии от id. Ниже будет перечислен список сервисов для каждой социальной сети:
        </Typography>
        <Typography  gutterBottom>
         <a href="https://regvk.com/id/" className={classes.link}>ВКонтакте</a>
        </Typography>
        <Typography  gutterBottom>
         <a href="https://instaguru.online/kak-najti-id-polzovatelya-v-instagrame/" className={classes.link}>Instagram</a>
        </Typography>
        <Typography  gutterBottom>
         <a href="https://tweeterid.com" className={classes.link}>Twitter</a>
        </Typography>
        <Typography  gutterBottom>
         <a href="https://findmyfbid.com/" className={classes.link}>Facebook</a>
        </Typography>
        <Typography  gutterBottom>
         <a href="https://iklife.ru/socialnye-seti/odnoklassniki/kak-uznat-id-stranicy-v-odnoklassnikah.html" className={classes.link}>Одноклассники</a>
        </Typography>
        <Typography  gutterBottom>
         <a href="https://commentpicker.com/tiktok-id.php" className={classes.link}>Tik-tok</a>
        </Typography>

        <Typography paragraph variant="h6" gutterBottom style={{marginTop: '60px'}}>
        Не стоит забывать про возможность попытки восстановления пароля во всех социальных сетях - она может дать частичный email-адресс и номер телефона. Email-адрес может быть также синхронизирован в социальных сетях на ряду с номером телефона, для дальнейшего отображения профиля в рекомендательных системах.
        </Typography>

        <Typography paragraph variant="h6" gutterBottom style={{marginTop: '60px'}}>
        Если у исследователя в наличии фото, качество которого затрудняет дальнейшее расслеодвание и изучени объекта. Есть вероятность его улучшить с помощью следующих сервисов:
        </Typography>
        <Typography  gutterBottom>
         <a href="https://letsenhance.io/" className={classes.link}>Letsenhance</a>
        </Typography>
        <Typography  gutterBottom>
         <a href="https://www.imgonline.com.ua/" className={classes.link}>imgonline</a>
        </Typography>
        <Typography  gutterBottom>
         <a href="https://www.myheritage.com/?lang=RU" className={classes.link}>myheritage</a>
        </Typography>

        <Typography paragraph variant="h5" gutterBottom style={{marginTop: '60px'}}>
        В меню справа выберите социальную сеть, в которой вы хотите провести исследование для поиска информации, после чего вам отобразиться меню состоящее из пунктов, в зависимости от искомой информации. Последовательность необязательна.
        </Typography>
      </main>
      <Menu/>
    </div>
  );
}
