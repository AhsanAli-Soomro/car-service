// Modal.js
const Modal = ({ show, onClose, service }) => {
    if (!show) {
      return null;
    }
  
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white rounded-lg p-6 w-11/12 md:w-2/3 lg:w-1/2">
          <h2 className="text-2xl font-bold mb-4">{service.title}</h2>
          <p className="text-gray-700 mb-4">{service.description}</p>
          <button
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700 transition"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    );
  };
  
  export default Modal;
  