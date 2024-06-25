import { Link, LinkProps } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

interface LinkRouterProps extends LinkProps {
  to: string;
}

const LinkRouter = (props: LinkRouterProps) =>{
  return (
    <Link {...props} component={RouterLink} />
  );
}

export default LinkRouter;
