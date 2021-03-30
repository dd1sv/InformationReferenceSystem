import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Menu from './menu'
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

export default function Instagram() {
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
      
        <Typography paragraph>
        Поиск изучаемого в Instagram пользователя, может быть сведён к следующим способам:
        </Typography>
        <Typography variant="h6" gutterBottom>
        1. Поиск c помощью поисковых систем. 
        
        </Typography>
        <Typography gutterBottom>
        
        Профиль нужного пользователя можно найти с помощью поисковых операторов применённых в Google, Yandex и других поисковых системах.
        </Typography>
        <Typography gutterBottom >
        Для этого необходимо ввести "site:instagram.com/ **" или "*inurl:instagram.com **", где вместо ** - указывается имя и фамилия, либо никнейм.
        </Typography>
        <Typography gutterBottom variant="h6">
        2. Поиск пользователей по геолокации.
         </Typography>
        <Typography gutterBottom>
        Социальная сеть Instagram позволяет оставлять геометки на своих фотографиях, благодаря чему появляется возможность совершать обратный поиск. Для этого существует несколько вариантов.
		

        </Typography>
        <Typography gutterBottom >
        2.1. Через мобильное приложение зайти в поиск, затем нажать места и ввести адрес или интересующее нас место, после чего анализом выбрать нужные нам фотографии и пользователей. Аналогичная возможность присутствует в браузере.
        </Typography>
        <Typography gutterBottom >
        2.2. Воспользоваться сторонним сервисом поиска по геолокации. <a href="https://www.osintcombine.com/instagram-explorer">Osintcombine</a> имеет схожий функционал с мобильной версией поиска, но позволяет удобно искать в веб-версии
        </Typography>

        <Typography variant="h6" gutterBottom>
        3. Поиск пользователя по разделу «о себе». 
        </Typography>
        <Typography gutterBottom>
        Разработчики не предусмотрели данную функцию, в связи с чем от сторонних производителей ПО, появился сервис  <a href="https://www.searchmy.bio">Searchmy.bio</a>, позволяющий искать профили людей по той информации, которую они оставили в разделе “О себе”.
        
        </Typography>
        <Typography gutterBottom>
        <img src="img/ig/1.png"style={{maxWidth: '600px'}}></img>
        </Typography>
        <Typography gutterBottom variant="h6">
        4. Использование внутреннего поиска приложения
        </Typography>
        <Typography gutterBottom>
       В самом приложении можно осуществить поиск либо по никнейму, либо по имени и фамилии, но данный способ не всегда релевантный.
        </Typography>
        <Typography variant="h6" gutterBottom>
         
         5. Поиск по номеру телефона
         
        </Typography>
        <Typography gutterBottom>
        Имея номер телефона найти пользователя и воспользоваться функцией синхронизации контактов. 
        </Typography>
        <Typography gutterBottom>
        Добавить в телефонную книжку номер телефона, а затем импортировать контакты. Также данный человек может отобразиться в "возможно знакомых"

        </Typography>
       
        
        </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
      <div className={classes.textCenter}>

      <Typography gutterBottom>
      Так как социальная сеть Instagram предназначена для обмена фотографиями и короткими роликами, то именно эта информация вероятнее всего будет интересовать исследователя. Невзирая на это, можно получить ряд дополнительных сведений указанных на изображении
        </Typography>
        <Typography gutterBottom>
        <img src="img/ig/2.png"style={{maxWidth: '700px', maxHeight: '770px'}}></img>
        </Typography>
        <Typography gutterBottom>
      В случае, если профиль закрытый, то рекомендуется использовать легендирование для получения доступа к старнице, то есть под вымышленным предлогом запроситься в друзья.
        </Typography>
        <Typography gutterBottom>
        Перед изучение профиля, исследователю необходимо понимать цель этого действия. Но для расширения имеющихся знаний, будем предполагать изучение всей страницы социальной сети.
        </Typography>
        <Typography gutterBottom>
        Поэтому изучение начать стоит с фотографий, именно они могут сказать кто изображён на них, получить круг общения, места времяпрепровождения. Комментарии под ними также могут нести определённую информацию. Стоит обратить внимание, что к изображениям могут быть прикреплены геометки и хештеги, а также отмечены другие пользователи социальной сети.
        </Typography>
        <Typography gutterBottom>
        Скачать фотографии в максимально возможно качестве, в том числе аватар профиля можно с помощью сервисов <a href="https://gramtools.ru)">gramotool</a>, <a href="https://www.instadp.com">Instadp</a>, <a href="imginn.com">Imginn</a>
        </Typography>
        <Typography gutterBottom>
        Помимо ранее сказанного сервиса поиска фотографий на карте также есть аналогичный - <a href="https://instmap.com/">instmap</a> 
        </Typography>
        <Typography gutterBottom>
        Исследование списка подписчиков и подписок также несёт обязательный характер. Именно они могут сказать, где большинство близкого круга живёт, какой их возраст возраст, чем интересуется пользователей, с кем знаком, его увлечения.
        </Typography>
        <Typography gutterBottom variant="h6">
          В случае, если страница малоифнормативна. То есть вероятность, что ранее пользователь имел статус профиля "открытый" или информация в профиле была изменена. Поэтому есть два способа получить ранее указанную информацию:
         </Typography>
         <Typography gutterBottom>
          а) Использование кешированной версии поисковыми системами Gooogle, Yandex и других с помощью поискового запроса : "site:instagram.com/ *", либо "inurl:instagram.com/*", где в первом варианте может быть указан как id, логин или имя и фамилия, а во втором только id или логин.
         </Typography>
            <Typography gutterBottom>
          б) Использование сохранённой версии страницы в <a href="https://web.archive.org">Waybackmachine </a>, где в строку поиска ввести url адрес страницы.
        </Typography>
        
        </div>
      </TabPanel>
      
      <Menu/>
    </div>
  );
}


