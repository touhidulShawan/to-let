import { useState, useEffect } from "react";
import CommentForm from "./CommentForm";
import FailedIcon from "./icons/FailedIcon";

import SuccessIcon from "./icons/SuccessIcon";
const Modal = ({
  modalMessage,
  success,
  modaltype,
  id,
  handleCommentModal,
}) => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    setShow(true);
  }, []);

  return show ? (
    <div
      className="fixed z-10 inset-0 overflow-y-auto"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div
          className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
          aria-hidden="true"
        ></div>

        <span
          className="hidden sm:inline-block sm:align-middle sm:h-screen"
          aria-hidden="true"
        >
          &#8203;
        </span>

        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            {modaltype === "comment" ? (
              <CommentForm postID={id} />
            ) : (
              <div className="flex items-center">
                {success ? <SuccessIcon /> : <FailedIcon />}
                <div className="mt-4 text-center sm:mt-0 sm:ml-4 sm:text-left">
                  <h3
                    className="text-lg leading-6 font-medium text-gray-900"
                    id="modal-title"
                  >
                    {modalMessage}
                  </h3>
                </div>
              </div>
            )}
          </div>
          <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            {modaltype === "comment" ? (
              <button
                className="outline-none border-gray-300 px-4 py-2 bg-white  text-gray-700 hover:bg-gray-50  mt-3 w-full inline-flex justify-center rounded-md border-2 text-base font-bold focus:border-transparent focus:ring-2 ring-gray-400 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm tracking-wide"
                onClick={handleCommentModal}
              >
                Close
              </button>
            ) : (
              <button
                className="outline-none border-gray-300 px-4 py-2 bg-white  text-gray-700 hover:bg-gray-50  mt-3 w-full inline-flex justify-center rounded-md border-2 text-base font-bold focus:border-transparent focus:ring-2 ring-gray-400 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm tracking-wide"
                onClick={() => setShow(false)}
              >
                Close
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  ) : null;
};

export default Modal;
