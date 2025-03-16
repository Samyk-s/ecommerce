import HomeBanner from "../../components/banner/banner.component";
import BannerOne from "../../components/banner/banner.component1";

import BannerTwo from "../../components/banner/banner.component2";

import FeaturedProductsList from "../../components/product/product.component";

const LandingPage = () => {
  return (
    <>
      <HomeBanner />
      <BannerTwo />
      <FeaturedProductsList />

      <BannerOne />
    </>
  );
};
export default LandingPage;
