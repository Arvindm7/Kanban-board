// utils/iconUtil.js
export const getStatusIcon = (status) => {
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
  
  export const getPriorityIcon = (priority) => {
    switch (priority) {
      case 'Urgent':
        return '/icons/SVG - Urgent Priority colour.svg';
      case 'High':
        return '/icons/Img - High Priority.svg';
      case 'Medium':
        return '/icons/Img - Medium Priority.svg';
      case 'Low':
        return '/icons/Img - Low Priority.svg';
      case 'No Priority':
        return '/icons/No-priority.svg';
      default:
        return '/icons/other-icon.png';
    }
  };
  