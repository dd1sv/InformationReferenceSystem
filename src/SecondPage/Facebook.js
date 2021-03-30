import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Menu from './menu'
import Button from '@material-ui/core/Button';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    height: '100%',
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
    width: '200px'
  },
  textCenter: {
    maxWidth: '1000px'
  }
}));

export default function Facebook() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        className={classes.tabs}
      >
        <Tab label="Поиск профиля" {...a11yProps(0)} />
        <Tab label="Получение информации" {...a11yProps(1)} />
        
      </Tabs>
      <TabPanel value={value} index={0}>
      <div className={classes.textCenter}>
      <Typography gutterBottom variant="h6">
          Найти интересующий нас профиль в Facebook можно несколькими путями:
         </Typography>
         <Typography gutterBottom >
          1. Использовать поисковые системы.
         </Typography>
         <Typography gutterBottom >
          {/* Для этого можно использовать <a href="http://vk.city4me.com">City4me </a> и <a href="https://220vk.com">220vk</a> */}
          С помощью поисковых операторов "site:facebook.com *" или "inurl:facebook.com/ ***", где вместо *** указывается фамилия и имя, либо никнейм. В ряде случаев любая известная информация, позволяющая провести идентификацию (в т.ч. моб. телефон).
           </Typography>
           <Typography gutterBottom >
          2. Использовать русифицированую и дополненную программу автором информационно-справочной системы, основанной на графах связи и поиску по Facebook. <Button color="primary" size="lg" onClick={() => window.location.href="/programFB/programFB.html"}>Тут находится сама программа</Button>
         </Typography>
         <Typography gutterBottom >
          3. Использовать встроенный в социальную сеть поиск людей, ипользуя фильтры на основе имеющейся информации
         </Typography>
         <Typography gutterBottom>
        <img src="img/fb/1.png" style={{maxWidth: '700px', maxHeight: '400px'}}></img> 
        </Typography>
        <Typography gutterBottom >
          4. Поиск по фотографии. Данный способ может некорректно отрабатываться по причине защиты фотографий пользователей от алгоритмов поиска и анализа. Но в ряде случаев сервис <a href="https://pimeyes.com/en">PimEye</a> может показать релевантный ответ на запрос. Также не стоит принебрегать поисковыми системами Google, Yandex, Mail, Bing.
         </Typography>
         <Typography gutterBottom>
        5. При наличии номера абонента можно синхронизировать контакты мобильного телефона и Facebook, таким образом в рекомендациях в друзья, появится профиль человека привязанный к нему. Инструкцию можно прочитать на <a href="https://ru-ru.facebook.com/help/355489824655936">официальном сайте</a>
        </Typography>
         </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
      <div className={classes.textCenter}>
      <Typography gutterBottom>
      Колличество информации, которую может оставить пользователь на своей страницы огромно. Ниже приведена схема, показывающее максимальный обхъем всех видов данных. 
        </Typography>
        <Typography gutterBottom>
        <img src="img/fb/2.png" style={{maxWidth: '700px', maxHeight: '700px'}}></img> 
        </Typography>
        <Typography gutterBottom>
      В случае, если профиль закрытый, то рекомендуется использовать легендирование для получения доступа к старнице, то есть под вымышленным предлогом запроситься в друзья.
        </Typography>
        <Typography gutterBottom>
        Перед изучение профиля, исследователю необходимо понимать цель этого действия. Но для расширения имеющихся знаний, будем предполагать изучение всей страницы социальной сети.
        </Typography>
        <Typography gutterBottom>
        1. Поэтому изучение начать стоит с фотографий, именно они могут сказать кто изображён на них, получить круг общения, места времяпрепровождения. Комментарии под ними также могут нести определённую информацию. Стоит обратить внимание, что к изображениям могут быть прикреплены геометки и хештеги, а также отмечены пользователи "Facebook".
        </Typography>
        <Typography gutterBottom>
        2. После чего изучить необходимо сведения, которые оставил пользователь социальной сети - работа, место жительства, дата рождения, образование. Группы и события на которые подписан владелец страницы, записи на страницы. Помимо этого - сама социальная сеть позволяет просмотреть оставленные "лайки" пользоваталем.
        <Typography gutterBottom>
        <img src="img/fb/3.png" style={{maxWidth: '700px', maxHeight: '700px'}}></img> 
        </Typography>
        </Typography>
        <Typography gutterBottom>
        3. Исследование списка друзей также несёт обязательный характер. Именно они могут сказать, где большинство близкого круга живёт, какой возраст. Список друзей может иметь категории, которые определил владелец страницы "родственники", "друзья по школе" и т.д., в том числе и "недавно добавленные"
        </Typography>
      </div>
      </TabPanel>
      
      <Menu/>
    </div>
  );
}


