function Intro({ style }) {
  return (
    <div className="container d-flex flex-column align-items-center justify-content-center">
      <div className="row">
        <h1 className="text fadeInAnimation" id="into-name">Hi 👋 I am Gurpreet.</h1>
      </div>
      <div className="row">
        <p className="text fadeInAnimation" id="into-description"> I am a software engineer with interests in IoT.</p>
      </div>
    </div>
  );
}

export default Intro;
