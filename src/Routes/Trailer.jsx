import "./Trailer.css";
export default function Trailer() {
  return (
    <div id="trailer-container">
      <iframe
        width="99%"
        height="450"
        src="https://www.youtube.com/embed/oAQZB98wewY?si=dWWseKKSMTb66Vwu"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
    </div>
  );
}
