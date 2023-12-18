import Button from "./Button";
import Contact from "./Contact";

const resumeUrl =
  "https://drive.google.com/file/d/1TjSlfOf1BRqBKaIXqW8jshnrD-Um9ZJC/view?usp=drive_link";

function NavBar({ email }) {
  function resume() {
    window.location.href = resumeUrl;
  }

  return (
    <nav
      className="navbar sticky-top navbar-expand-sm navbar-dark bg-transparent d-flex justify-content-center"
      id="scoller"
    >
      <ul className="nav nav-pills row justify-content-md-center">
        <li className="nav-item col-auto">
          <Button name="About" href="#about" />
        </li>
        <li className="nav-item col-auto">
          <Button name="Projects" href="#projects" />
        </li>
        <li className="nav-item col-auto">
          <Button name="Contact" href="#contact" />
        </li>
        <li className="nav-item col-auto">
          <Button name="Resume" onClick={resume} />
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
