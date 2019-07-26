import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({

  textField: {
    margin: 24,
    width: '100%',
    fontSize: 12,
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
        label="ID устройства"
        value={value}
        onChange={handleChange}
        type="number"
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
        margin="normal"

      />
  );
}
