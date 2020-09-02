import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Typography, Button, TextField } from "@material-ui/core";
import { useLocation } from "react-router-dom";

function InputTextField(props) {
  const initialState = {
    name: "",
    comment: "",
  };
  const [state, setstate] = useState(initialState);

  //redux
  const dispatch = useDispatch();
  const {
    keys,
    fullWidth,
    multiline,
    rows,
    value,
    ref,
    name,
    id,
    changeValue,
    handleBlur,
    keyPress,
    defaultValue,
  } = props;

  //update
  // const handleChange = (event) => {
  //   console.log("hallo update", event.target.value, value);
  // };

  return (
    <TextField
      className="input-text-outlined"
      variant="outlined"
      key={keys}
      name={name}
      type="input"
      id={id}
      fullWidth={fullWidth}
      multiline={multiline}
      innerRef={ref}
      onChange={changeValue}
      // onKeyPress={keyPress}
      // onBlur={handleBlur}
      rows={rows}
      value={value || state[keys]}
      defaultValue={defaultValue}
    />
  );
}

export default InputTextField;
