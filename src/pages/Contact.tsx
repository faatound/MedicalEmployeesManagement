import React from 'react';

const Contact = () => {
  return (
    <div style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      minHeight: '100vh', 
      backgroundColor: '#f0f4f8',
      padding: '250px',
       marginTop:'-250px'
    }}>
      <div style={{
        backgroundColor: 'white',
        padding: '40px',
        borderRadius: '15px',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
        width: '100%',
        maxWidth: '800px'
      }}>
        <h1 style={{ marginBottom: '10px', color: '#333', textAlign: 'center', fontSize: '2rem' }}>
          Contactez-nous
        </h1>
        <p style={{ marginBottom: '30px', color: '#666', textAlign: 'center', fontSize: '1.1rem' }}>
          N'hésitez pas à nous envoyer un message pour toute question.
        </p>
        <form>
          <input 
            type="text" 
            placeholder="Votre nom" 
            style={{
              width: '100%',
              padding: '15px',
              marginBottom: '20px',
              border: '1px solid #ccc',
              borderRadius: '8px',
              fontSize: '1rem'
            }}
          />
          <input 
            type="email" 
            placeholder="Votre email"
            style={{
              width: '100%',
              padding: '15px',
              marginBottom: '20px',
              border: '1px solid #ccc',
              borderRadius: '8px',
              fontSize: '1rem'
            }}
          />
          <textarea 
            placeholder="Votre message"
            rows="6"
            style={{
              width: '100%',
              padding: '15px',
              marginBottom: '30px',
              border: '1px solid #ccc',
              borderRadius: '8px',
              resize: 'vertical',
              fontSize: '1rem'
            }}
          />
          <button 
            type="submit"
            style={{
              width: '100%',
              backgroundColor: '#46efba',
              color: 'white',
              padding: '15px',
              border: 'none',
              borderRadius: '8px',
              fontSize: '1.1rem',
              cursor: 'pointer',
              transition: 'background-color 0.3s ease'
            }}
            onMouseOver={e => e.currentTarget.style.backgroundColor = '#6fdde7'}
            onMouseOut={e => e.currentTarget.style.backgroundColor = '#6fdde7'}
          >
            Envoyer
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
