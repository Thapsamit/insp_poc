import React, { useState } from "react";
import { Document, Page } from "react-pdf";
import sample2 from "../assets/sample2.pdf";
const PdfDoc = () => {
  const [numPages, setNumPages] = useState(null);
  //   const setPdfSize = () => {
  //     if (pdfWrapper && pdfWrapper.current) {
  //       if (window.innerWidth >= 1100) {
  //         setInitialWidth(window.innerWidth - 650);
  //       } else if (window.innerWidth > 1000) {
  //         setInitialWidth(window.innerWidth - 550);
  //       } else if (window.innerWidth > 800) {
  //         setInitialWidth(window.innerWidth - 450);
  //       } else if (window.innerWidth > 300) {
  //         setInitialWidth(window.innerWidth - 250);
  //       } else if (window.innerWidth > 200) {
  //         setInitialWidth(window.innerWidth - 150);
  //       }
  //     }
  //   };
  return (
    <>
      <Document file={sample2}></Document>
    </>
  );
};

export default PdfDoc;
