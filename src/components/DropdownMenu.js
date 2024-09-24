import React, { useState } from "react";

const DropdownMenu = ({ groupBy, sortBy, onGroupByChange, onSortByChange }) => {
  const [isMainDropdownOpen, setIsMainDropdownOpen] = useState(false);
  const [isGroupByDropdownOpen, setIsGroupByDropdownOpen] = useState(false);
  const [isSortByDropdownOpen, setIsSortByDropdownOpen] = useState(false);

  const toggleMainDropdown = () => {
    setIsMainDropdownOpen(!isMainDropdownOpen);
    setIsGroupByDropdownOpen(false);
    setIsSortByDropdownOpen(false);
  };

  const toggleGroupByDropdown = () => {
    setIsGroupByDropdownOpen(!isGroupByDropdownOpen);
    setIsSortByDropdownOpen(false);
  };

  const toggleSortByDropdown = () => {
    setIsSortByDropdownOpen(!isSortByDropdownOpen);
    setIsGroupByDropdownOpen(false);
  };

  return (
    <div className="dropdown">
      <button className="dropdown-toggle" onClick={toggleMainDropdown}>
        <img src="/icons/Display.svg" alt="Display Icon" className="menu-icon" />
        Display
        <img 
          src={isMainDropdownOpen ? "/icons/down.svg" : "/icons/down.svg"} 
          alt="" 
          className="dropdown-arrow" 
        />
      </button>
      {isMainDropdownOpen && (
        <ul className="dropdown-menu">
          <li>
            <button className="dropdown-item" onClick={toggleGroupByDropdown}>
              Grouping {isGroupByDropdownOpen ? "▲" : "▼"}
            </button>
            {isGroupByDropdownOpen && (
              <ul className="inner-dropdown-menu">
                <li>
                  <button
                    className={`inner-dropdown-item ${groupBy === "status" ? "selected" : ""}`}
                    onClick={() => onGroupByChange("status")}
                  >
                    Status {groupBy === "status" && "✔️"}
                  </button>
                </li>
                <li>
                  <button
                    className={`inner-dropdown-item ${groupBy === "user" ? "selected" : ""}`}
                    onClick={() => onGroupByChange("user")}
                  >
                    User {groupBy === "user" && "✔️"}
                  </button>
                </li>
                <li>
                  <button
                    className={`inner-dropdown-item ${groupBy === "priority" ? "selected" : ""}`}
                    onClick={() => onGroupByChange("priority")}
                  >
                    Priority {groupBy === "priority" && "✔️"}
                  </button>
                </li>
              </ul>
            )}
          </li>

          <li>
            <button className="dropdown-item" onClick={toggleSortByDropdown}>
              Ordering {isSortByDropdownOpen ? "▲" : "▼"}
            </button>
            {isSortByDropdownOpen && (
              <ul className="inner-dropdown-menu">
                <li>
                  <button
                    className={`inner-dropdown-item ${sortBy === "priority" ? "selected" : ""}`}
                    onClick={() => onSortByChange("priority")}
                  >
                    Priority {sortBy === "priority" && "✔️"}
                  </button>
                </li>
                <li>
                  <button
                    className={`inner-dropdown-item ${sortBy === "title" ? "selected" : ""}`}
                    onClick={() => onSortByChange("title")}
                  >
                    Title {sortBy === "title" && "✔️"}
                  </button>
                </li>
              </ul>
            )}
          </li>
        </ul>
      )}

      <style jsx>{`
        .dropdown {
          position: relative;
          display: inline-block;
        }

        .dropdown-toggle {
          background-color: #f1f1f1;
          color: #333;
          padding: 8px 12px;
          font-size: 14px;
          border: 1px solid #ccc;
          border-radius: 4px;
          cursor: pointer;
          display: flex;
          align-items: center; /* Ensures icon and text are vertically aligned */
        }

        .menu-icon {
          width: 16px;
          height: 16px;
          margin-right: 8px;
        }

        .arrow {
          margin-left: auto;
          font-size: 10px;
          padding-left: 5px;
        }

        .dropdown-menu {
          list-style-type: none;
          padding: 0;
          margin: 8px 0 0;
          background-color: #fff;
          border: 1px solid #ddd;
          box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.1);
          position: absolute;
          z-index: 1;
          width: 150px;
        }

        .dropdown-item {
          padding: 10px;
          background: none;
          border: none;
          text-align: left;
          cursor: pointer;
          width: 100%;
        }

        .dropdown-item:hover {
          background-color: #eee;
        }

        .inner-dropdown-menu {
          list-style-type: none;
          padding: 0;
          margin: 0;
          background-color: #fff;
          border: 1px solid #ddd;
          position: absolute;
          left: 100%;
          top: 0;
          min-width: 150px;
        }

        .inner-dropdown-item {
          padding: 10px;
          background: none;
          border: none;
          text-align: left;
          cursor: pointer;
          width: 100%;
        }

        .inner-dropdown-item:hover {
          background-color: #eee;
        }

        .selected {
          font-weight: bold;
        }
      `}</style>
    </div>
  );
};

export default DropdownMenu;
