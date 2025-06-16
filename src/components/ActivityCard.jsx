import React from 'react';

const ActivityCard = ({ activity }) => {
  return (
    <div className="activity-card">
      <div className="activity-details">
        {/* Seção de participantes */}
        <div className="participants-section">
          <h4>Participantes</h4>
          {activity.participants && activity.participants.length > 0 ? (
            <ul className="participants-list">
              {activity.participants.map((participant, idx) => (
                <li key={idx} className="participant-item">
                  {participant.name}
                </li>
              ))}
            </ul>
          ) : (
            <p className="no-participants">Nenhum participante inscrito ainda.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ActivityCard;