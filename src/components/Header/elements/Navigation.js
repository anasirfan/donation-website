import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import Anchor from "../../anchor";

const Navigation = () => {
  return (
    <nav className="header-content__navigation space-pr--15 space-pl--15 d-none d-lg-block">
      <ul style={{marginBottom:'0px'}}>
        <li>
          <Anchor path="/">
            Home
          </Anchor>
        </li>
        <li>
          <Anchor
            path="/">
            About us
          </Anchor>
      
        </li>
        <li className="position-relative">
          <Anchor path="/">
            Contact us
          </Anchor>
         
        </li>
        <li className="position-relative">
          <Anchor path="/">
            Our Mission
          </Anchor>
         
        </li>
        
      </ul>
    </nav>
  );
};

export default Navigation;
