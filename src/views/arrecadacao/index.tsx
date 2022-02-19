import React, { memo } from "react";
import { useStyles } from "./style";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import LogoFasoft from "../../assets/images/fasoft.svg";
import LogoUniRV from "../../assets/images/unirv.svg";

const Arrecadacao: React.FC = memo(() => {
  const classes = useStyles();

  const copy = () => {
    const pix =
      "00020126660014BR.GOV.BCB.PIX0127vanessamarques.rv@gmail.com0213Evento Fasoft520400005303986540515.005802BR5925Vanessa Marques Alves da 6009SAO PAULO61080540900062160512EventoFasoft6304BCD1";
    navigator.clipboard.writeText(pix);
  };

  return (
    <div className={classes.todo}>
      <img src={LogoFasoft} alt="logo Fasoft" width={"70%"} />
      <br />
      <Typography gutterBottom variant="h5" component="h2">
        ARRECADAÇÃO EVENTO
      </Typography>
      <Typography gutterBottom variant="h5" component="h2">
        R$ 15,00
      </Typography>
      <br />
      <TextField
        id="outlined-multiline-static"
        label="ChavePix"
        multiline
        variant="outlined"
        value="00020126660014BR.GOV.BCB.PIX0127vanessamarques.rv@gmail.com0213Evento Fasoft520400005303986540515.005802BR5925Vanessa Marques Alves da 6009SAO PAULO61080540900062160512EventoFasoft6304BCD1"
        fullWidth
      />
      <br />
      <Button
        size="large"
        variant="contained"
        fullWidth
        color="primary"
        onClick={() => copy()}
      >
        COPIAR CHAVE PIX
      </Button>
      <br />
      <img src={LogoUniRV} alt="logo Fasoft" width={"30%"} />
    </div>
  );
});

export default Arrecadacao;
