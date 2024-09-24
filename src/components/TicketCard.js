import React from 'react';

const TicketCard = ({ ticket, groupBy, profilePicture }) => {
  // Arrow function to get the icon path based on priority
  const getPriorityIcon = (priority) => {
    switch (priority) {
      case 4:
        return '/icons/SVG - Urgent Priority colour.svg';
      case 3:
        return '/icons/Img - High Priority.svg';
      case 2:
        return '/icons/Img - Medium Priority.svg';
      case 1:
        return '/icons/Img - Low Priority.svg';
      case 0:
      default:
        return '/icons/No-priority.svg';
    }
  };

  // Arrow function to get the icon path based on status
  const getStatusIcon = (status) => {
    switch (status) {
      case 'Backlog':
        return '/icons/Backlog.svg';
      case 'Todo':
        return '/icons/To-do.svg';
      case 'In progress':
        return '/icons/in-progress.svg';
      case 'Done':
        return '/icons/Done.svg';
      case 'Canceled':
        return '/icons/Cancelled.svg';
      default:
        return '/icons/other-icon.png';
    }
  };

  return (
    <div className={`ticket-card priority-${ticket.priority}`}>
      {/* Position profile picture at top right without taking space */}
      <div className="profile-container">
        <img
          src={profilePicture || '/icons/profile.svg'}
          alt="Profile"
          className="profile-picture"
        />
      </div>

      <p className="ticket-id">{ticket.id}</p>
      <div className="title-container">
        {(groupBy === 'priority' || groupBy === 'user') && (
          <img src={getStatusIcon(ticket.status)} alt="Status Icon" className="status-icon" />
        )}
        <p className="ticket-title">{ticket.title}</p>
      </div>

      <div className="tag-container">
        {(groupBy === 'status' || groupBy === 'user') && (
          <img src={getPriorityIcon(ticket.priority)} alt="Priority Icon" className="priority-icon" />
        )}
        <p className="ticket-tag">• {ticket.tag.join(', ')}</p>
      </div>

      <style jsx>{`
        .ticket-card {
          background-color: white;
          margin: 10px 0;
          padding: 10px;
          border-radius: 8px;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
          transition: box-shadow 0.3s;
          position: relative; /* Needed for absolute positioning */
        }

        .ticket-card:hover {
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
        }

        .profile-container {
          position: absolute;
          top: 10px;
          right: 10px;
          /* Make sure it doesn't affect the layout */
        }

        .profile-picture {
          width: 24px; /* Adjusted size */
          height: 24px;
          border-radius: 50%;
          object-fit: cover; /* To ensure picture fits well */
        }

        .ticket-id {
          color: #888;
          font-size: 0.9em;
          margin-bottom: 5px;
        }

        .title-container {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 5px;
        }

        .status-icon {
          width: 15px;
          height: 15px;
          margin-right: 8px;
        }

        .ticket-title {
          font-weight: 400;
          margin: 0;
        }

        .tag-container {
          display: flex;
          align-items: center;
        }

        .priority-icon {
          width: 15px;
          height: 15px;
          margin-right: 8px;
        }

        .ticket-tag {
          color: #888;
          margin: 0;
        }
      `}</style>
    </div>
  );
};

export default TicketCard;
