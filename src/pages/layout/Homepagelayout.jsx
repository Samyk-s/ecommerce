import { Outlet } from "react-router-dom";
import HomeHeader from "../../components/header/header";

const HomePageLayout = () => {
  return (
    <>
      <HomeHeader />

      <Outlet />

    </>
  );
};
export default HomePageLayout;
