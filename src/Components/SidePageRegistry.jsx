import LandingPageDesktop from "../assets/img/LandingPageDesktop.jpg";

export default function SidePageRegistry() {
  return (
    <>
      <div className={style.container}>
        <div className={style.title}>
          <h1>Binar Car Rental</h1>
        </div>

        <div className={style.image}>
          <img className={style.banner} src={LandingPageDesktop} alt="" />
        </div>
      </div>
    </>
  );
}
