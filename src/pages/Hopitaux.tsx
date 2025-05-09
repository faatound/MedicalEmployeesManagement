const Hopitaux = () => {
  const hopitaux = [
    { src: "/hopital1.jpeg", title: "Hôpital Général" },
    { src: "/massachusets.jpeg", title: "Massachusetts Hospital" },
    { src: "/memorialHospital.jpeg", title: "Memorial Hospital" },
  ];

  return (
    <div style={{ padding: '200px', fontFamily: 'Arial, sans-serif', backgroundColor: '#f9f9f9' , marginTop:'-150px' }}>
      <h1 style={{ textAlign: 'center', color: '#2c3e50' }}>Nos Hôpitaux Partenaires</h1>
      <p style={{ textAlign: 'center', maxWidth: '700px', margin: '10px auto 40px', color: '#555' }}>
        Découvrez nos hôpitaux partenaires à travers le pays. Nous collaborons avec les meilleurs établissements pour garantir des soins de qualité.
      </p>

      <div style={{ 
        display: 'flex', 
        flexWrap: 'wrap', 
        justifyContent: 'center', 
        gap: '30px' 
      }}>
        {hopitaux.map((hopital, index) => (
          <div
            key={index}
            style={{
              backgroundColor: 'white',
              borderRadius: '15px',
              boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
              overflow: 'hidden',
              width: '300px',
              textAlign: 'center',
              transition: 'transform 0.3s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
            onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
          >
            <img
              src={hopital.src}
              alt={hopital.title}
              style={{ width: '100%', height: '200px', objectFit: 'cover' }}
            />
            <h3 style={{ margin: '15px 0', color: 'black' }}>{hopital.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hopitaux;
