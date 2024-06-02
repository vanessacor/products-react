import {  Breadcrumbs } from "@mui/material";
import NavLinkRouter from "./NavLinkRouter";


function NavigationBar() {
  return (
    <nav>
      <Breadcrumbs>
      <NavLinkRouter underline="hover" color="inherit" to="/">
        Home
      </NavLinkRouter> 
      <NavLinkRouter underline="hover" color="inherit" to="/books">
        Books
      </NavLinkRouter> 
      <NavLinkRouter underline="hover" color="inherit" to="/authors">
        Authors
      </NavLinkRouter> 
      </Breadcrumbs>
    </nav>
  );
}

export default NavigationBar;
