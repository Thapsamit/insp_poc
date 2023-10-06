import React from "react";

const ViewerFrame = () => {
  return (
    <>
      <iframe
        title={"PDF-Viewer"}
        src={`https://insp-development.s3.ap-south-1.amazonaws.com/files/roomId_iPcYfZVMZm/INSP%20VIDEO%20PORTAL%C2%A0.edited%20%281%29.pdf`}
        style={{ height: "100vh", width: "90vw" }}
      ></iframe>
    </>
  );
};

export default ViewerFrame;
