import React, { useState, useRef, useEffect } from "react";
import html2canvas from "html2canvas";
const WhiteBoard = () => {
  const [isAuth, setIsAuth] = useState(false);
  const [miroBoardId, setMiroBoardId] = useState(null);
  const [screenshot, setScreenShot] = useState(null);

  const iframeRef = useRef(null);

  const handleCaptureScreenshot = () => {
    const iframe = iframeRef.current;

    if (iframe) {
      html2canvas(iframe).then((canvas) => {
        // Convert the canvas to an image data URL
        const imgDataUrl = canvas.toDataURL("image/jpeg");

        // Open the image in a new window (optional)
        setScreenShot(imgDataUrl);
      });
    }
  };

  const openMiroBoardAuth = () => {
    window.miroBoardsPicker.open({
      clientId: "3458764563018758552", // Replace it with your app ClientId
      action: "select",
      success: (data) => {
        setMiroBoardId(data.id);
      },
    });
  };
  useEffect(() => {
    const script = document.createElement("script");

    script.src = "https://miro.com/app/static/boardsPicker.1.0.js";
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      <button onClick={() => openMiroBoardAuth()} id="miro-auth-btn">
        Click for miro
      </button>

      {miroBoardId && (
        <iframe
          ref={iframeRef}
          width="768"
          height="432"
          src={`https://miro.com/app/live-embed/${miroBoardId}/?autoplay=true&moveToViewport=-23165,-5837,13803,7546`}
         allowFullScreen
        ></iframe>
      )}
      <button onClick={handleCaptureScreenshot}>Capture Screenshot</button>
      {screenshot && <img src={screenshot} alt="screenshot" />}
    </>
  );
};

export default WhiteBoard;
