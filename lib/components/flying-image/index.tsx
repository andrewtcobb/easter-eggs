import beachBall from "../../assets/beach_ball.png";
import helloThere from "../../assets/hello_there.mp3";
import { useEasterEgg } from "../../hooks/useEasterEgg";
import "./styles.css";

export function FlyingImage({ image = beachBall }) {
  const isVisible = useEasterEgg();

  const playAudio = () => {
    new Audio(helloThere).play();
  };

  return (
    <>
      <div className="fly">
        {isVisible && (
          <>
            <img
              id="flying-image"
              src={image}
              alt="flying-image"
              onClick={playAudio}
              style={{ cursor: "pointer" }}
            />
          </>
        )}
      </div>
    </>
  );
}
