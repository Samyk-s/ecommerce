const BannerOne = () => {
  return (
    <div className="flex items-center justify-between w-full h-screen bg-gray-100 p-8">
      {/* Left Side - Text */}
      <div className="w-1/4 space-y-5"> {/* Decreased width of text section */}
        <h1 className="text-6xl font-bold text-gray-900">New Collection</h1>
        <p className="text-xl text-gray-600">
          Discover the latest trends in fashion.
        </p>
        <button className="bg-black text-white px-8 py-3 rounded-full text-lg hover:bg-gray-800 transition duration-300">
          Shop Now
        </button>
      </div>

      {/* Right Side - Images */}
      <div className="w-4/5 h-full flex gap-4"> {/* Increased width of image section */}
        {/* Column 1 - Image 1 (Full Height) */}
        <div className="w-1/3 h-full">
          <img
            src="model1.jpg"
            alt="Fashion 1"
            className="w-full h-full object-cover rounded-lg transition duration-300 hover:brightness-75 mt-0"
          />
        </div>

        {/* Column 2 - Image 2 (Top) + Image 3 (Bottom) */}
        <div className="w-1/3 h-full flex flex-col gap-4">
          <div className="h-1/2">
            <img
              src="model2.jpg"
              alt="Fashion 2"
              className="w-full h-full object-cover rounded-lg transition duration-300 hover:brightness-75 mt-0"
            />
          </div>
          <div className="h-1/2">
            <img
              src="model3.jpg"
              alt="Fashion 3"
              className="w-full h-full object-cover rounded-lg transition duration-300 hover:brightness-75 mt-0"
            />
          </div>
        </div>

        {/* Column 3 - Image 4 (Top) + Image 5 (Bottom) */}
        <div className="w-1/3 h-full flex flex-col gap-4">
          <div className="h-2/3">
            <img
              src="model4.jpg"
              alt="Fashion 4"
              className="w-full h-full object-cover rounded-lg transition duration-300 hover:brightness-75 mt-0"
            />
          </div>
          <div className="h-1/3">
            <img
              src="model5.jpg"
              alt="Fashion 5"
              className="w-full h-full object-cover rounded-lg transition duration-300 hover:brightness-75 mt-0"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerOne;
