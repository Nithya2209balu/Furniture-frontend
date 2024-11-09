import { Footer } from "flowbite-react";
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";

function MyFooter() {
  return (
    <div>
         <div className="py-10 ">
            <div className="h-1 w-full bg-gray-300"></div>
        </div>
    <Footer bgDark>
        
      <div className="w-full">
        <div className="grid w-full grid-cols-2 gap-8 px-6 py-8 md:grid-cols-4">
          <div>
            <Footer.Title title="Funiro" />
          <p className="mt-2">400 University Drive Suite 200 Coral Gables,
          FL 33134 USA</p>
          </div>
          <div>
           
            <Footer.LinkGroup col>
              <Footer.Link href="#">Links</Footer.Link>
              <Footer.Link href="#">Home</Footer.Link>
              <Footer.Link href="#">Shop</Footer.Link>
              <Footer.Link href="#">About</Footer.Link>
              <Footer.Link href="#">Contact</Footer.Link>
            </Footer.LinkGroup>
          </div>
          <div>
            
            <Footer.LinkGroup col>
              <Footer.Link href="#">Help</Footer.Link>
              <Footer.Link href="#">Payment Options</Footer.Link>
              <Footer.Link href="#">Returns</Footer.Link>
              <Footer.Link href="#">Privacy Policies</Footer.Link>
            </Footer.LinkGroup>
          </div>
          <div>
            
            <Footer.LinkGroup col>
              <Footer.Link href="#">Newsletter</Footer.Link>
              <Footer.Link href="#">Enter Your Email Address</Footer.Link>
              <Footer.Link href="#">SUBSCRIBE</Footer.Link>
            
            </Footer.LinkGroup>
          </div>
        </div>
        <div className="py-10 px-20">
            <div className="h-1 w-full bg-gray-300"></div>
        </div>
        <div className="w-full  px-4 py-6 sm:flex sm:items-center sm:justify-between">
          <p>2023 furino. All rights reverved</p>
        </div>
      </div>
    </Footer>
    </div>
  )
}
 
export default MyFooter