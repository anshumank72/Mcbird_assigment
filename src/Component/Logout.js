import React from 'react';
import {
    Grid,
    Typography,
    Button,
    Divider,
  } from "@material-ui/core";
import { Redirect } from 'react-router';
import { useHistory } from "react-router-dom";

const logout=(props)=>{
    const history = useHistory();
    const logoutHandler=()=>{
        localStorage.removeItem('token')
        history.push('/')
    }

    return( <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        style={{ backgroundColor: "#c4f2ef", height: "100vh" }}
      >
        <Grid
          item
          container
          direction="column"
          alignItems="center"
          justifyContent="space-evenly"
          style={{
            height: "80vh",
            width: "35%",
            backgroundColor: "white",
            borderRadius: "5px",
            boxShadow: "5px 5px 5px -2px rgba(0,0,0,0.36)",
          }}
        >
          <Grid item style={{ backgroundColor: "#6d70ed", borderRadius: "3px" }}>
            <Typography
              variant="h5"
              style={{ color: "white", padding: "5px 10px" }}
            >
              Mcbird
            </Typography>
          </Grid>
          <Grid item>
            <Grid
              container
              direction="row"
              alignItems="center"
              justifyContent="center"
            >
              <Grid item>
                <Divider
                  style={{ width: "100px", height: "1px", marginRight: "5px" }}
                />
              </Grid>
              <Grid item>
                <Typography variant="subtitle2" style={{ color: "#848785" }}>
                  Logout
                </Typography>
              </Grid>
              <Grid item>
                <Divider
                  style={{ width: "100px", height: "1px", marginLeft: "5px" }}
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
              <Typography variant='h6'>Are you sure to Logout ??</Typography>
          </Grid>
          <Grid item>
              <Grid container>
                  <Grid item style={{marginRight:'20px'}}>
                      <Button variant='contained' onClick={logoutHandler}>Sure</Button>
                  </Grid>
                  <Grid item>
                      <Button variant='contained' onClick={()=>history.push('/home')}>Cancel</Button>
                  </Grid>
              </Grid>
          </Grid>
        </Grid>
      </Grid>

    )
}
export default logout;