import beachBall from "../../assets/beach_ball.png";
import { useEasterEgg } from "../../hooks/useEasterEgg";
import styles from "./styles.module.css";

export function FlyingImage({ image = beachBall }) {
  const isVisible = useEasterEgg();

  return (
    <>
      <div className={`${styles.fly}`}>
        {isVisible && (
          <>
            <img
              id="flying-image"
              src={image}
              alt="flying-image"
              style={{ cursor: "pointer" }}
            />
          </>
        )}
      </div>
    </>
  );
}
