import React from 'react';
import TicketCard from './TicketCard';
import { sortTickets } from '../utils/sortingUtil';  
import { groupTickets} from '../utils/groupingUtil'; 
import { getStatusIcon, getPriorityIcon } from '../utils/iconUtil';  

const KanbanBoard = ({ tickets, users, groupBy, sortBy }) => {
 
  const ticketsWithUserDetails = tickets.map(ticket => {
    const assignedUser = users.find(user => user.id === ticket.userId);
    return {
      ...ticket,
      user: assignedUser ? assignedUser.name : 'Unknown User',
      profilePicture: assignedUser ? assignedUser.profilePicture : null,
    };
  });

  const sortedTickets = sortTickets([...ticketsWithUserDetails], sortBy);
  const groupedTickets = groupTickets(sortedTickets, groupBy);

  return (
    <div className="kanban-board">
      {Object.keys(groupedTickets).map(group => (
        <div key={group} className="kanban-column">
          <div className="column-header">
            <h3>
              {groupBy === 'user' && groupedTickets[group][0] && (
                <img
                  src={'/icons/profile.svg'}
                  alt={`${group} Profile`}
                  className="profile-picture"
                />
              )}
              {groupBy === 'status' && (
                <img src={getStatusIcon(group)} alt={`${group} Icon`} className="icon" />
              )}
              {groupBy === 'priority' && (
                <img src={getPriorityIcon(group)} alt={`${group} Icon`} className="icon" />
              )}
              {group} {groupedTickets[group].length} 
            </h3>
            <div className="icon-actions">
              <img src="/icons/add.svg" alt="Add" className="action-icon" />
              <img src="/icons/3 dot menu.svg" alt="Options" className="action-icon" />
            </div>
          </div>

          {groupedTickets[group].map(ticket => (
            <TicketCard key={ticket.id} ticket={ticket} groupBy={groupBy} />
          ))}
        </div>
      ))}

      <style jsx>{`
        .kanban-board {
          display: flex;
          justify-content: space-around;
          margin: 20px;
        }

        .kanban-column {
          flex: 1;
          margin: 0 10px;
          background-color: white;
          border-radius: 5px;
          padding: 10px;
        }

        .column-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .kanban-column h3 {
          display: flex;
          align-items: center;
          background-color: white;
          color: black;
          padding: 10px;
          border-radius: 5px 5px 0 0;
        }

        .profile-picture {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          margin-right: 8px; /* Space between the picture and text */
        }

        .icon {
          width: 15px;
          height: 15px;
          margin-right: 8px;
        }

        .icon-actions {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .action-icon {
          width: 20px;
          height: 20px;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
};

export default KanbanBoard;
