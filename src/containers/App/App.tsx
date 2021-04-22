import React from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import CurrencySelect from "../CurrencySelect";
import ProductContainer from "../ProductContainer";
import ListContainer from "../List";

function App() {
  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper>
            <CurrencySelect />
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper>
            <ListContainer />
          </Paper>
        </Grid>
      </Grid>
      <ProductContainer />
    </>
  );
}

export default App;
