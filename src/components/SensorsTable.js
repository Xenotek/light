import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {lighten, makeStyles} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import Divider from '@material-ui/core/Divider';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import ArrowDropDown from '@material-ui/icons/ArrowDropDown';
import DeleteIcon from '@material-ui/icons/Delete';
import FilterListIcon from '@material-ui/icons/FilterList';
import SearchIcon from '@material-ui/icons/Search';
import {stableSort, getSorting} from './TableHelpers';


const headRows = [
  {id: 'id', numeric: true, disablePadding: true, label: 'ID'},
  {id: 'type', numeric: false, disablePadding: false, label: 'Тип'},
  {id: 'device', numeric: false, disablePadding: false, label: 'Устройство'},
  {id: 'map', numeric: false, disablePadding: false, label: 'Положение'},
  {id: 'indicator', numeric: false, disablePadding: false, label: 'Показатель'},
];

const useTableHeadStyles = makeStyles(theme => ({
  tableCell: {
    paddingLeft: 9,
  },
  button: {
    padding: 0,
    color: theme.palette.primary.light
  },
  icon: {
    fontSize: 24,
    marginRight: 15,
  },
  imageIcon: {
    height: '100%'
  },
  text: {
    fontSize: 14,
  },
}));


function EnhancedTableHead(props) {
  const classes = useTableHeadStyles();
  const {onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort} = props;
  const createSortHandler = property => event => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox" className={classes.tableCell}>
          <Checkbox
            color="primary"
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{'aria-label': 'select all desserts'}}
          />
        </TableCell>
        {headRows.map(row => (
          <TableCell
            key={row.id}
            align={row.numeric ? 'left' : 'right'}
            padding={row.disablePadding ? 'none' : 'default'}
            sortDirection={orderBy === row.id ? order : false}
          >
            <TableSortLabel
              IconComponent={ArrowDropDown}
              active={orderBy === row.id}
              direction={order}
              onClick={createSortHandler(row.id)}
            >
              {row.label}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>

      <TableRow>
        <TableCell colSpan={headRows.length + 1} padding="default" style={{paddingLeft: 21}}>
          <Typography className={classes.text}>
            <Button color="primary" className={classes.button}>
              <Icon classes={{root: classes.icon}}>
                <img className={classes.imageIcon} src="/img/add.svg"/>
              </Icon>
              Добавить датчик
              {/*<Icon className={classes.icon}>add_circle</Icon> Добавить датчик*/}
            </Button>
          </Typography>
        </TableCell>
      </TableRow>

    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

const useToolbarStyles = makeStyles(theme => ({
  root: {
    paddingLeft: 21,
    // paddingRight: theme.spacing(1),
  },
  highlight: theme.palette.type === 'light'
    ? {
      color: theme.palette.secondary.main,
      backgroundColor: lighten(theme.palette.primary.light, 0.85),
    }
    : {
      color: theme.palette.text.primary,
      backgroundColor: theme.palette.primary.dark,
    },
  spacer: {
    flex: '1 1 100%',
  },
  actions: {
    color: theme.palette.text.secondary,
  },
  icons: {
    display: 'flex'
  },
  title: {
    flex: '0 0 auto',
  },
}));

const EnhancedTableToolbar = props => {
  const classes = useToolbarStyles();
  const {numSelected} = props;

  return (
    <Toolbar
      className={clsx(classes.root, {
        [classes.highlight]: numSelected > 0,
      })}
    >
      <div className={classes.title}>
        {numSelected > 0 ? (
          <Typography color="primary" variant="subtitle1">
            {numSelected} выбрано
          </Typography>
        ) : (
          <Typography variant="h1" id="tableTitle">
            Датчики
          </Typography>
        )}
      </div>
      <div className={classes.spacer}/>
      <div className={classes.actions}>
        {numSelected > 0 ? (
          <Tooltip title="Delete">
            <IconButton aria-label="delete">
              <DeleteIcon />
            </IconButton>
          </Tooltip>
        ) : (
          <div className={classes.icons}>
          <Tooltip title="Filter list">
            <IconButton aria-label="filter list">
              <FilterListIcon />
            </IconButton>
          </Tooltip>
            <Tooltip title="Search">
              <IconButton aria-label="Search">
                <SearchIcon />
              </IconButton>
            </Tooltip>
          </div>
        )}
      </div>
    </Toolbar>
  );
};

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
};

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
  paper: {
    width: '100%',
  },
  table: {
    minWidth: 750,
  },
  tableWrapper: {
    overflowX: 'auto',
  },
  tableCell: {
    paddingLeft: 9,
  },
  icon: {
    fontSize: 26,
    marginRight: 13,
  },
  imageIcon: {
    height: '100%'
  },
  type: {
    fontSize: 12,
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row'
  },
  devices: {
    fontSize: 10,
    display: 'flex',
    flexDirection: 'column'
  },
  deviceName: {
    color: theme.palette.primary.main
  },
  link: {
    fontSize: 10,
  },
}));

export default function EnhancedTable(props) {
  const classes = useStyles();
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('calories');
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const {rows} = props;

  function handleRequestSort(event, property) {
    const isDesc = orderBy === property && order === 'desc';
    setOrder(isDesc ? 'asc' : 'desc');
    setOrderBy(property);
  }

  function handleSelectAllClick(event) {
    if (event.target.checked) {
      const newSelecteds = rows.map(n => n.id);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  }

  function handleClick(event, id) {
    event.stopPropagation();
    const selectedIndex = selected.indexOf(id);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }

    // props.handleSelectSensor(id);
    setSelected(newSelected);
  }

  function handleChangePage(event, newPage) {
    setPage(newPage);
  }

  function handleChangeRowsPerPage(event) {
    setRowsPerPage(+event.target.value);
    setPage(0);
  }

  // function handleChangeDense(event) {
  //   setDense(event.target.checked);
  // }

  const isSelected = name => selected.indexOf(name) !== -1;

  const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <EnhancedTableToolbar numSelected={selected.length}/>
        <Divider />
        <div className={classes.tableWrapper}>
          <Table
            className={classes.table}
            aria-labelledby="tableTitle"
            size={dense ? 'small' : 'medium'}
          >
            <EnhancedTableHead
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
            />
            <TableBody>
              {stableSort(rows, getSorting(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  const isItemSelected = isSelected(row.id);
                  const isItemActive = props.sensor ? props.sensor.id == row.id : false;
                  const labelId = `enhanced-table-checkbox-${index}`;

                  return (
                    <TableRow
                      hover
                      onClick={event => props.handleSelectSensor(row.id)}
                      role="checkbox"
                      aria-checked={isItemActive}
                      tabIndex={-1}
                      key={row.id}
                      selected={isItemActive}
                    >
                      <TableCell padding="checkbox" className={classes.tableCell}>
                        <Checkbox
                          color="primary"
                          checked={isItemSelected}
                          inputProps={{'aria-labelledby': labelId}}
                          onClick={event => handleClick(event, row.id)}
                        />
                      </TableCell>
                      <TableCell component="th" style={{fontSize: 12, paddingLeft: 0}} id={labelId}
                                 scope="row"> {row.id} </TableCell>
                      <TableCell align="right">
                        <div className={classes.type}>
                          <Icon classes={{root: classes.icon}}><img className={classes.imageIcon}
                                                                    src={`/img/${row.type}.svg`}/></Icon>
                          <div>{row.type}</div>
                        </div>
                      </TableCell>
                      <TableCell align="right">
                        <div className={classes.devices}>
                          <div className={classes.deviceName}>{row.devices.name}</div>
                          <div>{row.devices.model}</div>
                        </div>
                      </TableCell>
                      <TableCell align="right" className={classes.link}><Link color="primary">{row.map}</Link>
                      </TableCell>
                      <TableCell align="right" style={{fontSize: 12}}>{row.indicator}</TableCell>
                    </TableRow>
                  );
                })}
              {emptyRows > 0 && (
                <TableRow style={{height: 49 * emptyRows}}>
                  <TableCell colSpan={6}/>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          backIconButtonProps={{
            'aria-label': 'previous page',
          }}
          nextIconButtonProps={{
            'aria-label': 'next page',
          }}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </Paper>
      {/*<FormControlLabel*/}
      {/*control={<Switch checked={dense} onChange={handleChangeDense} />}*/}
      {/*label="Dense padding"*/}
      {/*/>*/}
    </div>
  );
}
