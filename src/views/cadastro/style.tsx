import { makeStyles } from "@material-ui/core/styles";
export const useStyles = makeStyles((theme) => ({
  root: {},
  todo: {
    maxWidth: "500px",
    height: "100vh",
    backgroundColor: "#CCC",
    margin: "auto",
    borderRadius: 0,
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
}));
