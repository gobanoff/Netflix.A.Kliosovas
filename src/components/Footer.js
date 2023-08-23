import "./Footer.css";

function Footer() {
  return (
    <footer>
      <div className="bord"></div>

      <p className="t">
        <a href="#">Questions? Contact us.</a>
      </p>
      <div className="list">
        {" "}
        <div>
          {" "}
          <ul>
            <li>
              <a href="#">FAQ</a>
            </li>

            <li>
              <a href="#">Investor Relations</a>
            </li>

            <li>
              <a href="#">Privacy</a>
            </li>

            <li>
              <a href="#">Speed Test</a>
            </li>
            <li>
              <a href="#">Ad Choices</a>
            </li>
          </ul>
        </div>
        <div>
          {" "}
          <ul>
            <li>
              <a href="#">Help Center</a>
            </li>
            <li>
              <a href="#">Jobs</a>
            </li>
            <li>
              <a href="#">Cookie Preferences</a>
            </li>
            <li>
              <a href="#">Legal Guarantee</a>
            </li>
          </ul>
        </div>
        <div>
          {" "}
          <ul>
            <li>
              <a href="#">Account</a>
            </li>
            <li>
              <a href="#">Ways to Watch</a>
            </li>
            <li>
              <a href="#">Corporate Information</a>
            </li>
            <li>
              <a href="#">Legal Notices</a>
            </li>
          </ul>
        </div>
        <div>
          {" "}
          <ul>
            <li>
              <a href="#">Media Center</a>
            </li>
            <li>
              <a href="#">Terms of Use</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>

            <li>
              <a href="#">Only on Netflix</a>
            </li>
          </ul>
        </div>
      </div>
      <select className="form1">
        <option className="sel1">English</option>

        <option>Русский</option>
      </select>
      <p className="sign">Netflix Lithuania</p>
      <img
        className="glb"
        src="https://icon-library.com/images/white-globe-icon/white-globe-icon-24.jpg"
        alt=""
      />
    </footer>
  );
}

export default Footer;
