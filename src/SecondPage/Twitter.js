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

export default function Twitter() {
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
        <Tab label="Получение метаинформации" {...a11yProps(2)} />
        {/* <Tab label="Item Four" {...a11yProps(3)} />
        <Tab label="Item Five" {...a11yProps(4)} />
        <Tab label="Item Six" {...a11yProps(5)} />
        <Tab label="Item Seven" {...a11yProps(6)} /> */}
      </Tabs>
      <TabPanel value={value} index={0}>
      <div className={classes.textCenter}>
      <Typography paragraph>
        Для получения какой-либо информации о человеке, необходим материал с которым будет происходить работа.
        </Typography>
        <Typography paragraph>
        В связи с этим сам поиск профиля/аккаунта человека можно осуществить следующими образами:
        </Typography>
        <Typography variant="h6" gutterBottom>
        1. Поиск с помощью предусмотренной разработчиками функцией на <a href="https://twitter.com/explore">главной странице </a> по имеющимся данным(фамилия и имя, никнейм)
        
        </Typography>
        <Typography gutterBottom >
        <img src="img/tw/1.png" style={{maxWidth: '500px', maxHeight: '500px'}}></img>
        </Typography>
        <Typography gutterBottom variant="h6">
         2. <a href="https://twitter.com/search-advanced">Расширенный поиск в Twitter</a>. Имеет большой функционал, позволяет выполнять поиск определенных людей, их сообщений и ответов, также ключевых слов, хэштегов и имеет сортировку по дате. Проблема здесь заключается в том, что поиск сообщения часто ограничивается предыдущими семью - десятью днями. 
         </Typography>
         <Typography gutterBottom >
        <img src="img/tw/1.png" style={{maxWidth: '500px', maxHeight: '500px'}}></img>
        </Typography>
        <Typography gutterBottom>
          Граммотное использование имеющейся информации может сильно сузить круг, но при этом стоит учитывать, что владелец аккаунта может использовать аккаунт не под своим настоящем именем или искажать дополнительную информацию, с целью усложенения его поиска. Поэтому осуществление поиска различными комбинациями будет наиболее выигрышным вариантом
        </Typography>

        <Typography variant="h6" gutterBottom>
         3. Поиск c помощью  <a href="https://twitter.com/i/directory/profiles">каталога Twitter</a>
        </Typography>
        <Typography gutterBottom>
        Это база данных пользователей, позволяющая находить человека по имени и фамилии (никнейму). Полезна при поиске заранее известного имени, где изначально при регистрации пользователям была совершена грамматическая или орфографическая ошибка.
        </Typography>
        <Typography variant="h6" gutterBottom>
         4. Поиск с помощью операторов в поисковых системах.
        </Typography>
        <Typography gutterBottom>
        Если из информации, который распологает исследователь, есть только набор разрозненных данных, то можно комбинировав их найти профиль исследумой цели.
        </Typography>
        <Typography gutterBottom>
         "site: twitter.com/ ***", где вместо *** подставляем имеющиеся сведения (часть возможного никнейма, город и имя и т.д.)
        </Typography>
        
        
        
       
        <Typography gutterBottom variant="h6">
        5. Поиск по номеру телефона сводиться к синхронизации контактов с социальной сетью.

        </Typography>
        <Typography gutterBottom>
        <img src="img/tw/3.png"style={{maxWidth: '500px', maxHeight: '500px'}}></img>

        </Typography>
       
        </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
      <div className={classes.textCenter}>
      <Typography gutterBottom>
      В профиле Twitter может находиться различная информация о пользователе, которую он сам указал. Но помимо этого, существует сервисы, которые значительно упрощают поиск и расширают границы ручного сбора и поиска сведений, которые указаны на изображении
        </Typography>
        <Typography gutterBottom>
        <img src="img/tw/4.png"style={{maxWidth: '700px', maxHeight: '770px'}}></img>
        </Typography>
        <Typography gutterBottom>
     
        </Typography>
        <Typography gutterBottom>
        1. Сервис <a href="followerwonk.com">Followerwonk</a>
        </Typography>
        <Typography gutterBottom>
        Данный сервис работает только с открытыми профилями и после авторизации, позволяет проанализировать подписчиков пользователя. Также сервис позволяет искать пользователей одновременно или по раздельности категорируя на: города, фамилии и имена, никнеймы, количество подписчиков, сообщений, ключевым словам.
Ещё наиболее полезная опция — это анализ общих подписчиков и подписок пользователей, что наиболее верно может установить связь между людьми и ответит на вопросы - если ли у них общие знакомые, друзья.
        </Typography>
        <Typography gutterBottom>
        2. Сервис <a href="https://spoonbill.io">Spoonbill</a>
        </Typography>
        <Typography gutterBottom>
        Пользователи Twitter в процессе своего времяпрепровождения в сети, могут менять не только свой никнейм, но и другую информацию - свои твиты, геолокацию, свои посты, информацию о себе. Именно это и покажет данный сервис по временным отрезкам.
Для просмотра информации стоит перейти по url-адресу: spoonbill.io/twitter/data/*, где * — это никнейм исследуемой цели.
        </Typography>
        <Typography gutterBottom>
        3.  <a href="http://mapd.csail.mit.edu/tweetmap/">MapD: MIT</a>
        </Typography>
        <Typography gutterBottom>
        MapD - это платформа баз данных, которая может выполнять поиск по хештегу, имени пользователя или геопозиции твитов. Также можно комбинировать все три варианта для детального поиска.
        </Typography>
        <Typography gutterBottom>
        4. <a href="http://twitonomy.com">Twitonomy</a> и <a href="http://foller.me/tweetmap/">FollerMe</a>
        </Typography>
        <Typography gutterBottom>
        Сервисы, предназначенные для более детальной аналитики профиля.
Позволяют проанализировать следующие категории: с каких устройств пользователь оставляет твиты, кто подписан(их статистика), какие хештеги наиболее часто используются, каким пользователям чаще отвечает исследуемый объект, в какое время и по каким дням совершается опубликование сообщений, а также количество ответов, отметок «мне нравиться», ретивтов и другой сопутствующей информации, в том числе время возможного сна пользователя.
        </Typography>
        </div>
      </TabPanel>
      <TabPanel value={value} index={2}>
      <div className={classes.textCenter}>
      <Typography gutterBottom variant="h6">
        Дополнительно расширить и собрать в удобном виде для анализа информации могут следующие сервисы:
        </Typography>
        <Typography gutterBottom >
          1. <a href="socialrank.com/firstfollower">Socialrank</a>
         </Typography>
         <Typography gutterBottom>
         Данный сервис показывает первого подписавшегося на аккаунт исследуемой цели, что вероятнее всего данный пользователь близок исследуемому объекту.
         </Typography>
         <Typography gutterBottom >
          2. <a href="https://tweetbeaver.com">TweetBeaver</a> - многофункциональный сервис создания отчётов о пользователях Twitter
         </Typography>
         <Typography gutterBottom>
         Включает в себя 14 функций: конвертация никнейма и обратное действие, проверка, подписаны ли две учётным записи друг на друга как следует из названия, просмотр или скачивание понравившихся записей исследуемому объекту, поиск, по ключевым словам, в понравившихся записях, загрузка сообщений пользователя, поиск по временной шкале сообщений пользователя, получение данныз об учётной записи пользователя, получение информации о друзьях и подписчиках пользователя, поиск общих подписчиков и друзей, поиск ретвтов двух пользователей
         </Typography>
        <Typography gutterBottom>
        <img src="img/tw/5.png" style={{maxWidth: '600px'}}></img> 
        </Typography>
        <Typography gutterBottom >
          3. <a href="https://onemilliontweetmap.com">One Million Tweet Map</a>
         </Typography>
         <Typography gutterBottom>
         Этот сервис отображает только один миллион последних сообщений на мировой карте. Но твиты постоянно обновляются, и могут не дать нам времени полностью проанализировать информацию.счиках пользователя, поиск общих подписчиков и друзей, поиск ретвтов двух пользователей
         </Typography>
         <Typography gutterBottom >
          4. <a href="https://tweetdeck.com">Tweet Deck</a>
         </Typography>
         <Typography gutterBottom>
         Сервис Tweet Deck принадлежит Twitter, и он позволяет по заданным параметрам и категориям отфильтровать информацию, для дальнейшего анализа за счёт точного расширенного поиска с большим рядом функций, в отличий от стандартного. 
Один из наиболее очевидных сценариев использования Tweetdeck в разрезе OSINT — снижение уровня шума в рабочей выборке твитов.
         </Typography>
         <Typography gutterBottom variant="h6">
        Помимо этого, сущесвтуют и поисковые запросы в самом Twitter.
        </Typography>
        <Typography gutterBottom >
          Они могут как найти твиты в определённом местоположении, так и отфильтровать ответы на твиты человека. Вводить их необходимо в поисковой строке Twitter
         </Typography>
         <Typography gutterBottom>
         Поиск местоположения - "geocode:59.844927, 30.138262,1km". Тут вводятся координаты точки без пробелов, а также радиус области (в километрах)
         </Typography>
         <Typography gutterBottom>
         Поиск по диапазону дат. Расширенный поиск Twitter ограничивает в поиске по дате, и позволяет включить фильтр только от определённой даты. Для того чтобы произвести более конкретный запрос необходимо указать оператор поиска «since:» (это «с») и «until:» («это до») и поставить после каждого дату. Пример: «since:2021-01-01 until:2021-01-21». Для поиска с использование ключевых слов, их необходимо добавить в кавычки после пробела.
         </Typography>
         <Typography gutterBottom>
         
         Необходимо отметить, что вместо ключевых слов можно указать имя исследуемого объекта. Это может помочь в случае, если у искомой цели множество тысяч сообщений. Для этого необходимо в поиске использовать помимо операторов даты, оператор «from». К примеру: «from:elonmusk since:2021-01-01 until:2021-01-30», это отобразит сообщения Илона Маска от первого января 2021 года до 30 января 2021 года. А также может быть применено ключевое слово без кавычек как в ранее указанном примере. Пример: «from:elonmusk next since:2021-01-01 until:2021-01-30», в данном случае вышесказанный запрос отфильтрует сообщения с ключевым словом «next».
         </Typography>
         <Typography gutterBottom variant="h6">
          В случае, если страница малоифнормативна. То есть вероятность, что ранее пользователь её размщал. Поэтому есть два способа её получить:
         </Typography>
         <Typography gutterBottom>
          а) Использование кешированной версии поисковыми системами Gooogle, Yandex и других с помощью поискового запроса : "site:twitter.com/ *", либо "inurl:twitter.com/*", где в первом варианте может быть указан как id, логин или имя и фамилия, а во втором только id или логин.
         </Typography>
            <Typography gutterBottom>
          б) Использование сохранённой версии страницы в <a href="https://web.archive.org">Waybackmachine </a>, где в строку поиска ввести url адрес страницы.
        </Typography>

      </div>
      </TabPanel>
      {/* <TabPanel value={value} index={3}>
        Item Four
      </TabPanel>
      <TabPanel value={value} index={4}>
        Item Five
      </TabPanel>
      <TabPanel value={value} index={5}>
        Item Six
      </TabPanel>
      <TabPanel value={value} index={6}>
        Item Seven
      </TabPanel> */}
      <Menu/>
    </div>
  );
}


