import Button from "./Button";
import Contact from "./Contact";

const resumeUrl =
  "https://docs.google.com/document/d/1t_-evKCpESdJYs-yd0N0Q7CyClTgZdPNfYGr0PmwInk/edit?usp=sharing";

function NavBar({ email }) {
  function resume() {
    window.location.href = resumeUrl;
  }

  return (
    <nav
      className="navbar sticky-top navbar-expand-lg navbar-dark bg-transparent d-flex justify-content-center"
      id="scoller"
    >
      <ul class="nav nav-pills">
        <li class="nav-item">
          <Button name="About" href="#about" />
        </li>
        <li class="nav-item">
          <Button name="Projects" href="#projects" />
        </li>
        <li class="nav-item">
          <Button name="Contact" href="#contact" />
        </li>
        <li class="nav-item">
          <Button name="Resume" onClick={resume} />
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
