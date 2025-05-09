
import '../styles/navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="#" className="navbar-logo">
          <img src="/téléchargement.png" alt="Logo" className="navbar-img" />
          <span className="navbar-title">MediCare</span>
        </a>
        <ul className="navbar-menu">
          <li><a href="#" className="navbar-link active">Page d'accueil</a></li>
          <li><a href="#" className="navbar-link">Nos hopitaux Partenaires</a></li>
          <li><a href="#" className="navbar-link">Publier une offre d'emploi</a></li>
          <li><a href="#" className="navbar-link">Contact</a></li>
        </ul>
        <div className="">
        <a href="#" className="button">Connexion</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
