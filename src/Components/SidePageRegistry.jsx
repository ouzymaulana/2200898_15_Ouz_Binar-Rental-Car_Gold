import LandingPageDesktop from "../assets/img/LandingPageDesktop.jpg";
import style from "../style/sidePageRegistry.module.css";
// import url('https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300..900;1,300..900&display=swap')

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
