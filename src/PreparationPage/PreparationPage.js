import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    
  },
  button: {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  actionsContainer: {
    // style={{backgroundColor: '#1976d2'}}
    marginBottom: theme.spacing(2),
  },
  resetContainer: {
    padding: theme.spacing(3),
  },
  text: {
    width: '70%',
    
  },
  img: {
    float: 'right',
    width: '100%',
  },
  icon: {
    color: "#1976d2 !important"
  },
}));



function getSteps() {
  return ['Подготовка физического рабочего места', 'Подготовка виртуального рабочего места', 'Регистрация и аутентификацией в социальных сетях и сервисах'];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return `Рабочее место представляет персональный компьютер, в том числе и ноутбук на любой операционной системе, также
              без строго ограничения по техническим характеристикам. Помимо этого необходим смартфон для реализации ряда функций и возможностей`;
    case 1:
      return 'Основной инструмент для поиска информации в социальных сетях является бразуер, рекомендуется использовать на движке Blink (chrome, chromium, vivaldi, opera) или Quantum (Firefox), в связи с большим колличеством расширений и плагинов. Для конфиденциальности рекомендуется - "Privacy Badger" и "Ublock Origin", для просмотра архивной версии страницы - Go Back in Time, для использования мобильных версий сервисов - "User-Agent Switcher", метаданные фотографий - "Exif Viewer", для скачивания видео - "Flash Video Downloader", создание скриншотов сайтов - "Nimbus"';

    case 2:
      return `Большинство социальных сетей и сервисов требуют авторизовация для их использования с помощью email-почты и/или мобильного телефонаю. Для собственной защиты и конфиденциальности, рекомендуется производить регистрацию в социальных сетях с помощью виртуальных SIM-карт и почт, зарегестрированных именно для нужд исследования. Почтовый сервис может использоваться любой, но обязательно не личный. Виртуальную SIM-карту можно получить в следующих сервисах: sms-activate, onlinesim, sms-acktiwator. Социальные сети регистрируется под вымышленным профилем, для того чтобы использовать активный OSINT или отвода подозрений`;
    default:
      return 'Ошибка';
  }
}
function getStepIMG(step) {
  switch (step) {
    case 0:
      return (<img src='img/img1.png'></img>)
    case 1:
      return (<img src='img/img2.png'></img>)

    case 2:
      return (<img src='img/img3.png'></img>)

    default:
      return 'Unknown step';
  }
}

export default function PreparationPage() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel color="primary" StepIconProps={{
                                      classes: {active: classes.icon,
                                        completed: classes.icon}}}>
                                        {label}
                                        </StepLabel>
            <StepContent>
              <Typography className={classes.text}>{getStepContent(index)}</Typography>
              <Typography className={classes.img}>{getStepIMG(index)}</Typography>
              <div className={classes.actionsContainer} >
                <div>
                  <Button
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    className={classes.button}
                   
                  >
                   Назад
                  </Button>
                  <Button
                   style={{backgroundColor: '#1976d2'}}
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                    className={classes.button}
                  >
                    {activeStep === steps.length - 1 ? 'Закончить' : 'Далее'}
                  </Button>
                </div>
              </div>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Paper square elevation={0} className={classes.resetContainer}>
          <Typography>Все шаги выполнены, перейдите к просмотру сервисов для поиска или способами поиска в социальных сетях</Typography>
          <Link to='/'>
          <Button className={classes.button}>
            Вернуться на главную страницу
          </Button>
          </Link>
        </Paper>
      )}
    </div>
  );
}

// onClick={handleReset}

