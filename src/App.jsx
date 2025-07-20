import React, { useState } from 'react';
import useClickAway from './hooks/useClickAway';
import { FiX } from 'react-icons/fi'; // Make sure react-icons is installed
import './App.css'
function App() {
  const [isOpen, setIsOpen] = useState(false);
  const modalRef = useClickAway(() => setIsOpen(false));

  return (
    <div className="app-container">
      <button className="open-btn" onClick={() => setIsOpen(true)}>
        Open Modal
      </button>

      {isOpen && (
        <div className="modal-backdrop">
          <div ref={modalRef} className="modal">
            <button className="close-btn" onClick={() => setIsOpen(false)}>
              <FiX size={20} />
            </button>
            <h2>This is the Modal</h2>
            <p>
              Styled with CSS only—border, background, text color. Click outside or ✖ to
              close.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
