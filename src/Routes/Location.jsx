import "./Location.css";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { useState } from "react";
import { RiFileCopyFill, RiFileCopyLine } from "@remixicon/react";

export default function Location() {
  const [copied, setCopied] = useState(false);
  const address = "570 S 300 W Suite: 101, Salt Lake City, UT 84101 ";

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
        <h3>570 S 300 W Suite: 101,</h3>
        <h3> Salt Lake City, UT 84101</h3>
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d680.035648425871!2d-111.90016080104688!3d40.75718203840463!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8752f5c5fb9e1dbf%3A0x83ae51af97071568!2sPost%20District%20Residences!5e1!3m2!1sen!2sus!4v1727197392063!5m2!1sen!2sus"
        width="95%"
        height="350"
        style={{ border: "0", borderRadius: "12px" }}
        allowFullScreen=""
        loading="lazy"
        title="Event Location"
      ></iframe>
    </div>
  );
}
