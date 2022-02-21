import React, { memo, useState, useEffect, useCallback } from "react";
import { useStyles } from "./style";
import Axios from "axios";
import LogoFasoft from "../../assets/images/fasoft.svg";
import LogoUniRV from "../../assets/images/unirv.svg";
import Button from "@material-ui/core/Button";
import Backdrop from "@material-ui/core/Backdrop";
import CircularProgress from "@material-ui/core/CircularProgress";
import Typography from "@material-ui/core/Typography";
import { saveAs } from "@progress/kendo-file-saver";
import CloudDownloadIcon from "@material-ui/icons/CloudDownload";

import List from "@material-ui/core/List";

import Lista from "../../components/Lista";
import JSZip from "jszip";

type data = {
  id: number;
  name: string;
  email: string;
  periodo: string;
  turma: string;
  imgUrl: string;
  imgBi: string;
}[];

const Quere: React.FC = memo(() => {
  const classes = useStyles();

  const [p1A, setP1A] = useState<data>([]);
  const [p1B, setP1B] = useState<data>([]);
  const [p1C, setP1C] = useState<data>([]);
  const [p1V, setP1V] = useState<data>([]);
  const [p1P, setP1P] = useState<data>([]);

  const [total, setTotal] = useState<number>(0);

  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  // const handleToggle = () => {
  //   setOpen(!open);
  // };

  const receber = useCallback(async () => {
    // handleToggle();
    setOpen(!open);
    setP1A([]);
    setP1B([]);
    setP1C([]);
    setP1V([]);
    setP1P([]);
    Axios.get("https://calouros-2022-1.herokuapp.com/calouros")
      .then((response) => {
        // setData(response.data);
        setTotal(response.data.length);
        response.data.map((item) => {
          if (item.periodo === "1" && item.turma === "A") {
            setP1A((e) => [...e, item]);
          }
          if (item.periodo === "1" && item.turma === "B") {
            setP1B((e) => [...e, item]);
          }
          if (item.periodo === "1" && item.turma === "C") {
            setP1C((e) => [...e, item]);
          }
          if (item.periodo !== "1" && item.periodo !== "9") {
            setP1V((e) => [...e, item]);
          }
          if (item.periodo === "9") {
            setP1P((e) => [...e, item]);
          }
          return [];
        });
        setOpen(false);
        // handleClose();
      })
      .catch((ex) => {
        // handleClose();
        setOpen(false);

        console.error("ex", ex);
      });
  }, [open]);

  const DownloadZip_P1A = useCallback(async () => {
    const jszip = new JSZip();
    for (let i = 0; i < p1A.length; i++) {
      let fileBlob = await fetch(
        `data:application/octet-stream;"${p1A[i].imgBi}`
      )
        .then((r) => r.blob())
        .then(
          (blobFile) => new File([blobFile], "nome", { type: "image/jpg" })
        );
      jszip.file(
        `${p1A[i].periodo}${p1A[i].turma} - ${p1A[i].name}.jpg`,
        fileBlob,
        { binary: true }
      );
    }

    await jszip.generateAsync({ type: "blob" }).then(function (content) {
      // see FileSaver.js
      saveAs(content, "Periodo_1A.zip");
    });
  }, [p1A]);

  const DownloadZip_P1B = useCallback(async () => {
    const jszip = new JSZip();
    for (let i = 0; i < p1B.length; i++) {
      let fileBlob = await fetch(
        `data:application/octet-stream;"${p1B[i].imgBi}`
      )
        .then((r) => r.blob())
        .then(
          (blobFile) => new File([blobFile], "nome", { type: "image/jpg" })
        );
      jszip.file(
        `${p1B[i].periodo}${p1B[i].turma} - ${p1B[i].name}.jpg`,
        fileBlob,
        { binary: true }
      );
    }

    await jszip.generateAsync({ type: "blob" }).then(function (content) {
      // see FileSaver.js
      saveAs(content, "Periodo_1B.zip");
    });
  }, [p1B]);

  const DownloadZip_P1C = useCallback(async () => {
    const jszip = new JSZip();
    for (let i = 0; i < p1C.length; i++) {
      let fileBlob = await fetch(
        `data:application/octet-stream;"${p1C[i].imgBi}`
      )
        .then((r) => r.blob())
        .then(
          (blobFile) => new File([blobFile], "nome", { type: "image/jpg" })
        );
      jszip.file(
        `${p1C[i].periodo}${p1C[i].turma} - ${p1C[i].name}.jpg`,
        fileBlob,
        { binary: true }
      );
    }

    await jszip.generateAsync({ type: "blob" }).then(function (content) {
      // see FileSaver.js
      saveAs(content, "Periodo_1C.zip");
    });
  }, [p1C]);

  const DownloadZip_P1V = useCallback(async () => {
    const jszip = new JSZip();
    for (let i = 0; i < p1V.length; i++) {
      let fileBlob = await fetch(
        `data:application/octet-stream;"${p1V[i].imgBi}`
      )
        .then((r) => r.blob())
        .then(
          (blobFile) => new File([blobFile], "nome", { type: "image/jpg" })
        );
      jszip.file(
        `${p1V[i].periodo}${p1V[i].turma} - ${p1V[i].name}.jpg`,
        fileBlob,
        { binary: true }
      );
    }

    await jszip.generateAsync({ type: "blob" }).then(function (content) {
      // see FileSaver.js
      saveAs(content, "Veteranos.zip");
    });
  }, [p1V]);

  const DownloadZip_P1P = useCallback(async () => {
    const jszip = new JSZip();
    for (let i = 0; i < p1P.length; i++) {
      let fileBlob = await fetch(
        `data:application/octet-stream;"${p1P[i].imgBi}`
      )
        .then((r) => r.blob())
        .then(
          (blobFile) => new File([blobFile], "nome", { type: "image/jpg" })
        );
      jszip.file(
        `${p1P[i].periodo}${p1P[i].turma} - ${p1P[i].name}.jpg`,
        fileBlob,
        { binary: true }
      );
    }

    await jszip.generateAsync({ type: "blob" }).then(function (content) {
      // see FileSaver.js
      saveAs(content, "Professores.zip");
    });
  }, [p1P]);

  const [controle, setControle] = useState<boolean>(true);

  const gatilho = useCallback(async () => {
    if (controle) receber();
    setControle(false);
  }, [receber, controle]);

  useEffect(() => {
    gatilho();
  }, [gatilho]);
  return (
    <div className={classes.todo}>
      <Backdrop className={classes.backdrop} open={open} onClick={handleClose}>
        <CircularProgress color="inherit" />
      </Backdrop>
      <div className={classes.topo}>
        <img src={LogoFasoft} alt="logo Fasoft" width={"70%"} />
        <Typography variant="h6" className={classes.title} key="AT">
          Total de inscritos: {total}
        </Typography>
        <br />
      </div>
      <div className={classes.buttonAtualizar}>
        <Button
          size="large"
          variant="contained"
          fullWidth
          color="inherit"
          onClick={receber}
        >
          ATUALIZAR
        </Button>
      </div>
      <div>
        <Typography
          variant="h6"
          key="AT"
          className={classes[`${p1B.length !== 0 ? "visible" : "noVisible"}`]}
        >
          1º Periodo - Turma: A - {p1A.length} inscritos
          <Button
            color="primary"
            startIcon={<CloudDownloadIcon />}
            onClick={DownloadZip_P1A}
            className={classes.btZip}
          >
            Baixar Fotos .ZIP
          </Button>
        </Typography>

        {p1A.map((item, index) => {
          return <Lista data={item} index={`A-${index}`}></Lista>;
        })}

        <Typography
          variant="h6"
          className={classes[`${p1B.length !== 0 ? "visible" : "noVisible"}`]}
          key="BT"
        >
          1º Periodo - Turma: B - {p1B.length} inscritos
          <Button
            color="primary"
            startIcon={<CloudDownloadIcon />}
            onClick={DownloadZip_P1B}
            className={classes.btZip}
          >
            Baixar Fotos .ZIP
          </Button>
        </Typography>
        <List key="B">
          {p1B.map((item, index) => {
            return <Lista data={item} index={`A-${index}`}></Lista>;
          })}
        </List>

        <Typography
          variant="h6"
          className={classes[`${p1C.length !== 0 ? "visible" : "noVisible"}`]}
          key="CT"
        >
          1º Periodo - Turma: C - {p1C.length} inscritos
          <Button
            color="primary"
            startIcon={<CloudDownloadIcon />}
            onClick={DownloadZip_P1C}
            className={classes.btZip}
          >
            Baixar Fotos .ZIP
          </Button>
        </Typography>
        <List key="C">
          {p1C.map((item, index) => {
            return <Lista data={item} index={`A-${index}`}></Lista>;
          })}
        </List>

        <Typography
          variant="h6"
          className={classes[`${p1V.length !== 0 ? "visible" : "noVisible"}`]}
          key="VT"
        >
          Veteranos - {p1V.length} inscritos
          <Button
            color="primary"
            startIcon={<CloudDownloadIcon />}
            onClick={DownloadZip_P1V}
            className={classes.btZip}
          >
            Baixar Fotos .ZIP
          </Button>
        </Typography>
        <List key="V">
          {p1V.map((item, index) => {
            return <Lista data={item} index={`A-${index}`}></Lista>;
          })}
        </List>

        <Typography
          variant="h6"
          className={classes[`${p1P.length !== 0 ? "visible" : "noVisible"}`]}
          key="VT"
        >
          Professores - {p1P.length} inscritos
          <Button
            color="primary"
            startIcon={<CloudDownloadIcon />}
            onClick={DownloadZip_P1P}
            className={classes.btZip}
          >
            Baixar Fotos .ZIP
          </Button>
        </Typography>
        <List key="V">
          {p1P.map((item, index) => {
            return <Lista data={item} index={`A-${index}`}></Lista>;
          })}
        </List>
      </div>
      <div className={classes.base}>
        <img src={LogoUniRV} alt="logo Fasoft" width={"30%"} />
      </div>
      <br />
      <br />
      <label>By: AlisonAO</label>
    </div>
  );
});

export default Quere;
