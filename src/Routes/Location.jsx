import "./Location.css";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { useState } from "react";
import { RiFileCopyFill, RiFileCopyLine } from "@remixicon/react";

export default function Location() {
  const [copied, setCopied] = useState(false);
  const address = "533 S 400 W, Salt Lake City, UT 84101";

  return (
    <div id="map-container">
      <div id="address-container">
        <CopyToClipboard text={address} onCopy={() => setCopied(true)}>
          <button id="copy-button">
            {copied ? (
              <span>
                <RiFileCopyLine />
              </span>
            ) : (
              <span>
                <RiFileCopyFill />
              </span>
            )}
          </button>
        </CopyToClipboard>

        <h2 className="header2">Address:</h2>
        <h3>Traeger Grills Parking Lot</h3>
        <h3>533 S 400 W,</h3>
        <h3> Salt Lake City, UT 84101</h3>
      </div>

      <div id="map-container">
        <img src="../images/MAP.png" alt="picture of map" />
      </div>

      <div id="address-container">
        <h2>Instructions:</h2>
        <p>
          🗓️ Event: Friday October 11th. Mingle at 6PM. Show starts at 7PM.
          <br />
          <br />
          🚙 Park at the Traeger Grills Headquarters Parking Lot. The parking is
          free after 8PM.
          <br /> <br />
          🚶‍➡️ Walk East through the alley past Level Crossing Brewing and
          enter through the door on the right.
          <br /> <br />
          📱 Call either Cam 801-860-2355 or Joel 385-445-1454 and one of us
          will let you in.
          <br /> <br />
          🍪What to bring: A contribution and a blanket. The Movie Theater room
          is nice and chilled. 🥶
          <br /> <br />
          🙏 A huge thank you to Kade Riding for hosting us at the Post District
          Movie Theater Room! Please be respectful and clean up after yourself!
          ❤️❤️❤️
        </p>
      </div>
    </div>
  );
}
