import React, { FC } from "react";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { useStyles } from "./styles";
import type { SelectProps } from "./types";

const SimpleSelect: FC<SelectProps> = ({
  labelText,
  id,
  options,
  onChange,
  value,
}) => {
  const classes = useStyles();
  const [selectValue, setSelectValue] = React.useState(value);

  const handleChange = ({
    target: { value },
  }: React.ChangeEvent<{ value: unknown }>) => {
    onChange(value as string);
    setSelectValue(value as string);
  };

  return (
    <>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id={id}>{labelText}</InputLabel>
        <Select
          labelId={id}
          value={selectValue}
          onChange={handleChange}
          label="Age"
        >
          {options?.map(({ value, label }) => (
            <MenuItem key={value} value={value}>
              {label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </>
  );
};

export default SimpleSelect;
