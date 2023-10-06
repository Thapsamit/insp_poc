import React from "react";
import FileViewer from "react-file-viewer";
const PlangridFileViewer = () => {
  const type = "pdf";
  const url =
    "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf";

  return (
    <>
      <FileViewer fileType={type} filePath={url} />
    </>
  );
};

export default PlangridFileViewer;
