import { FaTruck, FaExchangeAlt, FaPercent } from "react-icons/fa"; // importing icons from react-icons library

const BannerTwo = () => {
  return (
    <div style={styles.bannerContainer}>
      <div style={styles.bannerContent}>
        <div style={styles.bannerItem}>
          <FaExchangeAlt style={styles.icon} />
          <span>Free Returns and Exchanges</span>
          <span style={styles.separator}></span>
        </div>
        <div style={styles.bannerItem}>
          <FaPercent style={styles.icon} />
          <span>10% Discount with Code: WIX123</span>
          <span style={styles.separator}></span>
        </div>
        <div style={styles.bannerItem}>
          <FaTruck style={styles.icon} />
          <span>Free Delivery on Orders Over $100</span>
          <span style={styles.separator}></span>
        </div>
      </div>
    </div>
  );
};

const styles = {
  bannerContainer: {
    backgroundColor: "#333", // Dark Gray background
    height: "50px",
    width: "1200px",
    margin: "20px auto",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "20px", // Fixed typo from margintop to marginTop
  },
  bannerContent: {
    display: "flex",
    justifyContent: "space-around",
    width: "100%",
  },
  bannerItem: {
    display: "flex",
    alignItems: "center",
    color: "#FFCC00", // Yellow text color
    fontSize: "18px",
  },
  icon: {
    marginRight: "5px",
    fontSize: "18px",
  },
  separator: {
    color: "#FFCC00", // Yellow separator
    marginLeft: "5px", // Space between the text and separator
    fontSize: "18px", // Match the font size with other elements
  },
};

export default BannerTwo;
