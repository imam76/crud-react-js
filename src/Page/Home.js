import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import { fetchdData, fetchDetail } from "../redux/fetchData";
import { patchSwitch } from "../redux/patchData";

import {
  Grid,
  Typography,
  Table,
  TableContainer,
  TableHead,
  TableBody,
  TableCell,
  Switch,
  TableRow,
  Button,
} from "@material-ui/core/";

function Home() {
  //route
  let history = useHistory();
  let location = useLocation();

  //redux
  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchdData());
  }, []);

  // state init
  //   const [active, setactive] = useState({ statusSwitch: false });

  //reducer fetching data
  const state = useSelector((state) => state);
  const res = state.dataReducer;

  const handleChange = (id, status) => (props) => {
    dispatch(patchSwitch(id, status));
  };

  const handleDelete = () => {
    return null;
  };

  const handleClickName = (id) => (event) => {
    history.push({
      pathname: `/edit/${id}`,
      state: {
        background: location,
      },
    });
    dispatch(fetchDetail(id));
  };
  return (
    <Grid container item xs={12} justify="center" alignItems="center">
      <Grid item xs={10}>
        <TableContainer>
          <Table aria-label="simple-table">
            <TableHead>
              <TableRow>
                <TableCell>id</TableCell>
                <TableCell>name</TableCell>
                <TableCell>active</TableCell>
                <TableCell>delete</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {res.pending === true ? (
                <TableRow>
                  <TableCell colSpan={4}>
                    <Typography component="span" variant="h3">
                      Loading...
                    </Typography>
                  </TableCell>
                </TableRow>
              ) : (
                res.data.map((value, index) => (
                  <TableRow key={index}>
                    <TableCell>{value.id}</TableCell>
                    <TableCell>
                      <Typography
                        component="span"
                        variant="inherit"
                        onClick={handleClickName(value.id)}
                        style={{
                          textDecoration: "underline",
                          cursor: "pointer",
                        }}
                      >
                        {value.name}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Switch
                        value={value.is_active}
                        checked={value.is_active}
                        onChange={handleChange(value.id, value.is_active)}
                        name="checkedA"
                      />
                    </TableCell>
                    <TableCell>
                      <Button onClick={handleDelete}>Delete</Button>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </Grid>
  );
}

export default Home;
