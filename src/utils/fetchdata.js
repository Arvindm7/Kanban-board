// src/utils/fetchData.js
export const fetchData = async () => {
    try {
      const response = await fetch('https://api.quicksell.co/v1/internal/frontend-assignment');
      const data = await response.json();
      return { tickets: data.tickets, users: data.users };
    } catch (error) {
      console.error('Error fetching data:', error);
      return { tickets: [], users: [] };
    }
  };
  