import React, { useState } from 'react';
import './Leaderboard.css';
import { useSelector } from 'react-redux';

const Leaderboard = () => {
  const profiles = useSelector((state) => state.profiles);
  const [sortBy, setSortBy] = useState('hot'); 

  const sortedProfiles = [...profiles].sort((a, b) =>
    sortBy === 'hot' ? b.hot - a.hot : b.rating - a.rating
  );

  const handleToggle = () => {
    setSortBy(prev => (prev === 'hot' ? 'rating' : 'hot'));
  };

  return (
    <div className="out">
      <div className="leaderboard">
        LeaderBoard
        <button className="toggle-btn" onClick={handleToggle}>
          Sort by: {sortBy === 'hot' ? '🔥 Votes' : '📊 Rating'}
        </button>
      </div>

      <div className="container">
        {sortedProfiles.map((profile, index) => (
          <div className="r" key={profile._id}>
            <div className="rank">#{index + 1}</div>
            <div className="img">
              <img
                src={profile.image || '/fallback.jpg'}
                alt={profile.name}
                className="avatar"
              />
            </div>
            <div className="info">
              <div className="nameANDyear">
                <strong>Name: {profile.name}</strong>
            
              </div>

              <div className="hot-count">
                <strong>
                  {sortBy === 'hot'
                    ? `🔥 Votes: ${profile.hot}`
                    : `📊 Rating: ${profile.rating}`}
                </strong>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Leaderboard;
