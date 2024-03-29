/* eslint-disable react/prop-types */

import React, { useState, useEffect, useContext, useRef } from "react";

// Dropdown context for open state
const DropdownContext = React.createContext({
  open: false,
  setOpen: () => {}
});

// Dropdown component for wrapping and providing context
function Dropdown({ children, }) {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Click listeners for closing dropdown
  useEffect(() => {
    // Close dropdown if click outside
    function close(e) {
      if (!dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    }

    // Add or remove event listener
    if (open) {
      window.addEventListener("click", close);
    }

    // Cleanup
    return function removeListener() {
      window.removeEventListener("click", close);
    };
  }, [open]); // Only run if open state changes

  return (
    <DropdownContext.Provider value={{ open, setOpen }}>
      <div ref={dropdownRef} className="relative m-1">
        {children}
      </div>
    </DropdownContext.Provider>
  );
}

// Dropdown button for triggering open
function DropdownButton({ children }) {
  const { open, setOpen } = useContext(DropdownContext); // Get the context

  // To open and close the dropdown
  function toggleOpen() {
    setOpen(!open);
  }

  return (
    <button
      onClick={toggleOpen}
      className="rounded px-3 py-2 font-bold  bg-tansprant flex items-center">
      {children}
    
    </button>
  );
}

// Dropdown content for displaying dropdown
function DropdownContent({ children, dropdownClass }) {
  const { open } = useContext(DropdownContext); // Get the context

  return (
    <div
      className={`absolute top-8 left-0 w-full lg:top-11   z-[99999] lg:w-[218px] pt-1 ${dropdownClass} ${
        open ? "block" : "hidden"
      }`}>
      {children}
    </div>
  );
}

// Dropdown list for dropdown menus
function DropdownList({ children, ...props }) {
  const { setOpen } = useContext(DropdownContext); // Get the context
  
  return (
    <ul
      onClick={() => setOpen(false)}
      className=" "
      {...props}>
         
      {children}
    </ul>
  );
}

// Dropdown items for dropdown menus
function DropdownItem({ children, ...props }) {
  return (
    <li
      className="text-gray-400 text-base py-1 pl-3 duration-500 cursor-pointer hover:bg-slate hover:text-white"
      {...props}>
      {children}
    </li>
  );
}

// Optional - but I like this pattern to know it must be a child of Dropdown
Dropdown.Button = DropdownButton;
Dropdown.Content = DropdownContent;
Dropdown.List = DropdownList;
Dropdown.Item = DropdownItem;

export default Dropdown;
