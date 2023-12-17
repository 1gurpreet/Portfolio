import rpi from "../logos/raspberry-pi.svg";
import py from "../logos/python-5.svg";
import redis from "../logos/redis.svg";
import reactLogo from "../logos/react-2.svg";
import numpyLogo from "../logos/numpy-1.svg";

function Projects() {
  return (
    <div
      className="container d-flex flex-wrap flex-column align-items-center justify-content-center scoll-appear-animation"
      id="projects"
    >
      <div className="row justify-content-md-center">
        <div className="col col-md-auto">
          <h1 className="text">Projects</h1>
        </div>
      </div>
      <div className="row justify-content-md-center">
        <div className="col col-md-auto">
          <a href="">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Raspberry Pi Drone</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <hr />
                <div class="d-flex flex-wrap justify-content-center">
                  <div class="p-2 bd-highlight">
                    {" "}
                    <img src={rpi} style={{ maxWidth: 20 + "px" }} />
                  </div>
                  <div class="p-2 bd-highlight">
                    <img src={py} style={{ maxWidth: 20 + "px" }} />
                  </div>
                  <div class="p-2 bd-highlight">
                    <img src={redis} style={{ maxWidth: 20 + "px" }} />
                  </div>
                  <div class="p-2 bd-highlight">
                    <img src={reactLogo} style={{ maxWidth: 20 + "px" }} />
                  </div>
                </div>
              </div>
            </div>
          </a>
        </div>
        <div className="col col-md-auto">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Sun Position Tracking</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <hr />
              <div class="d-flex flex-wrap justify-content-center">
                {" "}
                <div class="p-2 bd-highlight">
                  <img src={rpi} style={{ maxWidth: 20 + "px" }} />
                </div>
                <div class="p-2 bd-highlight">
                  <img src={py} style={{ maxWidth: 20 + "px" }} />
                </div>
                <div class="p-2 bd-highlight">
                  <img src={numpyLogo} style={{ maxWidth: 20 + "px" }} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col col-md-auto">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Farming IoT</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
