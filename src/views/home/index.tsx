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

import LogoFasoft from "../../assets/images/fasoft.svg";
import LogoUniRV from "../../assets/images/unirv.svg";
import Rogerio from "../../assets/images/regerio.png";
const Home: React.FC = memo(() => {
  const classes = useStyles();

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
              Auditório ( Bloco I )
            </Typography>
            <br />
            <Typography className={classes.pos} color="textSecondary">
              VAGAS DE EMPREGO E ESTÁGIO SERÃO DIVULGADAS NO EVENTO.
            </Typography>
          </CardContent>
        </CardActionArea>
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
      </Card>
      <br />
      <img src={LogoUniRV} alt="logo Fasoft" width={"30%"} />
    </div>
  );
});

export default Home;
