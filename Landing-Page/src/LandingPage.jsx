import "./LandingPage.css";

const LandingPage = () => {
  return (
    <div className="landing-page">
      <header className="header">
        <h1>Welcome to My Project</h1>
        <nav className="nav-links"></nav>
        <a
          href="https://github.com/Shivamshrivaastava"
          target="_blank"
          rel="noopener noreferrer"
        >
          Overview
        </a>
        <a
          href="https://github.com/Shivamshrivaastava?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
        >
          Repositories
        </a>
      </header>
    </div>
  );
};
export default LandingPage;
