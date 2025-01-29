import { createBrowserRouter } from "react-router-dom";
import HomePageLayout from "../pages/layout/Homepagelayout";
import LandingPage from "../pages/LandingPage/Home.page";
import AboutUs from "../pages/about-us/about-us.page";
import { RouterProvider } from "react-router-dom";
import CollectionPage from "../pages/our-collections/collection.page";
import ShopAll from "../components/shop-all/shopall.component";
import ContactPage from "../pages/contact/contact.page";
import NotFoundPage from "../pages/error/notfound";
import LoginForm from "../components/auth/login/login.auth";


const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePageLayout />,
    children: [
      {
        index: true,
        element: <LandingPage />,
      },
      {
        path: "about-us",
        element: <AboutUs />,
      },
      {
        path: "our-collection",
        element: <CollectionPage />,
      },
      { path: "contact",
         element: <ContactPage /> },
      {
        path: "shop-all",
        element: <ShopAll />,
      },
      { path: "login",
         element:<LoginForm/>
        }, 
        

      {
        path: "*",
        element: <NotFoundPage />,
      },
    ],
  },
]);
const Routing = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default Routing;
