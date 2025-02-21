import { useState } from 'react'; // Import useState

const Popup = () => {
  // State to manage visibility of the popup
  const [isVisible, setIsVisible] = useState(true);

  // Function to handle closing the popup
  const closePopup = () => {
    setIsVisible(false);
  };

  // Render the popup only if it's visible
  return (
    <>
      {isVisible && (
        <div
          id="banner"
          tabIndex="-1"
          className="fixed z-50 flex w-full items-start justify-between gap-8 border-b border-gray-200 bg-gray-50 px-4 py-3 dark:border-gray-700 dark:bg-gray-800 sm:items-center lg:py-4"
        >
          <p className="mx-auto text-base text-gray-500 dark:text-gray-400">
            <span className="font-medium text-gray-900 dark:text-white">
              Autumn Sale is Here!
            </span>{' '}
            🌟 Whether you&apos;re prepping for cooler days or refreshing your
            home, now’s the time{' '}
            <a
              href="shop-all"
              className="font-medium text-gray-900 underline hover:no-underline dark:text-white"
            >
              to shop!
            </a>
          </p>
          <button
            onClick={closePopup} // Close the popup when clicked
            type="button"
            className="flex items-center rounded-lg p-1.5 text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
          >
            <svg
              className="h-5 w-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
      )}
    </>
  );
};

export default Popup;
