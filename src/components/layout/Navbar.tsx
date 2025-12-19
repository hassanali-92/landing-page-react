// import { Link, useLocation } from "react-router-dom"; // React Router
 import { Link} from "react-router-dom"; // React Router

import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink
} from "@/components/ui/navigation-menu";

const Navbar = () => {
  // const location = useLocation();
  // const currentPath = location.pathname;

  const links = [
    
    { label: "About", /*href: "/about"*/ },
    { label: `Contact`, /*href: "/contact"*/ }
  ];

  return (
    <nav className="bg-black text-white shadow-sm px-6 py-4 flex justify-between items-center">
      
  
      <div className="flex items-center space-x-2">
        <Link to="/">
        <span className="text-xl font-bold">MyBrand</span>
        </Link>
      </div>

    
      <NavigationMenu>
        <NavigationMenuList className="flex items-center gap-4">
          {links.map((link) => (
            <NavigationMenuItem key={link.label} >
            
              <NavigationMenuLink
              
                // data-active={currentPath === link.href}
                className="rounded-md px-2 py-1  cursor-pointer hover:text-blue-600 data-[active=true]:text-blue-700 transition-colors"
              >{link.label}
         
              </NavigationMenuLink>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
    </nav>
  );
};

export default Navbar;
