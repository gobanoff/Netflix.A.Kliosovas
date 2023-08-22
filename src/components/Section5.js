import "./Section.css";

function Section5() {
  return (
    <section className="s5"><div className="bord"></div>
    <h1>Frequently Asked Questions</h1>
      <p className="line5">
        Ready to watch? Enter your email to create or restart your membership.
      </p>

      <div className="in">
        <input id="email" type="email" placeholder="Email address" />
        <button className="start">Get Started > </button>
      </div>
    </section>
  );
}

export default Section5;
