import React, { useState } from "react";
import "./App.css";
import Modal from "./components/Modal";

const App = () => {
  const [modals, setModals] = useState([]);

  const openModal = () => {
    setModals([
      ...modals,
      { id: modals.length + 1, zIndex: 50 + modals.length * 10 },
    ]);
  };

  const closeModal = (id) => {
    setModals(modals.filter((modal) => modal.id !== id));
  };

  return (
    <>
      <div className="App">
        <h1 className="bg-green-300 text-lg font-bold text-gray-700 py-1 px-4">
          Modal Layers APP
        </h1>
      </div>
      <button
        onClick={openModal}
        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
      >
        Open Modal
      </button>

      <div className="p-10">
        {modals.map((modal) => (
          <Modal
            key={modal.id}
            show={true}
            zIndex={modal.zIndex}
            onClose={() => closeModal(modal.id)}
          >
            <div id={`MODAL_DEAL_${modal.id}`} onClick={openModal} className="bg-green-300 py-1 px-3 rounded-full w-fit cursor-pointer">
              <h1>click me to next modal {modal.id}</h1>
            </div>
          </Modal>
        ))}
      </div>
    </>
  );
};

export default App;
