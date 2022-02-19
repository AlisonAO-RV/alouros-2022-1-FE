import { memo, useCallback, useRef, useState, forwardRef } from "react";
import Webcam from "react-webcam";
import Axios from "axios";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import Slide from "@material-ui/core/Slide";
import PhotoCamera from "@material-ui/icons/PhotoCamera";
import Send from "@material-ui/icons/Send";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import LogoFasoft from "../../assets/images/fasoft.svg";
import LogoUniRV from "../../assets/images/unirv.svg";
import Snackbar from "@material-ui/core/Snackbar";
import Backdrop from "@material-ui/core/Backdrop";
import CircularProgress from "@material-ui/core/CircularProgress";
import { useStyles } from "./style";

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
const Cadastro = memo(() => {
  const classes = useStyles();

  const webcamRef = useRef(null);
  const [open, setOpen] = useState(false);

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [periodo, setPeriodo] = useState(1);
  const [turma, setTurma] = useState("A");
  const [imgSrc, setImgSrc] = useState(null);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
    setOpenMsg(false);
  };

  const [openStatus, setOpenStatus] = useState(false);

  const [Msg, setMsg] = useState("false");

  const [openMsg, setOpenMsg] = useState(false);

  const capture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot({});
    setImgSrc(imageSrc);
    handleClose();
  }, [webcamRef, setImgSrc]);

  const salvar = () => {
    setOpenStatus(true);
    Axios.post("https://calouros-2022-1.herokuapp.com/calouros", {
      name: nome,
      email: email,
      periodo: periodo,
      password: "fasoft-2022-1",
      confirmPassword: "fasoft-2022-1",
      turma: turma,
      imgUrl: "base64",
      imgBi: imgSrc,
    })
      .then((response) => {
        console.log("aqui: ", response);
        setMsg("Cadastrado com Sucesso");
        setOpenMsg(true);
      })
      .catch(function (error) {
        setMsg(error.response.data);
        setOpenMsg(true);
        // console.log(error.response.data);
      })
      .finally(() => {
        setOpenStatus(false);
      });
  };

  return (
    <div className={classes.todo}>
      <img src={LogoFasoft} alt="logo Fasoft" width={"70%"} />

      <br />
      <form className={classes.form} onSubmit={(e) => console.log(e)}>
        <TextField
          label="Nome Completo"
          variant="outlined"
          name="NomeCompleto"
          required
          onChange={(e) => setNome(e.target.value)}
        />
        <TextField
          label="E-mail"
          variant="outlined"
          name="email"
          required
          onChange={(e) => setEmail(e.target.value)}
        />
        <Select
          labelId="periodo"
          variant="outlined"
          value={periodo}
          required
          onChange={(e) => setPeriodo(e.target.value)}
        >
          <MenuItem value={1}>1° Periodo</MenuItem>
          <MenuItem value={2}>2° Periodo</MenuItem>
          <MenuItem value={3}>3° Periodo</MenuItem>
          <MenuItem value={4}>4° Periodo</MenuItem>
          <MenuItem value={5}>5° Periodo</MenuItem>
          <MenuItem value={6}>6° Periodo</MenuItem>
          <MenuItem value={7}>7° Periodo</MenuItem>
          <MenuItem value={8}>8° Periodo</MenuItem>
        </Select>
        <Select
          labelId="Turma"
          variant="outlined"
          defaultValue={"A"}
          // value={periodo}
          onChange={(e) => setTurma(e.target.value)}
        >
          <MenuItem value={"U"}>Unica Turma</MenuItem>
          <MenuItem value={"A"}>Turma A</MenuItem>
          <MenuItem value={"D"}>Turma B</MenuItem>
          <MenuItem value={"C"}>Turma C</MenuItem>
          <MenuItem value={"D"}>Turma D</MenuItem>
        </Select>

        <Button
          variant="outlined"
          color="primary"
          className={classes.button}
          endIcon={<PhotoCamera />}
          onClick={handleClickOpen}
          size="large"
          fullWidth
        >
          selfie
        </Button>
        {imgSrc && <img src={imgSrc} alt="logo Fasoft" width={"70%"} />}

        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          endIcon={<Send />}
          size="large"
          fullWidth
          disabled={imgSrc === null ? true : false}
          onClick={() => salvar()}
        >
          Salvar Inscrição
        </Button>
      </form>
      <br />
      <img src={LogoUniRV} alt="logo Fasoft" width={"30%"} />
      <Dialog
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
        className={classes.dialog}
      >
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
          size="large"
          fullWidth
        >
          Tirar Foto
        </Button>
      </Dialog>
      <Backdrop
        className={classes.backdrop}
        open={openStatus}
        onClick={handleClose}
      >
        <CircularProgress color="inherit" />
      </Backdrop>

      <Snackbar
        autoHideDuration={3000}
        open={openMsg}
        onClose={handleClose}
        message={Msg}
        onClick={handleClose}
      ></Snackbar>
    </div>
  );
});

export default Cadastro;
