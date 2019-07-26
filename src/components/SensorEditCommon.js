import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelActions from '@material-ui/core/ExpansionPanelActions';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Select from './Select';
import TextInput from './TextInput';

const useStyles = makeStyles(theme => ({
  root: {
    // width: '100%',
    // width: 320,
  },
  form: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  heading: {
    fontSize: theme.typography.pxToRem(20),
    fontWeight: theme.typography.fontWeightMedium,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(16),
    // whiteSpace: 'nowrap'
    // color: theme.palette.text.secondary,
  },
  headingInfo: {
    fontSize: theme.typography.pxToRem(12),
    // color: theme.palette.text.secondary,
  },
  icon: {
    verticalAlign: 'bottom',
    height: 20,
    width: 20,
  },
  details: {
    display: 'flex',
    // alignItems: 'center',
    justifyContent: 'space-around',
  },
  button: {
    fontSize: theme.typography.pxToRem(14),
    fontWeight: 600,
    lineHeight: '18px',
    flexBasis: 120,
  },
}));

export default function SensorEditCommon(props) {
  const classes = useStyles();
  const {sensor, handleChange} = props;

  return (
    <div className={classes.root}>
      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography className={classes.secondaryHeading}>Общие параметры</Typography>
        </ExpansionPanelSummary>
        <Divider />
        <form className={classes.form} noValidate autoComplete="off">
          <TextInput value={sensor.id} handleChange={handleChange}/>
          <Select/>
        </form>
        <Divider />
        <ExpansionPanelActions className={classes.details}>
          <Button size1="small" className={classes.button}>Отменить</Button>
          <Button size1="small" color="primary" className={classes.button}>
            Сохранить
          </Button>
        </ExpansionPanelActions>
      </ExpansionPanel>
    </div>
  );
}