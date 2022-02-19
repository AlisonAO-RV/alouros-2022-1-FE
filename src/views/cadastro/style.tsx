import { makeStyles } from "@material-ui/core/styles";
export const useStyles = makeStyles((theme) => ({
  root: {},
  todo: {
    maxWidth: "500px",
    height: "100vh",

    margin: "auto",
    borderRadius: 0,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "20px",
  },
  webcam: {
    width: "100%",
  },

  dialog: {
    margin: "auto",
    maxWidth: "500px",
    borderRadius: 0,
  },

  button: {
    borderRadius: 0,
  },

  form: {
    "& > *": {
      margin: theme.spacing(1),
      width: "calc(100% - 20px)",
    },
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff",
  },
}));
