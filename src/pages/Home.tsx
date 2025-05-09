import { Link } from 'react-router-dom';


const Home = () => {
  return (
    <div style={{ backgroundColor: '#d3f9d8', padding: '10px', textAlign: 'center', fontFamily: 'regular 400' }}>
      <h1 style={{color:'#374151'}}>Bienvenue dans MediCare</h1>
      
      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
        <img 
          src="/Business merger-amico.png" 
          alt="Gauche" 
          style={{ width: '45%', height: 'auto', borderRadius: '10px' , marginTop:'-60px' }} 
        />
        <img 
          src="/Health professional team-bro.png" 
          alt="Droite" 
          style={{ width: '50%', height: 'auto', borderRadius: '10px', marginTop:'-110px' }} 
        />
      </div>
      
      <div style={{ marginTop: '-115px' }}>
        <Link to="/recruiter-signup">
          <button 
            style={{
              backgroundColor: '#4CAF50',
              color: 'white',
              padding: '12px 24px',
              borderRadius: '8px',
              border: 'none',
              margin: '10px',
              cursor: 'pointer',
              fontSize: '18px',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
              transition: 'background-color 0.3s, transform 0.3s',
            }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#45a049'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#4CAF50'}
            onClick={() => console.log('Recruteur clicked')}
          >
            Recruteur
          </button>
        </Link>
        <Link to="/employee-signup">
          <button 
            style={{
              backgroundColor: '#4CAF50',
              color: 'white',
              padding: '12px 24px',
              borderRadius: '8px',
              border: '2px solid #4CAF50',
              margin: '10px',
              cursor: 'pointer',
              fontSize: '18px',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
              transition: 'background-color 0.3s, transform 0.3s',
            }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#45a049'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#4CAF50'}
            onClick={() => console.log('Employé clicked')}
          >
            Employé
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
