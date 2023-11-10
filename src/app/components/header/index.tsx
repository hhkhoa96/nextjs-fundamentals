interface HeaderProps {
  title: string;
  description: string;
  backgroundImage: string;
}

function Header({ title, description, backgroundImage }: HeaderProps) {
  return (
    <header
      className="intro-header"
      style={{
        backgroundImage,
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
            <div className="page-heading">
              <h1>{title}</h1>
              <hr className="small" />
              <span className="subheading">{description}</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
