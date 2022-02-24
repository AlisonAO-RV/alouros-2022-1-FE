import React, { memo, useCallback, useState } from "react";
import { useStyles } from "./style";

import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Switch from "@material-ui/core/Switch";
import Axios from "axios";
import Snackbar from "@material-ui/core/Snackbar";
import CircularProgress from "@material-ui/core/CircularProgress";
import Fade from "@material-ui/core/Fade";
import CancelIcon from "@material-ui/icons/Cancel";
import CloudDownloadIcon from "@material-ui/icons/CloudDownload";

type Props = {
  data: {
    id: number;
    name: string;
    email: string;
    periodo: string;
    turma: string;
    imgUrl: boolean;
    imgBi: string;
  };
  index: string;
};

const Lista: React.FC<Props> = memo(({ data, index }) => {
  const classes = useStyles();

  const [openMsgOK, setOpenMsgOK] = useState(false);
  const [openMsgERR, setOpenMsgERR] = useState(false);
  const [checked, setChecked] = React.useState(data.imgUrl);
  const [progress, setProgress] = React.useState(false);
  const [progressERR, setProgressERR] = React.useState(false);

  const handleClickOpenOK = () => {
    setOpenMsgOK(true);
  };

  const handleCloseOK = (event, reason) => {
    setOpenMsgOK(false);
  };

  const handleClickOpenERR = () => {
    setOpenMsgERR(true);
  };

  const handleCloseERR = (event, reason) => {
    setOpenMsgERR(false);
  };

  const Alterar = (id) => {
    setProgress(true);
    Axios.put(`https://calouros-2022-1.herokuapp.com/calouros/${id}`, {
      name: data.name,
      email: data.email,
      periodo: data.periodo,
      password: "fasoft-2022-1",
      confirmPassword: "fasoft-2022-1",
      turma: data.turma,
      imgUrl: `${!checked}`,
      imgBi: data.imgBi,
    })
      .then((response) => {
        handleClickOpenOK();
        setProgress(false);
      })
      .catch(function (error) {
        handleClickOpenERR();
        setProgress(false);
        setProgressERR(true);
        setChecked(!checked);
      });
  };

  const downloadFoto = useCallback(async (img, nome) => {
    try {
      // const fileBlob = Buffer.from(img, "base64");
      // let fileBlob = await fetch(img).then((r) => r.blob());
      let fileBlob = await fetch(img)
        .then((r) => r.blob())
        .then((blobFile) => new File([blobFile], nome, { type: "image/jpg" }));
      const fileURL = URL.createObjectURL(fileBlob);
      // window.open(fileURL, "_blank");
      var link = document.createElement("a");
      link.download = nome;
      link.href = fileURL;
      link.click();
    } catch (error) {
      console.log(error);
    }
  }, []);

  const handleToggle = (e, id) => {
    setChecked(e.target.checked);
    Alterar(id);
  };

  return (
    <>
      <ListItem key={index}>
        <ListItemAvatar className={classes.espaco}>
          <IconButton
            edge="end"
            aria-label="comments"
            onClick={() =>
              downloadFoto(
                `data:application/octet-stream;"${data.imgBi}`,
                `${data.periodo}${data.turma} - ${data.name}.jpg`
              )
            }
          >
            <Avatar>
              {/* <img src={data.imgBi} width={"100%"} /> */}
              <CloudDownloadIcon />
            </Avatar>
          </IconButton>
        </ListItemAvatar>
        <ListItemText
          primary={data.name}
          secondary={`${data.id} - Período: ${data.periodo} - Turma: ${data.turma}`}
        />
        <Fade in={progress}>
          <CircularProgress />
        </Fade>
        <Fade in={progressERR}>
          <CancelIcon color="secondary" />
        </Fade>
        <Switch
          edge="end"
          onChange={(e) => handleToggle(e, data.id)}
          checked={checked}
          color="primary"
        />
      </ListItem>
      <Snackbar
        autoHideDuration={500}
        open={openMsgOK}
        onClose={handleCloseOK}
        message={`${data.name} - Atualizado`}
      ></Snackbar>
      <Snackbar
        autoHideDuration={500}
        open={openMsgERR}
        onClose={handleCloseERR}
        message={`${data.name} - Erro`}
      ></Snackbar>
    </>
    // <a
    //   href={`data:application/octet-stream;"${data.imgBi}`}
    //   download={`${data.periodo}${data.turma} - ${data.name}.jpg`}
    //   className={classes.textA}
    // >
    //   <ListItem key={index} button>
    //     <ListItemAvatar>
    //       <Avatar>
    //         <img src={data.imgBi} width={"100%"} />
    //       </Avatar>
    //     </ListItemAvatar>
    //     <ListItemText
    //       primary={data.name}
    //       secondary={`Período: ${data.periodo} - Turma: ${data.turma} - email: ${data.email}`}
    //     />
    //   </ListItem>
    // </a>
  );
});

export default Lista;
