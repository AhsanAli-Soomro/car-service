// Modal.js
import Image from 'next/image'; // Import Image component from next/image

const Modal = ({ show, onClose, service }) => {
  if (!show) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 overflow-y-auto">
      <div className="bg-white rounded-lg p-6 w-11/12 md:w-2/3 lg:w-1/2 max-h-screen overflow-y-auto">
        <div className="flex flex-col items-center mb-4">
          <Image src={service.image} alt={service.title} width={600} height={400} className="rounded-3xl" />
          <h2 className="text-2xl font-bold mt-4">{service.title}</h2>
        </div>
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
