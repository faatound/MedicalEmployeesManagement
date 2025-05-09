import React, { useState } from 'react';
import '../styles/JobsNav.css';

const JobsNav = () => {
  const [activeTab, setActiveTab] = useState('recommended');

  return (
    <div className="jobs-nav">
      <button
        className={`jobs-nav-btn ${activeTab === 'recommended' ? 'active' : ''}`}
        onClick={() => setActiveTab('recommended')}
      >
        Emplois recommandés
      </button>
      <button
        className={`jobs-nav-btn ${activeTab === 'recent' ? 'active' : ''}`}
        onClick={() => setActiveTab('recent')}
      >
        Nouveaux résultats pour vos recherches récentes
      </button>
    </div>
  );
};

export default JobsNav;
