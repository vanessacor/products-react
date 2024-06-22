import { Link, LinkProps } from "@mui/material";
import { NavLink as RouterLink } from "react-router-dom";

interface LinkRouterProps extends LinkProps {
  to: string;
}

const NavLinkRouter = (props: LinkRouterProps) =>{
  return (
    <Link {...props} component={RouterLink} />
  );
}

export default NavLinkRouter;
