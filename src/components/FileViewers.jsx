import React, { useEffect, useState } from "react";
import DocViewer, { DocViewerRenderers } from "react-doc-viewer";

const FileViewers = () => {
  const docs = [{ uri: require("../assets/resume.doc") }];
  return (
    <>
      <DocViewer documents={docs} pluginRenderers={DocViewerRenderers} />
    </>
  );
};

export default FileViewers;
