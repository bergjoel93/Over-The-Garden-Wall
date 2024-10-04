import "./Start.css";
import Typewriter from "typewriter-effect";
// It takes 25 seconds to finish writing the text.

export default function Start() {
  return (
    <div id="start-container">
      <div id="overlay">
        <div id="text-container">
          <Typewriter
            options={{ delay: 75 }}
            onInit={(typewriter) => {
              typewriter
                .typeString(
                  "Are you ready to join the Pottsfield Celebration? Into the Unknown?!<br><br>"
                )
                .pauseFor(1000)
                .typeString(
                  "Friday, October 11th at 7PM we will be screening the amazing Over the Garden Wall.<br><br>"
                )
                .pauseFor(1000)
                .typeString(
                  "There will be food and drink and opportunities to contribute.<br><br>"
                )
                .pauseFor(1000)
                .typeString(
                  "Don't forget to RSVP from the bottom tab on the left! See Information tab for parking and location."
                )
                .start();
            }}
          />
        </div>
      </div>
    </div>
  );
}
