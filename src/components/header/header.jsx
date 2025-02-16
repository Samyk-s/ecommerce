import { Button, Navbar } from "flowbite-react";
import { DarkThemeToggle, Flowbite } from "flowbite-react";
import { Link } from 'react-router-dom';
const HomeHeader = () => {
  return (
    <>
     <Flowbite>     <Navbar fluid rounded>
        <Navbar.Brand href="https://flowbite-react.com">
          <img
            src="/react.svg"
            className="mr-3 h-6 sm:h-9"
            alt="Flowbite React Logo"
          />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            Flowbite React
          </span>
        </Navbar.Brand>
        <div className="flex md:order-2">
        <div className="flex flex-wrap gap-2">
        <DarkThemeToggle />
        <Link to="/login">
      <Button color="blue" pill>
        Login
      </Button>
    </Link>
      
    <Link to="/register">
      <Button color="blue" pill>
        Register
      </Button>
    </Link>

      
      </div>
    </div>

        <Navbar.Collapse>
          <Navbar.Link href="/" active style={{ color: "red" }}>
            Home
          </Navbar.Link>

          <Navbar.Link href="/shop-all">Shop ALL</Navbar.Link>
          <Navbar.Link href="/contact">Contact</Navbar.Link>
          <Navbar.Link href="/about-us">About</Navbar.Link>
          
          
        </Navbar.Collapse>
      </Navbar>
      </Flowbite>
 
    </>
  );
};
export default HomeHeader;
