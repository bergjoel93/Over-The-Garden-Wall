import "./RSVP.css";
export default function RSVP() {
  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h1 className="header1">What everyone is bringing</h1>
      <iframe
        src="https://docs.google.com/spreadsheets/d/1A4UuyZ7zvE5wrmv5wllpoQthThkQzQiFdrdeqy6crrA/pubhtml?gid=1502543630&amp;single=true&amp;"
        width="100%"
        height="310"
      ></iframe>
      <h1 className="header1">RSVP Form</h1>
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLSeNE-i9Ji6DlHZ7HZ1Ak3_UWnDK_Na32hBr_uQCG9W6bG84KQ/viewform?embedded=true"
        width="100%"
        height="1315"
        title="RSVP Form"
      >
        Loading…
      </iframe>
      <div id="venmo-container">
        <h2 className="header1">Send contributions via Venmo</h2>
        <a
          href="https://venmo.com/Joel-Berg"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-block",
            padding: "10px 20px",
            marginBottom: "60px",
            backgroundColor: "#3D95CE",
            color: "white",
            borderRadius: "5px",
            textDecoration: "none",
            fontWeight: "bold",
          }}
        >
          Venmo
        </a>
      </div>
    </div>
  );
}
