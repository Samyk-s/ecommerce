import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import the CSS for toastify
import HomePageLayout from "../pages/layout/Homepagelayout";
import LandingPage from "../pages/LandingPage/Home.page";

import ShopAll from "../components/shop-all/shopall.component";
import ContactPage from "../pages/contact/contact.page";
import NotFoundPage from "../pages/error/notfound";
import LoginForm from "../components/auth/login/login.auth";
import BuyerPageLayout from "../pages/layout/BuyerPageLayout";
import BuyerLandingPage from "../pages/LandingPage/Buyer.Home";
import SellerPageLayout from "../pages/layout/SellerPageLayout";
import SellerLandingPage from "../pages/LandingPage/Seller.Home";
import AdminPageLayout from "../pages/layout/Adminpagelayout";
import AdminLandingPage from "../pages/LandingPage/Admin.Home";
import ProtectedRoute from "../components/auth/login/protectedroute";
import RegisterForm from "../components/auth/register/register.auth";
import ShowProduct from "../components/products/show.product";
import Inbox from "../components/inbox/inbox";
import CreateProduct from "../components/products/edit.product";
import EditProduct from "../components/products/EditProduct";
import Overview from "../pages/overview/overview";
import "flowbite/dist/flowbite.min.css"

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
        path: "/contact",
        element: <ContactPage />,
      },
      {
        path: "/shop-all",
        element: <ShopAll />,
      },
      {
        path: "login",
        element: <LoginForm />,
      },
      {
        path: "register",
        element: <RegisterForm />,
      },
      {
        path: "overview",
        element: <Overview />,
      },

      {
        path: "*",
        element: <NotFoundPage />,
      },
    ],
  },
  {
    path: "/buyer",
    element: (
      <ProtectedRoute allowedRoles={["buyer"]}>
        <BuyerPageLayout />
      </ProtectedRoute>
    ),
    children: [
      {
        index: true,
        element: <BuyerLandingPage />,
      },
      // Add more buyer-specific routes here
    ],
  },
  {
    path: "/seller",
    element: (
      <ProtectedRoute allowedRoles={["seller"]}>
        <SellerPageLayout />
      </ProtectedRoute>
    ),
    children: [
      {
        index: true,
        element: <SellerLandingPage />,
      },
      // Add more seller-specific routes here
    ],
  },
  {
    path: "/admin",
    element: (
      <ProtectedRoute allowedRoles={["admin"]}>
        <AdminPageLayout />
      </ProtectedRoute>
    ),
    children: [
      {
        index: true,
        element: <AdminLandingPage />,
      },
      {
        path: "product", // relative path, no leading slash
        element: <ShowProduct />,
      },
      {
        path: "product/create", // New route for creating a product
        element: <CreateProduct />,
      },
      {
        path: "/admin/product/edit/:productId",
        element: <EditProduct />,
      },
      {
        path: "inbox", // relative path, no leading slash
        element: <Inbox />,
      },
      // Add more admin-specific routes here
    ],
  },
]);

const Routing = () => {
  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer /> {/* Add ToastContainer here */}
    </>
  );
};

export default Routing;
