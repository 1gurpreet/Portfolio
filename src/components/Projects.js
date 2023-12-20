import rpi from "../logos/raspberry-pi.svg";
import py from "../logos/python-5.svg";
import redis from "../logos/redis.svg";
import reactLogo from "../logos/react-2.svg";
import numpyLogo from "../logos/numpy-1.svg";
import microPythonLogo from "../logos/Micropython-logo.svg.png"

function Projects() {
  return (
    <div
      className="container d-flex flex-column  justify-content-center align-items-center scoll-appear-animation fadeInAnimation"
      id="projects"
    >
      <div className="d-flex justify-content-center">
        <h1 className="text">Projects:</h1>
      </div>
      <div
        className="d-flex flex-row flex-wrap justify-content-center mb-3"
        id="projects-layout"
      >

        <div className="p-2">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Sun Position Tracking</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <hr />
              <div className="d-flex flex-wrap justify-content-center">
                {" "}
                <div className="p-2 bd-highlight">
                  <img src={rpi} style={{ maxWidth: 20 + "px" }} />
                </div>
                <div className="p-2 bd-highlight">
                  <img src={py} style={{ maxWidth: 20 + "px" }} />
                </div>
                <div className="p-2 bd-highlight">
                  <img src={numpyLogo} style={{ maxWidth: 20 + "px" }} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="p-2">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Farming IoT</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <hr />
              <div className="p-2 bd-highlight">
                  <img src={microPythonLogo} style={{ maxWidth: 30 + "px" }} />
                </div>
            </div>
          </div>
        </div>
        <div className="p-2">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Maze Visualizer</h5>
              <p className="card-text">
                Data Structures and algorithms. 
              </p>
              <hr />
              <div className="p-2 bd-highlight">
                  <img src={reactLogo} style={{ maxWidth: 20 + "px" }} />
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
