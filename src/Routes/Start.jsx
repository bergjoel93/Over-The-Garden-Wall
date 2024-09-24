import "./Start.css";
import Typewriter from "typewriter-effect";
// It takes 25 seconds to finish writing the text.

export default function Start() {
  return (
    <div id="overlay">
      <div id="text-container">
        <Typewriter
          options={{ delay: 75 }}
          onInit={(typewriter) => {
            typewriter
              .typeString(
                "Welcome, we're so glad you're ready to join us.<br><br>"
              )
              .pauseFor(1000)
              .typeString(
                "Friday October Eleventh we will be screening the amazing Over the Garden Wall.<br><br>"
              )
              .pauseFor(1000)
              .typeString(
                "There will be food and drink and opportunities to contribute.<br><br>"
              )
              .pauseFor(1000)
              .typeString(
                "Please feel free to explore this site for more information."
              )
              .start();
          }}
        />
      </div>
    </div>
  );
}
