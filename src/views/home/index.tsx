import React, { memo } from "react";
import { useStyles } from "./style";
import { Link } from "react-router-dom";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";

import LogoFasoft from "../../assets/images/fasoft.svg";
import LogoUniRV from "../../assets/images/unirv.svg";
import Rogerio from "../../assets/images/regerio.png";

const Home: React.FC = memo(() => {
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
      <Card className={classes.card} elevation={3}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={Rogerio}
            title="Rogério Mendez"
          />
          <CardContent>
            {/* <Typography gutterBottom variant="h4" component="h2">
              FASOFT 2022
            </Typography> */}
            <Typography className={classes.pos} color="textSecondary">
              Palestrante:
            </Typography>
            <Typography variant="h6" component="h2">
              Rogério Mendez
            </Typography>
            <Typography className={classes.pos} color="textSecondary">
              Data:
            </Typography>
            <Typography variant="h6" component="h2">
              24/02/2022 ás 19hs
            </Typography>
            <Typography className={classes.pos} color="textSecondary">
              Local:
            </Typography>
            <Typography variant="h6" component="h2">
              Centro de Convenções da UniRV
            </Typography>
            <Typography className={classes.pos} color="textSecondary">
              VAGAS DE EMPREGO E ESTÁGIO SERÃO DIVULGADAS NO EVENTO.
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              size="large"
              variant="contained"
              fullWidth
              color="primary"
              component={Link}
              to="cadastro/"
            >
              INCRIÇÃO
            </Button>
          </CardActions>
        </CardActionArea>
      </Card>
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

export default Home;
