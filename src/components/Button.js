function Button({ name, onClick, href }) {
  return (
    <>
      {onClick ? (
        <a
          className="btn btn-outline-light btn-no-hover m-2 fadeInAnimation"
          id={`${name}-btn`}
          onClick={onClick}
        >
          {name}
        </a>
      ) : (
        <a
          className="btn btn-outline-light btn-no-hover m-2 fadeInAnimation"
          id={`${name}-btn`}
          href={href}
        >
          {name}
        </a>
      )}
    </>
  );
}

export default Button;
