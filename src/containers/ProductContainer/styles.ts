import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      position: "fixed",
      bottom: theme.spacing(3),
      right: theme.spacing(3),
    },
    container: {
      padding: theme.spacing(3),
    },
  })
);
