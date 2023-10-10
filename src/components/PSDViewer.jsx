import { useEffect, useRef } from "react";

export default function PSDViewer() {
  const containerRef = useRef(null);
  console.log("container ref outside", containerRef);

  useEffect(() => {
    console.log("container ref", containerRef);
    const container = containerRef.current; // This `useRef` instance will render the PDF.
    console.log("container", container);

    let PSPDFKit, instance;

    (async function () {
      PSPDFKit = await import("pspdfkit");

      PSPDFKit.unload(container); // Ensure that there's only one PSPDFKit instance.

      instance = await PSPDFKit.load({
        // Container where PSPDFKit should be mounted.
        container,
        // The document to open.

        disableWebAssemblyStreaming: true,
        document: require("../assets/resume.doc"),

        // document:
        //   "https://insp-development-bucket.s3.ap-south-1.amazonaws.com/files/roomId_F5vOsurp3D/resume.docx?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAZHE7QK27AWMDOJS6%2F20231005%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20231005T035005Z&X-Amz-Expires=3600&X-Amz-Signature=88a27c2d4e34ee170dc6aa0231696e025dc6dbae581cc76dc0e138d3fe06bf96&X-Amz-SignedHeaders=host",
        // document:
        //   "https://www.mtsac.edu/webdesign/accessible-docs/word/example03.docx",

        // Use the public directory URL as a base URL. PSPDFKit will download its library assets from here.
        baseUrl: `${window.location.protocol}//${window.location.host}/${process.env.PUBLIC_URL}`,
      });
    })();

    return () => PSPDFKit && PSPDFKit.unload(container);
  }, []);

  // This div element will render the document to the DOM.
  return <div ref={containerRef} style={{ width: "100%", height: "100vh" }} />;
}
