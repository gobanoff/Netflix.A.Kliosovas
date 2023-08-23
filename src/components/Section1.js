import "./Section.css";

function Section1() {
  return (
    <section className="s1">
      <div className="bord"></div>
      <div className="half">
        <h1>Enjoy on your TV</h1>
        <p>Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV,</p>
        <p>Blu-ray players, and more.</p>
      </div>
      <img
        src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"
        alr=""
      />{" "}
      <video
        src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v"
        type="video/mp4"
        autoplay
        muted
        loop
      ></video>
    </section>
  );
}

export default Section1;
