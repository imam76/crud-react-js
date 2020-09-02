import React, { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  Typography,
  DialogActions,
  Button,
  Grid,
  Switch,
  responsiveFontSizes,
  TextField,
  useFormControl,
} from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { updateDetailSwitch, detailUpdateChange } from "../../redux/actions";
import { updateData } from "../../redux/patchData";
import { fetchDetail } from "../../redux/fetchData";

function DialogEditUsers(props) {
  const { history, match } = props;
  let params = match.params.id;

  //redux
  let dispatch = useDispatch();

  //lifecycle
  useEffect(() => {
    dispatch(fetchDetail(params));
  }, []);

  //reducer fetching data
  const reducer = useSelector((state) => state);
  const res = reducer.detailReducer;

  //state init
  const [toggle, setToggle] = useState({ is_active: true });

  const handleCancel = () => {
    history.goBack();
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    const payload = {
      [name]: value,
      key: name,
    };
    dispatch(detailUpdateChange(payload));
  };

  const handleChangeSwitch = (statusPast) => (event) => {
    setToggle({
      ...toggle,
      is_active: !event.target.checked,
    });
    dispatch(updateDetailSwitch(event.target.checked));
  };

  const handleSubmit = () => {
    console.log("update res.data", res.data);
    dispatch(updateData(res.data));
    history.goBack();
  };

  return (
    <Dialog open={true} aria-labelledby="form-dialog-edit-users" fullWidth>
      <DialogTitle>
        <Typography component="span" variant="h4">
          <b> Edit Data</b>
        </Typography>
      </DialogTitle>
      <DialogContent>
        <form noValidate autoComplete="off">
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography component="span">Name</Typography>
              <TextField
                onChange={handleChange}
                name="name"
                disabled={res.pending}
                variant="outlined"
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
                disabled={res.pending}
                variant="outlined"
                value={res.data.comment}
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
                onChange={handleChangeSwitch(res.data.is_active)}
              />
            </Grid>
          </Grid>
        </form>
      </DialogContent>
      <DialogActions>
        <Button color="primary" onClick={handleCancel}>
          Cancel
        </Button>
        <Button color="primary" onClick={handleSubmit}>
          Submit
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default DialogEditUsers;
