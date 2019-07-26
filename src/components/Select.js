import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: 24,
    marginTop: 0,
    marginBottom: 34,
    width: '100%',
  },
  inputLabel: {
    // fontSize: 14,
  },
  selectEmpty: {
    fontSize: theme.typography.pxToRem(12),
    marginTop: theme.spacing(2),
  },
}));

export default function SimpleSelect() {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    type: 10,
  });

  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0);
  // React.useEffect(() => {
  //   setLabelWidth(inputLabel.current.offsetWidth);
  // }, []);

  function handleChange(event) {
    setValues(oldValues => ({
      ...oldValues,
      [event.target.name]: event.target.value,
    }));
  }

  return (
      <FormControl className={classes.formControl}>
        <InputLabel className={classes.inputLabel} htmlFor="age-label-placeholder">Тип датчика</InputLabel>
        <Select
          value={values.type}
          onChange={handleChange}
          input={<Input name="type" id="age-label-placeholder" />}

          name="type"
          className={classes.selectEmpty}
        >
          <MenuItem value="none">
            <em>Не выбран</em>
          </MenuItem>
          <MenuItem value={10}>Датчик температуры</MenuItem>
          <MenuItem value={20}>Датчик температуры 2</MenuItem>
          <MenuItem value={30}>Датчик температуры 3</MenuItem>
        </Select>
        {/*<FormHelperText>Label + placeholder</FormHelperText>*/}
      </FormControl>
  );
}