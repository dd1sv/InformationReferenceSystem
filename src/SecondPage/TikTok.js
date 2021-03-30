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

export default function TikTok() {
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
        Поиск в Tik-Tok
        </Typography>
        <Typography variant="h6" gutterBottom>
        Чаще всего профиль Tik-Tok указан в других социальных сетях, так как, если автор является активным её пользователем, то он заинтересован в привлечении новых подписчиков.
        
        </Typography>
        <Typography gutterBottom>
        В обратном случае, профиль можно найти как из самой социальной сети по имени и фамилии, либо никнейму.
         </Typography>
         <Typography gutterBottom variant="h6">
        Первый вариант это использовать поиск в самой социальной сети:
         </Typography>
        <Typography gutterBottom >
        <img src="img/tt/1.jpg" style={{maxWidth: '700px'}}></img>
        </Typography>
       

        <Typography variant="h6" gutterBottom>
        Второй вариант использовать поисковые системы, фильтруя поиск поисковыми операторами
        </Typography>
        <Typography gutterBottom>
        "inurl:https://m.tiktok.com/h5/share/usr filetype:html ***" - данный вариант позволяет перебирать множество вариантов профилей, и не только по никнейму, а по сопутствующей информации в профиле
        </Typography>
        <Typography gutterBottom>
        аналогичным можно считать запрос "site:https://m.tiktok.com ***", позволяет найти профиль методом перебора, если точное имя пользователя неизвестно, то есть необходимо указать вместо «***» - предполагаемый никнейм или имя и фамилию
        </Typography>
       
        <Typography variant="h6" gutterBottom>
         Третим вариантов можно считать поиск по дополнительной информации, если есть фотографии с человеком, то воспользоваться поиском по картинкам от Яндекс или Google. Либо исследумые объект в других социальных сетях указывал свой персональный хештег, что также может его идентифицировать.
         
        </Typography >
        <Typography gutterBottom variant="h6">
        Четвёртый вариант - поиск по номеру телефону с помощью функции синхронизации контактов. 
        </Typography>
        <Typography gutterBottom>
        После синхронизации контактов, как указано на изображении снизу. Профиль зарегестрированный на номер телефона в записной книжке телефона будет отображён со временем во вкладке "Интересное"

        </Typography>
        <Typography gutterBottom>
        <img src="img/tt/3.jpg"style={{maxWidth: '700px'}}></img>

        </Typography>
        
        </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
      <div className={classes.textCenter}>

      <Typography gutterBottom>
      Профиль в Tik-Tok может быть закрыт, но в случае его открытости и наличия видео можно получить множество информации.
        </Typography>
        <Typography gutterBottom>
        <img src="img/tt/4.png"style={{maxWidth: '700px', maxHeight: '770px'}}></img>
        </Typography>
        <Typography gutterBottom>
        Перед изучение профиля, исследователю необходимо понимать цель этого действия. Но для расширения имеющихся знаний, будем предполагать изучение всего профиля социальной сети.
        </Typography>
        <Typography gutterBottom variant="h6">
        1. Поэтому изучение начать стоит с информации, которая закреплена в профиле - это может номер телефона, никнейм, другие социальные сети и лююая другая дополнительная информация
        </Typography>
        <Typography gutterBottom variant="h6">
        2. После чего изучить необходимо видеоролики, которые опубликовал исследуемый объект, если таковые имеются.
        </Typography>
        <Typography gutterBottom>
        Они могут содержать информацию о круге общения, месте жительсвте, увлечениях и другой информации, которую автор ролика оставил неумышленно.
        </Typography>
        <Typography gutterBottom variant="h6">
        3. Изучение, понравившегося контента.
        </Typography>
        <Typography gutterBottom>
        Данная возможность можеть быть скрыта владельцем профиле, но в ином случае мы можем получить ряд интересов пользователя
        </Typography>
        <Typography gutterBottom>
        <img src="img/tt/2.jpg"style={{maxWidth: '700px', maxHeight: '770px'}}></img>
        </Typography>
        <Typography gutterBottom variant="h6">
         4. Использовать заархивированные страницы профилей.
         </Typography>
         <Typography gutterBottom>
          а) Использование сохранённой версии поисковых систем Google, Яндекс, Mail.ru и других. Для начала найдя ссылку в поисковой системе с помощью запросов рассмотренных главе поиска профилей
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


