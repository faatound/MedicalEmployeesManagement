import Navbar from '../components/Navbar';
import SearchBar from '../components/SearchBar';
import JobsNav from '../components/JobsNav';

const Dashboard = () => {
  return (
    <div>
      <Navbar />
      <div style={{ paddingTop: '80px' }}>
        <div>
          <SearchBar />
        </div>
        <div className="text">
          <div style={{ textAlign: 'center', padding: '20px 0' }}>
            <h4>
              <span style={{ color: '#6fdde7', textDecoration: 'underline', cursor: 'pointer' }}>Publier</span> votre cv !{' '}
              <span>Il suffit</span> juste d'un clic
            </h4>
            <h4>
              <span style={{ color: '#6fdde7', textDecoration: 'underline', cursor: 'pointer' }}>
                Publier une offre d'emploi sur MediCare
              </span>
            </h4>
          </div>

          <div style={{ textAlign: 'center', padding: '5px 20px' }}>
            <h1 style={{ 
              fontSize: '2.5rem', 
              fontWeight: 'bold', 
              color: '#333',
              maxWidth: '800px',
              margin: '0 auto',
              lineHeight: '1.3'
            }}>
              Come Work or Find Work With <span style={{ color: '#6fdde7' }}>MediCare</span>
            </h1>
          </div>
        </div>

        <div>
          <JobsNav />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
