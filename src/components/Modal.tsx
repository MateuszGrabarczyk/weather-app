import { useState, FC, FormEvent } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  setShowToast: React.Dispatch<React.SetStateAction<boolean>>;
}

const Modal: FC<ModalProps> = ({ isOpen, onClose, setShowToast }) => {
  const [inputText, setInputText] = useState("");

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    console.log("Submitted Text: ", inputText);
    setInputText("");
    setShowToast(true);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-center items-center">
      <div
        className="absolute inset-0 bg-black bg-opacity-25"
        onClick={onClose}
      />
      <div className="relative bg-white p-6 rounded z-10">
        <form onSubmit={handleSubmit}>
          <textarea
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            className="mt-2 p-2 w-full rounded border"
            placeholder="Type your opinion here..."
            rows={3}
          ></textarea>
          <button
            type="submit"
            className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            Submit
          </button>
          <button
            onClick={() => {
              setInputText("");
              onClose();
            }}
            className="mt-4 ml-4 bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50"
          >
            Close
          </button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
