import React, { useState, useEffect } from 'react';
import KanbanBoard from './components/KanbanBoard';
import DropdownMenu from './components/DropdownMenu';
import { fetchData } from './utils/fetchdata'; 
import { loadViewState, saveViewState } from './utils/storageUtil'; 
import './App.css';

const App = () => {
  const [tickets, setTickets] = useState([]);
  const [users, setUsers] = useState([]);

  // Load saved view state from localStorage or set defaults
  const { savedGroupBy, savedSortBy } = loadViewState();
  const [groupBy, setGroupBy] = useState(savedGroupBy);
  const [sortBy, setSortBy] = useState(savedSortBy);

  // Fetch data from API
  useEffect(() => {
    const getData = async () => {
      const { tickets, users } = await fetchData();
      setTickets(tickets);
      setUsers(users);
    };

    getData();
  }, []);

  // Save view state to localStorage whenever groupBy or sortBy changes
  useEffect(() => {
    saveViewState(groupBy, sortBy);
  }, [groupBy, sortBy]);

  return (
    <div className="App">
      <div className="controls-container">
        <DropdownMenu
          groupBy={groupBy}
          sortBy={sortBy}
          onGroupByChange={setGroupBy}
          onSortByChange={setSortBy}
        />
      </div>
      <KanbanBoard tickets={tickets} users={users} groupBy={groupBy} sortBy={sortBy} />
    </div>
  );
};

export default App;
