import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {},
  todo: {
    maxWidth: "500px",
    // backgroundColor: "#CCC",
    margin: "auto",
    borderRadius: 0,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "20px",
  },
  card: {
    width: "100%",
  },
  media: {
    height: 180,
    padding: "10px",
    margin: "10px",
  },
  pos: {
    marginBottom: -5,
  },
}));
