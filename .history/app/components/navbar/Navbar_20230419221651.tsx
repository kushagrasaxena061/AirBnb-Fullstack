import Container from "../Container.tsx";


/*
import { SafeUser } from "@/app/types";

import Categories from "./Categories";
import Logo from "./Logo";
import Search from "./Search";
import UserMenu from "./UserMenu";

interface NavbarProps {
  currentUser?: SafeUser | null;
}
*/

const Navbar /*: React.FC<NavbarProps>*/ = ({
  //currentUser,
}) => {
  return ( 
    <div className="fixed w-full bg-white z-10 shadow-sm">
      <div
        className="
          py-4 
          border-b-[1px]
        "
      >
      <Container>
        
      </Container>
    </div>
    
  </div>
  );
}


export default Navbar;