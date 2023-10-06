import { useEffect } from "react";
import "./App.css";
import FileViewers from "./components/FileViewers";
import PdfDoc from "./components/PdfDoc";
import MikePdfDoc from "./components/MikePdfDoc";
import PlangridFileViewer from "./components/PlangridFileViewer";
import ViewerFrame from "./components/ViewerFrame";
import WhiteBoard from "./components/WhiteBoard";
import NativeDocViewer from "./components/NativeDocViewer";
import PSDViewer from "./components/PSDViewer";

function App() {
  // below is disable
  // useEffect(() => {
  //   window.addEventListener("contextmenu", (e) => {
  //     e.preventDefault();
  //   });
  // }, []);
  const handleKeyDown = (event) => {
    if (event.ctrlKey && event.shiftKey && event.key === "i") {
      event.preventDefault(); // Prevent the default Ctrl+Shift+I behavior
    }
  };
  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);
  return (
    <div className="App">
      <PSDViewer />
      {/* <NativeDocViewer /> */}
      {/* <FileViewers /> */}
      {/* <PdfDoc /> */}
      {/* <MikePdfDoc /> */}
      {/* <PlangridFileViewer /> */}
      {/* <ViewerFrame /> */}
      {/* <WhiteBoard /> */}
    </div>
  );
}

export default App;
