import myImage from "../images/photo.png";
export default function Banner() {
  return (
    <>
      <div className="banner-main">
        <div className="left">
          <div className="personal-info">
            <p className="profile">Web Developer </p>
            <p className="msg">Hello World, I am </p>
            <p className="name">Gurjot Singh</p>
          </div>
        </div>

        <div className="right">
          <img src={myImage} alt="" id="myimg" />
        </div>
      </div>
    </>
  );
}
