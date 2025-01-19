import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <h2>Dave Bunyan &middot; Data Scientist/Programmer</h2>
      <ul>
        <li>
          <a href="#">
            <span className="fab fa-linkedin" aria-hidden="true"></span>
            <span className="sr-only">LinkedIn</span>
          </a>
        </li>
        <li>
          <a href="#">
            <span className="fab fa-github-square" aria-hidden="true"></span>
            <span className="sr-only">Github</span>
          </a>
        </li>
        <li>
          <a href="#">
            <span className="fas fa-envelope-square" aria-hidden="true"></span>
            <span className="sr-only">Email</span>
          </a>
        </li>
      </ul>
      <p>
        <small>&copy 2025 Dave Bunyan. All rights reserved</small>
      </p>
    </footer>
  );
};

export default Footer;
