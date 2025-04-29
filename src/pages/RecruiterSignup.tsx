import { useState } from 'react';

const RecruiterSignup = () => {
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Inscription recruteur :', formData);
    // envoyer les données au backend plus tard
  };

  return (
    <div style={{
      display: 'flex',
      minHeight: '100vh',
      width:'220vh',
      backgroundColor: '#e6f4ea',
      fontFamily: 'Montserrat, sans-serif'
    }}>
      {/* Image à gauche */}
      <div style={{
        flex: 1,
        backgroundImage: 'url("/Online document-bro.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}></div>

      {/* Formulaire à droite */}
      <div style={{
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '40px'
      }}>
        <form onSubmit={handleSubmit} style={{
          backgroundColor: '#ffffff',
          padding: '40px',
          borderRadius: '12px',
          boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
          width: '100%',
          maxWidth: '400px'
        }}>
          <h2 style={{ textAlign: 'center', marginBottom: '20px', color: '#2e7d32' }}>
            Inscription Recruteur
          </h2>

          <label style={{ fontWeight: '600' }}>Nom</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            style={inputStyle}
          />

          <label style={{ fontWeight: '600' }}>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            style={inputStyle}
          />

          <label style={{ fontWeight: '600' }}>Mot de passe</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            style={inputStyle}
          />

          <button type="submit" style={{
            backgroundColor: '#4CAF50',
            color: 'white',
            padding: '12px',
            width: '100%',
            border: 'none',
            borderRadius: '8px',
            fontWeight: 'bold',
            fontSize: '16px',
            marginTop: '20px',
            cursor: 'pointer',
            transition: 'background 0.3s'
          }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#388e3c')}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#4CAF50')}
          >
            S'inscrire
          </button>
        </form>
      </div>
    </div>
  );
};

// Style réutilisable pour les inputs
const inputStyle: React.CSSProperties = {
  padding: '10px',
  margin: '10px 0 20px 0',
  width: '100%',
  borderRadius: '6px',
  border: '1px solid #ccc',
  fontSize: '16px'
};

export default RecruiterSignup;
