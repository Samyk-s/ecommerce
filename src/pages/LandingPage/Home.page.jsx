import HomeBanner from "../../components/banner/banner.component";
import FeaturedProducts from "../../components/feature/FeaturedProducts";

import Logo from "../../components/logo/logo";
import Popup from "../../components/popup/popup";

const LandingPage = () => {
  return (
    <>
    <Popup/>
      <HomeBanner />
    <FeaturedProducts/>
     <Logo/>
    </>
  );
};
export default LandingPage;
