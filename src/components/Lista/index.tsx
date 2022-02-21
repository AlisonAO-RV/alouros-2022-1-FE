import { type } from "@testing-library/user-event/dist/type";
import React, { memo, useCallback } from "react";
import { useStyles } from "./style";

import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";

type Props = {
  data: {
    id: number;
    name: string;
    email: string;
    periodo: string;
    turma: string;
    imgUrl: string;
    imgBi: string;
  };
  index: string;
};

const Lista: React.FC<Props> = memo(({ data, index }) => {
  const classes = useStyles();

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

  return (
    <ListItem
      key={index}
      button
      onClick={() =>
        downloadFoto(
          `data:application/octet-stream;"${data.imgBi}`,
          `${data.periodo}${data.turma} - ${data.name}.jpg`
        )
      }
    >
      <ListItemAvatar>
        <Avatar>
          <img src={data.imgBi} width={"100%"} />
        </Avatar>
      </ListItemAvatar>
      <ListItemText
        primary={data.name}
        secondary={`Período: ${data.periodo} - Turma: ${data.turma} - email: ${data.email}`}
      />
    </ListItem>

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
