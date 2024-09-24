// utils/groupingUtil.js
export const priorityOrder = ['No Priority', 'Urgent', 'High', 'Medium', 'Low'];
export const statusOrder = ['Backlog', 'Todo', 'In progress', 'Done', 'Canceled'];

export const getPriorityLabel = (priority) => {
  switch (parseInt(priority, 10)) {
    case 4: return 'Urgent';
    case 3: return 'High';
    case 2: return 'Medium';
    case 1: return 'Low';
    case 0: return 'No Priority';
    default: return 'Unknown';
  }
};

export const groupTickets = (tickets, groupBy) => {
  const grouped = {};

  tickets.forEach(ticket => {
    let key;
    switch (groupBy) {
      case 'status':
        key = ticket.status;
        break;
      case 'user':
        key = ticket.user;
        break;
      case 'priority':
        key = getPriorityLabel(ticket.priority);
        break;
      default:
        key = 'Others';
    }

    if (!grouped[key]) {
      grouped[key] = [];
    }
    grouped[key].push(ticket);
  });

  // Reorder groups based on custom order
  if (groupBy === 'priority') {
    const orderedGrouped = {};
    priorityOrder.forEach(priority => {
      orderedGrouped[priority] = grouped[priority] || [];
    });
    return orderedGrouped;
  }

  if (groupBy === 'status') {
    const orderedGrouped = {};
    statusOrder.forEach(status => {
      orderedGrouped[status] = grouped[status] || [];
    });
    return orderedGrouped;
  }

  if (groupBy === 'user') {
    const orderedGrouped = {};
    Object.keys(grouped).sort((a, b) => a.localeCompare(b)).forEach(user => {
      orderedGrouped[user] = grouped[user];
    });
    return orderedGrouped;
  }

  return grouped;
};
