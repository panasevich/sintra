import React, { FC, useState } from "react";
import TextField from "@material-ui/core/TextField";
import { InputTypes } from "./types";

const Input: FC<InputTypes> = ({
  label,
  onChange,
  value,
  name,
  type = "text",
}) => {
  const [inputValue, setValue] = useState(value as string | number);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // @ts-ignore
    setValue(e.target.value);
    onChange(e);
  };
  return (
    <TextField
      value={inputValue}
      type={type}
      onChange={handleChange}
      label={label}
      name={name}
      variant="outlined"
    />
  );
};

export default Input;
