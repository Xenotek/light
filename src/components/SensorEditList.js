import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import Switch from '@material-ui/core/Switch';
import Icon from '@material-ui/core/Icon';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import IconButton from '@material-ui/core/IconButton';
import SensorEditListPanels from './SensorEditListPanels';
import TextInput2 from './TextInput2';


const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    // maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
    padding: 0
  },
  panelHeading: {
    fontSize: 14,
    fontWeight: 600,
    padding: 0,
  },
  icon: {
    fontSize: 24,
    marginRight: 15,
  },
  listIcon: {
    fontSize: 24,
  },
  imageIcon: {
    height: '100%'
  },
  listItem: {
    width: '100%',
    paddingLeft: 14,
    paddingRight: 14,
  },
  panelListItem: {
    width: '100%',
    padding: 0,
  },
  panelListItemText: {
    fontSize: 12,
  },
  summary: {
    padding: '0 20px 0 14px'
  },
  details: {
    padding: '0 6px 0 14px'
  },
  form: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  input: {
    margin: 0,
  },
}));

export default function SensorEditList(props) {
  const classes = useStyles();
  const [checked, setChecked] = React.useState(['wifi']);

  const {sensor} = props;

  const handleToggle = value => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  return (
    <React.Fragment>
      <List className={classes.root}>

        <ListItem divider style={{width: '100%'}}>
          <ListItemIcon>
              <Icon classes={{root: classes.icon}}><img className={classes.imageIcon} src={`/img/${sensor.type}.svg`}/></Icon>
          </ListItemIcon>
          <ListItemText id="switch-list-label-wifi" primary={sensor.type}/>
          <ListItemSecondaryAction>
            <Switch
              edge="end"
              color="primary"
              onChange={handleToggle('wifi')}
              checked={checked.indexOf('wifi') !== -1}
              inputProps={{'aria-labelledby': 'switch-list-label-wifi'}}
            />
          </ListItemSecondaryAction>
        </ListItem>

        <ListItem divider className={classes.listItem}>
          <ListItemText primary={<React.Fragment>
            <Typography component="span" color="primary" style={{fontSize: 12, marginRight: 16}}>{sensor.devices.name}</Typography>
            <Typography component="span" style={{fontSize: 12}}>{sensor.devices.model}</Typography>
          </React.Fragment>
            }/>
          <ListItemSecondaryAction>
            <IconButton aria-label="Search">
              <MoreVertIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>


        <ListItem divider style={{padding: 0}}>
          <SensorEditListPanels id="1" classes={classes} header={<Typography className={classes.panelHeading}>Показатели датчика</Typography>}>
            <List className={classes.root}>

              <ListItem className={classes.panelListItem}>
                <ListItemText primary={<Typography className={classes.panelHeading}>Текущее значение</Typography>}/>
                <ListItemSecondaryAction>
                  <Typography className={classes.panelHeading}>{sensor.indicator}</Typography>
                </ListItemSecondaryAction>
              </ListItem>

              <ListItem className={classes.panelListItem}>
                <ListItemText primary={<Typography className={classes.panelListItemText}>Диапазон</Typography>}/>
                <ListItemSecondaryAction>
                  <Typography className={classes.panelListItemText}>от -10 до +30 °C</Typography>
                </ListItemSecondaryAction>
              </ListItem>

              <ListItem className={classes.panelListItem}>
                <ListItemText primary={<Typography className={classes.panelListItemText}>Мин. значение</Typography>}/>
                <ListItemSecondaryAction>
                  <Typography className={classes.panelListItemText}>-5 °C</Typography>
                </ListItemSecondaryAction>
              </ListItem>

              <ListItem className={classes.panelListItem} >
                <ListItemText primary={<Typography className={classes.panelListItemText}>Макс. значение</Typography>}/>
                <ListItemSecondaryAction>
                  <Typography className={classes.panelListItemText}>+15 °C</Typography>
                </ListItemSecondaryAction>
              </ListItem>
              <div style={{paddingBottom: 30}} />

            </List>
          </SensorEditListPanels>
        </ListItem>

        <ListItem style={{padding: 0}}>
          <SensorEditListPanels id="2" classes={classes} header={<Typography className={classes.panelHeading}>Оптимальное значение*</Typography>}>
            <List className={classes.root}>
              <ListItem style={{padding: 0, paddingBottom: 20}}>
                  <TextInput2 value={15} helperText="от -10 до +30 °C"/>
              </ListItem>

              <ListItem  style={{padding: 0}}>
                <Typography style={{fontSize: 10}}>* При изменении значения на ±20% от оптимального пользователь получает уведомление об ошибке</Typography>
              </ListItem>
              <div style={{paddingBottom: 20}} />
            </List>

          </SensorEditListPanels>
        </ListItem>
      </List>

    </React.Fragment>
  );
}

















