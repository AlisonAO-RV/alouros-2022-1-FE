import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {},
  todo: {
    Width: "100%",
    height: "100vh",
    // backgroundColor: "#CCC",
    margin: "auto",
    borderRadius: 0,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "20px",
  },
  topo: {
    width: "500px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    zIndex: -1000,
  },
  base: {
    width: "500px",
    height: "550px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    zIndex: -1000,
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff",
  },
  title: {},
  visible: {
    margin: theme.spacing(4, 0, 2),
    display: "block",
  },
  noVisible: {
    margin: theme.spacing(4, 0, 2),
    display: "none",
  },
  buttonAtualizar: {
    width: "100%",
    maxWidth: "600px",
  },
  btZip: {
    marginLeft: "80px",
  },
}));
