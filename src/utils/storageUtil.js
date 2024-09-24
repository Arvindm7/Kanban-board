// src/utils/storageUtils.js
export const loadViewState = () => {
    const savedGroupBy = localStorage.getItem('groupBy') || 'status';  // default to 'status'
    const savedSortBy = localStorage.getItem('sortBy') || 'priority';  // default to 'priority'
    return { savedGroupBy, savedSortBy };
  };
  
  export const saveViewState = (groupBy, sortBy) => {
    localStorage.setItem('groupBy', groupBy);
    localStorage.setItem('sortBy', sortBy);
  };
  