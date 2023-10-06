import React from "react";

const NativeDocViewer = () => {
  return (
    <>
      <iframe
        src="https://docs.google.com/gview?url=https://www.mtsac.edu/webdesign/accessible-docs/word/example03.docx"
        style={{ width: "500px", height: "500px" }}
      ></iframe>
    </>
  );
};

export default NativeDocViewer;
