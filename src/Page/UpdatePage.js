import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Grid,
  Typography,
  TextField,
  Switch,
  OutlinedInput,
} from "@material-ui/core";
import { fetchDetail } from "../redux/fetchData";
import { detailUpdateChange } from "../redux/actions";

function UpdatePage(props) {
  //manage props

  const { history, match } = props;
  let params = match.params.id;
  
  //redux
  const dispatch = useDispatch();

  // lifecycle
  useEffect(() => {
    dispatch(fetchDetail(params));
  }, []);

  //reducer fetching data
  const reducer = useSelector((state) => state);
  const res = reducer.detailReducer;

  //state init
  let dialogRef = useState(null);
  const [toggle, setToggle] = useState({ is_active: true });

  const handleCancel = () => {
    history.goBack();
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    console.log("hallo update name", event.target);
    const payload = {
      [name]: value,
      key: name,
    };
    dispatch(detailUpdateChange(payload));
  };
  const handleChangeSwitch = (event) => {
    console.log("is aktive =>", event.target.checked);
    setToggle({
      ...toggle,
      is_active: !toggle.is_active,
    });
  };

  return (
    <Grid container spacing={2}>
      <form noValidate autoComplete="off">
        <Grid item xs={12}>
          <Typography component="span">Name</Typography>
          <TextField
            onChange={handleChange}
            placeholder="ini testing"
            name="string"
            value={res.data.name}
          />
          <TextField
            onChange={handleChange}
            name="name"
            disabled={res.pending}
            variant="outlined"
            fullWidth
            value={res.data.name}
          />
          <TextField
            onChange={handleChange}
            disabled={res.pending}
            name="name"
            fullWidth
            value={res.data.name}
          />
        </Grid>
        <Grid item xs={12}>
          <Typography component="span">Comment</Typography>
          <TextField
            onChange={handleChange}
            name="comment"
            fullWidth
            multiline
            rows={4}
            // key={`${Math.floor(Math.random() * 1000)}-min`}
            // value={res.pending ? "loading..." : res.data.comment}
          />
        </Grid>
        <Grid item xs={12}>
          <Typography component="span">Is active</Typography>
          <Switch
            name="is_active"
            disabled={res.pending}
            checked={
              !res.pending
                ? res.data.is_active === toggle.is_active
                  ? true
                  : false
                : false
            }
            onChange={handleChangeSwitch}
          />
        </Grid>
      </form>
    </Grid>
  );
}

export default UpdatePage;
