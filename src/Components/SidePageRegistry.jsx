import LandingPageDesktop from "../assets/img/LandingPageDesktop.jpg";
import style from "../style/sidePageRegistry.module.css";

export default function SidePageRegistry() {
  return (
    <>
      <div className={style.containers}>
        <h1 className={style.title}>Binar Car Rental</h1>

        <div className={style.image}>
          <img
            className={style.banner}
            src={LandingPageDesktop}
            alt="Preview of Binar Car Rental Homepage"
          />
        </div>
      </div>
    </>
  );
}
