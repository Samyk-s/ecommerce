import { Outlet } from "react-router-dom";
import HomeFooter from "../../components/footer/footer";
import HomeHeader from "../../components/header/header";

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
