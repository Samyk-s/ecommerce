import { Outlet } from "react-router-dom";
import HomeHeader from "../../components/header/header";
import HomeFooter from "../../components/footer/footer";
const HomePageLayout = () => {
  return (
    <>
      <HomeHeader />

      <Outlet />

      <HomeFooter />

      

    </>
  );
};
export default HomePageLayout;
