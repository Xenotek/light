import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import SensorsTable from './SensorsTable';
import SensorEdit from './SensorEdit';
import SensorEditCommon from './SensorEditCommon';
import axios from 'axios';
import _ from 'lodash';

const useStyles = makeStyles(theme => {
    return ({
      root: {
        // flexGrow: 1,
        padding: theme.spacing(3),
        // marginRight: 31,
        // [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
        //   width: 600,
        //   marginLeft: 'auto',
        //   marginRight: 'auto',
        // },
      },
      heading: {
        fontSize: theme.typography.pxToRem(20),
        fontWeight: 600,
        padding: 21,
      },
      header: theme.cardInfoTitle,
      buttons: {
        display: 'flex',
        justifyContent: 'flex-end',
      },
      button: {
        marginTop: theme.spacing(3),
        marginLeft: theme.spacing(1),
      },
    })
  })
;


export default function Sensors() {
  const classes = useStyles();
  const [sensorActive, setActiveSensor] = React.useState(null);
  const [sensors, setSensors] = React.useState([]);

  const handleSelectSensor = (id) => {
    const sensor = _.find(sensors, {id});
    if (sensor) {
      setActiveSensor(_.cloneDeep(sensor));
    }
  };

  const handleChange = (event) => {
    console.log(event);
    const sensorId = event.target.value;
    const oldId = event.currentTarget.dataset.id;
    console.log(event.currentTarget.dataset);
    if (sensorId) {
      console.log(sensors, sensorId, oldId);
      const sensorIndex = _.findIndex(sensors, {id: oldId});
      if (sensorIndex > -1) {
        sensors[sensorIndex].id = sensorId;
        setSensors(sensors);
      }
    }
  };

  React.useEffect(() => {
    axios.get('data.json').then((response) => {
      const data = response.data;
      setSensors(data.map((sensor) => {
        sensor.device = sensor.devices.name + sensor.devices.model;
        return sensor
      }));
    })
  }, []);

  // const {sensors, sensorActive} = this.state;
  // const handleClearSelectSensor = (id) => {
  //   setActiveSensor(null);
  // };

  return (
    <main className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={8} lg={6}>
          <SensorsTable rows={sensors} handleSelectSensor={handleSelectSensor} sensor={sensorActive} />
        </Grid>
        {sensorActive && <Grid item xs={12} sm={4} lg={3}>
          <Grid container spacing={2}>
            <Grid item xs={12}><SensorEdit  sensor={sensorActive}/></Grid>
            <Grid item xs={12}><SensorEditCommon handleChange={handleChange} sensor={sensorActive}/></Grid>
          </Grid>
        </Grid>}
      </Grid>
    </main>
  );
}






