import { Outlet, useNavigate } from "react-router-dom";
import "./Root.css";

export default function Root() {
  const navigate = useNavigate(); // Initialize the navigate function
  return (
    <div id="root-container">
      <div id="details">
        <Outlet />
      </div>

      <div id="options-container">
        <button onClick={() => navigate("/rsvp")}>RSVP</button>
        <button onClick={() => navigate("/trailer")}>Trailer</button>
        <button onClick={() => navigate("/location")}>Location</button>
      </div>
    </div>
  );
}
