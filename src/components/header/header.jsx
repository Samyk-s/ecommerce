import { Button, Navbar } from "flowbite-react";
import { Link } from "react-router-dom";
import Clockcard from "../clock/clock";

const HomeHeader = () => {
  return (
    <>
      <Navbar fluid rounded>
        <Navbar.Brand href="/" className="flex items-center">
          <img
            src="/logo.jpg"
            className="mr-3 h-6 sm:h-9"
            alt="Flowbite React Logo"
          />
          <span className="self-center text-xl sm:text-2xl font-semibold dark:text-white">
            Ecommerce Store
          </span>
        </Navbar.Brand>

        <div className="flex md:order-2 items-center gap-4">
          {/* Clockcard will be on the left side on smaller screens and aligned on the right on larger screens */}
          <div className="hidden md:block">
            <Clockcard />
          </div>

          <div className="flex flex-wrap gap-2">
            <Link to="/login">
              <Button className="bg-gray-900 text-white rounded text-sm sm:text-base">
                Login
              </Button>
            </Link>

            <Link to="/register">
              <Button className="bg-gray-900 text-white rounded text-sm sm:text-base">
                Register
              </Button>
            </Link>
          </div>
        </div>

        {/* Collapsing Navbar links */}
        <Navbar.Collapse>
          <Navbar.Link href="/" className="text-sm sm:text-base">
            Home
          </Navbar.Link>
          <Navbar.Link href="/shop-all" className="text-sm sm:text-base">
            Shop ALL
          </Navbar.Link>
          <Navbar.Link href="/contact" className="text-sm sm:text-base">
            Contact
          </Navbar.Link>
          <Navbar.Link href="/about-us" className="text-sm sm:text-base">
            About
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default HomeHeader;
