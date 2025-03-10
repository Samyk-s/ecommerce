import { Button, Navbar } from "flowbite-react";
import { Link } from "react-router-dom";
import Clockcard from "../clock/clock";

const HomeHeader = () => {
  return (
    <>
      <Navbar fluid rounded>
        <Navbar.Brand href="/">
          <img
            src="/react.svg"
            className="mr-3 h-6 sm:h-9"
            alt="Flowbite React Logo"
          />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            Ecommerce Store
          </span>
        </Navbar.Brand>
        <div className="flex md:order-2">
          <div className="flex flex-wrap gap-2">
            <Clockcard />
            <Link to="/login">
              <Button className="bg-gray-900 text-white rounded">
                Login
              </Button>
            </Link>

            <Link to="/register">
              <Button className="bg-gray-900 text-white rounded">
                Register
              </Button>
            </Link>
          </div>
        </div>

        {/* Collapsing Navbar links */}
        <Navbar.Collapse>
          <Navbar.Link href="/">Home</Navbar.Link>
          <Navbar.Link href="/shop-all">Shop ALL</Navbar.Link>
          <Navbar.Link href="/contact">Contact</Navbar.Link>
          <Navbar.Link href="/about-us">About</Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default HomeHeader;
