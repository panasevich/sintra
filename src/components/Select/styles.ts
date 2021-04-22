import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      minWidth: 220,
      flex: 1,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  })
);
