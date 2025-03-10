import { Button, Toast } from "flowbite-react";

const Popup = () => {
  return (
    <>
      <Toast>
        <div className="flex items-start">
          <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-cyan-100 text-cyan-500 dark:bg-cyan-900 dark:text-cyan-300"></div>
          <div className="ml-3 text-sm font-normal">
            <span className="mb-3 text-sm font-semibold text-gray-900 dark:text-white">
              Apple Watch SE GPS 40
            </span>
            <div className="mb-2 text-sm font-normal flex flex-col items-center">
              <img 
                src="/AppleWatchSE.jpg"  // Replace with your image path
                alt="Product"
                className="w-32 h-32 object-contain mb-2" // Adjust size as needed
              />
              <span className="text-xl font-semibold text-gray-900 dark:text-white">
                $249.99 {/* Replace with dynamic price */}
              </span>
            </div>
            <div className="flex gap-2">
              <div className="w-auto">
                <Button
                  size="xs"
                  className="bg-gray-700 text-white hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-300 rounded"
                >
                  Buy Now
                </Button>
              </div>
              <div className="w-auto">
                <Button color="light" size="xs">
                  Add to Cart
                </Button>
              </div>
            </div>
          </div>
          <Toast.Toggle />
        </div>
      </Toast>
    </>
  );
};

export default Popup;
