import { memo, useCallback, useRef, useState } from "react";
import Webcam from "react-webcam";
import Axios from "axios";

const WebcamComponent = () => <Webcam />;

const WebCam = memo(() => {
  const WebcamCapture = () => {
    const webcamRef = useRef(null);
    const [imgSrc, setImgSrc] = useState(null);
    const [ResImgSrc, setResImgSrc] = useState([]);

    const capture = useCallback(() => {
      const imageSrc = webcamRef.current?.getScreenshot();
      setImgSrc(imageSrc);
    }, [webcamRef, setImgSrc]);

    const [cont, setCont] = useState(15);

    const salvar = () => {
      let id = cont;
      setCont(id + 1);
      Axios.post("http://localhost:3001/calouros", {
        name: "Alison Teste",
        email: `teste${id}@teste.com.br`,
        periodo: "7",
        password: "aao12320aao",
        confirmPassword: "aao12320aao",
        turma: "A",
        imgUrl: "image/jpeg",
        imgBi: imgSrc,
      }).then((response) => {
        console.log(response);
      });
    };

    const receber = () => {
      Axios.get("http://calouros-2022-1.herokuapp.com/calouros")
        .then((response) => {
          console.log(response.data);
          setResImgSrc(response.data);
        })
        .catch((ex) => {
          console.error("ex", ex);
        });
    };

    return (
      <>
        <Webcam audio={false} ref={webcamRef} screenshotFormat="image/jpeg" />

        <button onClick={capture}>Capture photo</button>
        <button onClick={salvar}>Savar</button>
        <button onClick={receber}>Receber</button>
        {imgSrc && <img src={imgSrc} />}
        {ResImgSrc.map((item) => (
          <img src={item.imgBi} width="150" alt="" />
        ))}
      </>
    );
  };

  return (
    <div id="root">
      <WebcamCapture />
    </div>
  );
});

export default WebCam;
