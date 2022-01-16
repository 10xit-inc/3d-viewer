import React, { useEffect, useState } from "react";

const App = () => {
  const [objectUrl, setUrl] = useState("");
  const [filename, setFilename] = useState(null);
  const [dimensions, setDimensions] = useState({
    height: 600,
    width: 800,
  });

  useEffect(() => {
    // https://10xit-inc.github.io/3d-viewer?object=${3D_MODEL_CID}&filename=${MODEL_FILENAME_WITH_EXTENSION}
    //http://localhost:3000/?object=QmX4GncouGMa8ATMfwbV464WJbJTWc85c1Ptafc6N6nrDT&filename=cube.glb
    if (window.OV) {
      detectDimensions();
      window.addEventListener("resize", detectDimensions);
      const params = new URLSearchParams(window.location.search);
      const object = params.get("object");
      const name = params.get("filename");
      if (name) {
        setFilename(name);
      }
      const url = `https://ipfs.io/ipfs/${object}?filename=${
        name ? name : filename
      }`;
      console.log("Full URL: ", url);
      setUrl(url);
      return () => {
        window.removeEventListener("resize", detectDimensions);
      };
    }
    //eslint-disable-next-line
  }, [window.OV]);

  const detectDimensions = () => {
    const height = window.innerHeight;
    const width = window.innerWidth;
    setDimensions({
      height,
      width,
    });
  };

  return (
    <div
      style={{
        display: "flex",
        width: "100vw",
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        className="online_3d_viewer"
        style={{ width: dimensions.width, height: dimensions.height }}
        model={objectUrl}
        camera="-1.5,-3.0,2.0,0,0,0,0,0,1"
      ></div>
    </div>
  );
};

export default App;
