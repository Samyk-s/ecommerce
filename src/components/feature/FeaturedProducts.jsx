import { Link } from 'react-router-dom'; // Import Link component from react-router-dom

const products = [
  {
    id: 1,
    name: 'Apple iMac 27"',
    price: '$1,799.00',
    imageUrl: '/AppleiMac 27.jpg',
    rating: 5,
  },
  {
    id: 2,
    name: 'Product 2',
    price: '$35.00',
    imageUrl: '/image1.jpg',
    rating: 4,
  },
  {
    id: 3,
    name: 'Product 3',
    price: '$50.00',
    imageUrl: '/image2.jpg',
    rating: 3,
  },
  {
    id: 4,
    name: 'Product 4',
    price: '$45.00',
    imageUrl: '/image3.jpg',
    rating: 4,
  },
  {
    id: 5,
    name: 'Product 5',
    price: '$25.00',
    imageUrl: '/image4.jpg',
    rating: 2,
  },
  {
    id: 6,
    name: 'Product 6',
    price: '$15.00',
    imageUrl: '/image5.jpg',
    rating: 3,
  },
];

const FeaturedProducts = () => {
  return (
    <>
      <h2 style={{ textAlign: 'center', fontSize: '2rem', fontWeight: '700', color: '#333', marginBottom: '20px' }}>
        Explore Our Best-Selling <span style={{ color: '#ff5722' }}>Featured Products</span> – Shop Now!
      </h2>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(6, 1fr)', // 6 items per row
          gap: '20px',
          marginTop: '20px',
          marginLeft: 'auto',
          marginRight: 'auto',
          maxWidth: '1200px',
        }}
      >
        {products.map((product) => (
          <Link
            key={product.id}
            to={`/product/${product.id}`} // Link to the product detail page
            style={{
              textDecoration: 'none', // Remove underline from the link
              display: 'block', // Make the entire card a clickable block
            }}
          >
            <div
              style={{
                border: '1px solid #ddd',
                borderRadius: '8px',
                padding: '10px',
                textAlign: 'center',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                backgroundColor: '#fff',
                height: '290px',
                width: '180px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                overflow: 'hidden', // Prevent overflow from card borders
              }}
            >
              {/* Image with hover effect */}
              <div
                style={{
                  height: '200px',
                  overflow: 'hidden',
                  borderRadius: '8px',
                  position: 'relative', // To position the overlay absolutely
                  transition: 'all 0.3s ease', // Smooth transition for the hover effect
                }}
              >
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'all 0.3s ease', // Smooth transition for the image on hover
                  }}
                />
                {/* Darkening Overlay Effect */}
                <div
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: 'rgba(0, 0, 0, 0.4)', // Dark gray translucent overlay
                    opacity: 0,
                    transition: 'opacity 0.3s ease',
                  }}
                  className="overlay"
                />
              </div>
              <h3 style={{ margin: '10px 0' }}>{product.name}</h3>
              <p>{product.price}</p>

              {/* Static Star Rating Section */}
              <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
                {[1, 2, 3, 4, 5].map((star) => (
                  <span
                    key={star}
                    style={{
                      fontSize: '24px',
                      color:
                        product.rating >= star
                          ? '#ffc107' // Yellow for filled stars
                          : '#ddd', // Gray for empty stars
                      transition: 'color 0.2s',
                    }}
                  >
                    ★
                  </span>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Add hover effect using JavaScript for dark overlay */}
      <style>
        {`
          .overlay {
            opacity: 0;
            transition: opacity 0.3s ease;
          }

          .overlay:hover {
            opacity: 1;
          }
        `}
      </style>
    </>
  );
};

export default FeaturedProducts;
