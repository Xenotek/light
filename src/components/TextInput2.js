import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
  textField: {
    width: '100%',
    fontSize: 12,
    margin: 0,
    paddingRight: 18
  },
}));


export default function TextFields(props) {
  const classes = useStyles();
  const [value, setValues] = React.useState(props.value);

  const handleChange = event => {
    setValues(event.target.value);
  };
  return (
      <TextField
        id="standard-number"
        value={value}
        onChange={handleChange}
        type="number"
        className={classes.textField}
        helperText={props.helperText}
        margin="normal"
      />
  );
}
