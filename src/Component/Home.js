import React, { useState, useEffect } from "react";
import { Grid } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { Link } from "react-router-dom";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Pagination from "@material-ui/lab/Pagination";

const Home = () => {
  const [datarr, setDatarr] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetch(`https://reqres.in/api/users?page=${page}`)
      .then((res) => res.json())
      .then((result) => {
        console.log(result)
        setDatarr(result.data);
      });
  }, [page]);
  return (
    <Grid container direction="column">
      <Grid item style={{ marginBottom: "2.5rem" }}>
        <AppBar position="static">
          <Toolbar variant="dense">
            <Typography variant="h6" color="inherit">
              LOGO
            </Typography>
            <div style={{ marginLeft: 'auto', display: 'flex' }}>
              <div><Link to='/register' style={{ color: 'white', textDecoration: 'none', margin: '0 15px' }}>Register</Link></div>
              <div><Link to='/logout' style={{ color: 'white', textDecoration: 'none', margin: '0 15px' }}>Logout</Link></div>
            </div>
          </Toolbar>
        </AppBar>
      </Grid>
      <Grid item>
        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Id</TableCell>
                <TableCell align="right">First Name</TableCell>
                <TableCell align="right">Last Name</TableCell>
                <TableCell align="right">Email</TableCell>
                <TableCell align="right">Image URL</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {datarr.map((row) => (
                <TableRow key={row.name}>
                  <TableCell component="th" scope="row">
                    {row.id}
                  </TableCell>
                  <TableCell align="right">{row.first_name}</TableCell>
                  <TableCell align="right">{row.last_name}</TableCell>
                  <TableCell align="right">{row.email}</TableCell>
                  <TableCell align="right">{row.avatar}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
      <Grid item style={{ margin: "5rem auto" }}>
        <Pagination
          count={2}
          color="primary"
          size="large"
          defaultPage={page}
          onChange={(e, value) => setPage(value)}
          shape="rounded"
          variant="outlined"
        />
      </Grid>
    </Grid>
  );
};
export default Home;
