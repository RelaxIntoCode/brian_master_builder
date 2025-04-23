import styles from "./Hero.module.css";

function Hero({ title, img }) {
  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${img})`,
          height: "250px",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div>
          <h3 className={styles.heroTitle}>{title}</h3>
        </div>
      </div>
    </div>
  );
}
export default Hero;
