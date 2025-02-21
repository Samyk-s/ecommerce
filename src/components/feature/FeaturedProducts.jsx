const FeaturedProducts = () => {
  // Example data for featured products
  const featuredProducts = [
    {
      id: 1,
      name: 'Product 1',
      price: '$29.99',
      image: 'image3.jpg',
    },
    {
      id: 2,
      name: 'Product 2',
      price: '$49.99',
      image: 'image4.jpg',
    },
    {
      id: 3,
      name: 'Product 3',
      price: '$19.99',
      image: 'image2.jpg',
    },
    {
      id: 3,
      name: 'Product 3',
      price: '$19.99',
      image: 'image2.jpg',
    },
    
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center mb-8 dark:text-white">Featured Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {featuredProducts.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-30" // Increased height to h-60
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
              <p className="text-lg font-bold text-blue-600 mb-4">
                {product.price}
              </p>
              <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors duration-300">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
