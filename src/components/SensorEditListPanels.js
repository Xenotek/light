import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import MuiExpansionPanel from '@material-ui/core/ExpansionPanel';
import MuiExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import MuiExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const ExpansionPanel = withStyles({
  root: {
    width: '100%',
    boxShadow: 'none',
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:before': {
      display: 'none',
    },
  },
  expanded: {},
})(MuiExpansionPanel);

const ExpansionPanelSummary = withStyles({
  root: {
    marginBottom: -1,
    minHeight: 56,
    '&$expanded': {
      minHeight: 56,
    },
  },
  // content: {
  //   '&$expanded': {
  //     margin: '12px 0',
  //   },
  // },
  expanded: {},
})(MuiExpansionPanelSummary);

const ExpansionPanelDetails = withStyles(theme => ({
  root: {
  },
}))(MuiExpansionPanelDetails);

export default function SensorEditListPanels(props) {
  const [expanded, setExpanded] = React.useState('panel'+props.id);
  const {classes} = props;

  const handleChange = panel => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
      <ExpansionPanel square expanded={expanded === 'panel'+props.id} onChange={handleChange('panel'+props.id)}>
        <ExpansionPanelSummary className={classes && classes.summary} expandIcon={<ExpandMoreIcon />} aria-controls={`panel${props.id}d-content`} id={`panel${props.id}d-header`}>
          {props.header}
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className={classes && classes.details}>
          {props.children}
        </ExpansionPanelDetails>
      </ExpansionPanel>
  );
}

