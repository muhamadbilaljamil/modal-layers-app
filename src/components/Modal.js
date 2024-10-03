import { useState, useEffect } from "react";
import './modal.css';

const Modal = ({ show, onClose, zIndex, children }) => {

const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (show) {
      const timeout = setTimeout(() => setIsVisible(true), 100);
      return () => clearTimeout(timeout);
    } 
  }, [show]);

  const handleClose = () => {
    setIsVisible(false)
    const timeout = setTimeout(() => onClose(), 500);
      return () => clearTimeout(timeout);
    
  };

  return (
    <div
      className={`fixed inset-0 bg-black bg-opacity-20 z-${zIndex}`}
      onClick={handleClose}
    >
      <div
       style={{
        transform: isVisible ? 'translateX(calc(100vw - 850px)' : 'translateX(100vw)',
        transition: 'transform 0.5s ease-in-out',
      }}
        className={`w-[850px] bg-white p-6 absolute top-0 bottom-0 rounded-md shadow-lg 
        z-${zIndex + 1} 
          `}
        onClick={(e) => e.stopPropagation()} // Prevents closing when clicking inside the modal
      >
        <div className="flex items-center py-0.5 px-2 absolute -left-[47px] min-w-[47px] h-[38px] pr-[5px] mb-[10px] bg-[rgba(47,198,246,0.95)] rounded-tl-[19px] rounded-bl-[19px] whitespace-nowrap overflow-hidden transition-top duration-300 shadow-[inset_-6px_0_8px_-10px_rgba(0,0,0,0.95)] z-[1] cursor-pointer">
          <button onClick={handleClose} className="modal-close">
            X
          </button>
        </div>
        {children}
      </div>
    </div>
  );
};

export default Modal;
