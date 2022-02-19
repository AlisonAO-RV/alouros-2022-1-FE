import { memo, useCallback, useRef, useState } from "react";
import Webcam from "react-webcam";
import { useStyles } from "./style";

const Cadastro = memo(() => {
  const classes = useStyles();

  const webcamRef = useRef(null);
  const [imgSrc, setImgSrc] = useState(null);

  const capture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImgSrc(imageSrc);
  }, [webcamRef, setImgSrc]);
  return (
    <div className={classes.todo}>
      <div>
        <Webcam
          audio={false}
          ref={webcamRef}
          screenshotFormat="image/jpeg"
          className={classes.webcam}
        />
      </div>
      <button onClick={capture}>Capture photo</button>
    </div>
  );
});

export default Cadastro;
