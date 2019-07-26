import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelActions from '@material-ui/core/ExpansionPanelActions';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import SensorEditList from './SensorEditList';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles(theme => ({
  root: {
    // width: '100%',
    // width: 600,
  },
  heading: {
    fontSize: theme.typography.pxToRem(20),
    fontWeight: 600,
    lineHeight: '24px',
  },
  panel: {
    paddingLeft: 14,
    paddingRight: 18,
  },
  headingInfo: {
    fontSize: theme.typography.pxToRem(12),
    lineHeight: '24px',
    marginLeft: 23,
  },
  details: {
    padding: 0,
  },
  button: {
    fontSize: theme.typography.pxToRem(14),
    fontWeight: 600,
    lineHeight: '18px',
    flexBasis: 120,
  },
}));

export default function SensorEdit(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ExpansionPanel defaultExpanded>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1c-content"
          id="panel1c-header"
          className={classes.panel}
        >
          <Typography className={classes.heading}>{props.sensor.id}</Typography>
          <Typography className={classes.headingInfo}>{props.sensor.indicator}</Typography>

          <IconButton aria-label="Search" style={{position: 'absolute',right: 40, top: 8}}>
            <MoreVertIcon />
          </IconButton>

        </ExpansionPanelSummary>
        <Divider />
        <ExpansionPanelDetails className={classes.details}>
          {props.sensor && <SensorEditList sensor={props.sensor} />}
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
}