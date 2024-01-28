import React from "react";
import QRCode from "react-qr-code";

const Qrpage = () => {
  const [value, setValue] = React.useState("https://www.google.com/search?q=inube");
  return (
    <div style={{ height: "auto", margin: "0 auto", border: "5px solid white" }}>
      <div
        style={{
          height: "100%",
          margin: "0 auto",
          maxWidth: 250,
          width: "100%",
          border: "2px solid #000",
        }}
      >
        <QRCode
          size={256}
          style={{ height: "auto", maxWidth: "100%", width: "100%" }}
          value={value}
          viewBox={`0 0 256 256`}
        />
      </div>{" "}
    </div>
  );
};

export default Qrpage;
