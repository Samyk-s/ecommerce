import { Footer } from "flowbite-react";

const HomeFooter = () => {
    return (<>
  
   <Footer container>
      <div className="w-full">
        <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
          
          <Footer.LinkGroup>
            <Footer.Link href="#">About</Footer.Link>
            <Footer.Link href="#">Privacy Policy</Footer.Link>
            <Footer.Link href="#">Licensing</Footer.Link>
            <Footer.Link href="#">Contact</Footer.Link>
          </Footer.LinkGroup>
        </div>
        <Footer.Divider />
        <Footer.Copyright href="#" by="Flowbite™" year={2022} />
      </div>
    </Footer>
    </>)
}
export default HomeFooter;