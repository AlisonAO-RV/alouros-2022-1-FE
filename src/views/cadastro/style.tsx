import { makeStyles } from "@material-ui/core/styles";
export const useStyles = makeStyles((theme) => ({
  root: {},
  todo: {
    maxWidth: "500px",
    height: "100vh",
    backgroundColor: "#CCC",
    margin: "auto",
  },
  appBar: {
    maxWidth: "500px",
    position: "absolute",
  },
  webcam: {
    width: "100%",
  },
}));
