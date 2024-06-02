import { Container, Typography } from "@mui/material";
import NavigationBar from "../navigation/NavigationBar";

type PageLayoutProps = {
  children: JSX.Element[] | JSX.Element;
};
const PageLayout: React.FC<PageLayoutProps> = ({ children }) => {
  return (
    <Container maxWidth="lg">
      <header>
        <Typography variant="h1">My Books</Typography>
        <NavigationBar />
      </header>
      <Container maxWidth="md">{children}</Container>
    </Container>
  );
};

export default PageLayout;
