import "./Section.css";

function Section2() {
  return (
    <section className="s2">
      <img
        src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg"
        alr=""
      />

      <div className="bord2"></div>
      <div className="half2">
        <h1>
          Download your shows to <br /> watch offline
        </h1>
        <p>Save your favorites easily and always have something to watch.</p>
      </div>
      <div className="sml">
        <div className="book">
          <img
            id="img1"
            src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png"
            alt=""
          />
        </div>
        <div>
          <h4>Stranger Things</h4>
          <p id="blue">Downloading...</p>
        </div>
        <img
          id="img5"
          src="https://cdn4.vectorstock.com/i/1000x1000/47/43/arrow-down-on-black-background-vector-22564743.jpg"
          alt=""
        />
      </div>
    </section>
  );
}

export default Section2;
