import React from 'react';

import {MuiThemeProvider, createMuiTheme} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import SensorsList from './components/Sensors';
import './style.scss';

const theme = createMuiTheme({
  typography: {
    fontFamily: [
      'Montserrat', 'Arial', 'sans-serif'
    ],
    h1: {
      fontWeight: 600,
      fontSize: 20
    },
    button: {
      textTransform: 'none'
    }
  },
  palette: {
    primary: {
      main: '#F8BC3A',
      light: '#FDC605',
    }
  },
  status: {
    danger: 'orange',
  },
  overrides: {
    MuiInputLabel: {
      root: {
        fontSize: 14,
      },
    },
    MuiInputBase: {
      root: {
        fontSize: 12,
      },
    },
    MuiExpansionPanelSummary: {
      root: {
        minHeight: 61,
        '&$expanded': {
          minHeight: 61,
        },
      },

    },
  }

});

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <SensorsList/>
      {/*<Checkout/>*/}

    </MuiThemeProvider>
  );
}

export default App;
