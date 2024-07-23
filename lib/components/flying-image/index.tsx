import beachBall from "../../assets/beach_ball.png";
import helloThere from "../../assets/hello_there.mp3";
import { useEasterEgg } from "../../hooks/useEasterEgg";
import styles from "./styles.module.css";

export function FlyingImage({ image = beachBall }) {
  const isVisible = useEasterEgg();

  const playAudio = () => {
    new Audio(helloThere).play();
  };

  return (
    <>
      <div className={`${styles.fly}`}>
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
