
import '../styles/navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
   <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <img src="/téléchargement.png" alt="Logo" className="navbar-img" />
          <span className="navbar-title">MediCare</span>
        </Link>
        <ul className="navbar-menu">
          <li><Link to="/" className="navbar-link active">Page d'accueil</Link></li>
          <li><Link to="/hopitaux" className="navbar-link">Nos hôpitaux Partenaires</Link></li>
          <li><Link to="/publier-offre" className="navbar-link">Publier une offre d'emploi</Link></li>
          <li><Link to="/contact" className="navbar-link">Contact</Link></li>
        </ul>
        <div>
          <Link to="/login" className="button">Connexion</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
