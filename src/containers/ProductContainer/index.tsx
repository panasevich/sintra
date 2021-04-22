import React, { useState } from "react";
import Drawer from "@material-ui/core/Drawer";
import Grid from "@material-ui/core/Grid";
import Fab from "@material-ui/core/Fab";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import Input from "../../components/Input";
import { useDispatch } from "react-redux";
import { setProduct } from "./actions";
import { FormTypes } from "./types";
import { useStyles } from "./styles";

export default function ProductContainer() {
  const dispatch = useDispatch();
  const classes = useStyles();
  const [drawerOpen, setDrawerOpen] = useState<boolean>(false);
  const [form, setForm] = useState<FormTypes>({} as FormTypes);
  const toggleDrawer = () => setDrawerOpen(!drawerOpen);
  const handleChange = ({
    target: { value, name },
  }: React.ChangeEvent<{ value: unknown; name: string }>) =>
    setForm({ ...form, [name]: value });
  const handleAdd = () => {
    if (form.price && form.name) {
      dispatch(setProduct({ ...form, date: new Date().getTime() }));
      setDrawerOpen(!drawerOpen);
      setForm({} as FormTypes);
    }
  };

  return (
    <>
      <Fab
        classes={{ root: classes.root }}
        onClick={toggleDrawer}
        color="primary"
        aria-label="add"
      >
        <AddIcon />
      </Fab>
      <Drawer anchor="right" open={drawerOpen}>
        <Grid container spacing={3} className={classes.container}>
          <Grid item xs={12}>
            <Input
              label="Product name"
              value=""
              name="name"
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <Input
              label="Price"
              type="number"
              value=""
              name="price"
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" color="primary" onClick={handleAdd}>
              Add product
            </Button>
          </Grid>
        </Grid>
      </Drawer>
    </>
  );
}
