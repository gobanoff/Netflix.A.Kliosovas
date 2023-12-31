import "./Section.css";

function Section3() {
  return (
    <section className="s3">
      <div className="bord"></div>
      <div className="half3">
        <h1>Watch everywhere</h1>
        <p>Stream unlimited movies and TV shows on your phone, tablet,</p>
        <p>laptop, and TV.</p>
      </div>
      <img
        src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile.png"
        alr=""
      />{" "}
      <video
        src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices.m4v"
        type="video/m4v"
        autoplay
        muted
        loop
      ></video>
    </section>
  );
}

export default Section3;
