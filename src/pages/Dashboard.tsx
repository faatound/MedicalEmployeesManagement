import Navbar from '../components/Navbar';
import SearchBar from '../components/SearchBar'
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
        <div style={{  textAlign: 'center',  padding: '20px 0'  }}>
        <h4 >
          <span style={{ color: '#6fdde7' , textDecoration:'underline', cursor:'pointer' }}>Publier</span> votre cv !{' '}
          <span>Il suffit</span> juste d'un clic
        </h4>
        <h4 >
          <span style={{ color: '#6fdde7', textDecoration:'underline', cursor:'pointer' }}>Publier une offre d'emploi sur MediCare</span> 
         
        </h4>
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
