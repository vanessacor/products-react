import PageLayout from "./layouts/Pagelayout";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <PageLayout>
        <main id="content">
          <Outlet/>
        </main>
      </PageLayout>
    </>
  );
}

export default App;
