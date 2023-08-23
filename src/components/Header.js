import "./Header.css";

function Header() {
  return (
    <header>
      <div className="hidden">
        <div className="head">
          <img
            src="https://images.ctfassets.net/y2ske730sjqp/821Wg4N9hJD8vs5FBcCGg/9eaf66123397cc61be14e40174123c40/Vector__3_.svg?w=460"
            alt=""
          />
          <div className="sel">
            <select className="form">
              
              <option className="sel1">English</option>

              <option>Русский</option>
            </select>
            <button>Sign in</button><img className="glb1"
                src="https://icon-library.com/images/white-globe-icon/white-globe-icon-24.jpg"
                alt=""
              />
          </div>
        </div>
        <div className="head2">
          <h1>Unlimited movies, TV shows, and more</h1>
          <p className="line">Watch anywhere. Cancel anytime.</p>
          <p className="line2">
            Ready to watch? Enter your email to create or restart your
            membership.
          </p>

          <div className="in">
            <input id="email" type="email" placeholder="Email address" />
            <button className="start">Get Started  </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
