import { memo, useCallback, useRef, useState, forwardRef } from "react";
import Webcam from "react-webcam";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Dialog from "@material-ui/core/Dialog";
import ListItemText from "@material-ui/core/ListItemText";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Slide from "@material-ui/core/Slide";
import PhotoCamera from "@material-ui/icons/PhotoCamera";
import TextField from "@material-ui/core/TextField";
import { useStyles } from "./style";

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Cadastro = memo(() => {
  const classes = useStyles();

  const webcamRef = useRef(null);
  const [imgSrc, setImgSrc] = useState(null);

  const capture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImgSrc(imageSrc);
  }, [webcamRef, setImgSrc]);

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.todo}>
      <Card className={classes.root}>
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              cadastro
            </Typography>
            <form noValidate autoComplete="off">
              <TextField
                fullWidth
                id="outlined-basic"
                label="Nome Completo"
                variant="outlined"
              />
              <TextField
                fullWidth
                id="outlined-basic"
                label="E-mail"
                variant="outlined"
              />
            </form>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
          <Button size="small" color="primary">
            Learn More
          </Button>
          <Button variant="outlined" color="primary" onClick={handleClickOpen}>
            Open full-screen dialog
          </Button>
        </CardActions>
      </Card>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
        className={classes.todo}
      >
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              FOTO
            </Typography>
          </Toolbar>
        </AppBar>
        <br />
        <br />
        <br />
        <div>
          <Webcam
            audio={false}
            ref={webcamRef}
            screenshotFormat="image/jpeg"
            className={classes.webcam}
          />

          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            endIcon={<PhotoCamera />}
            onClick={capture}
            fullWidth
          >
            Tirar Foto
          </Button>
        </div>
      </Dialog>
    </div>
  );
});

export default Cadastro;
