//rrd
import { Route, Routes } from "react-router-dom";
//pages
import Layout from "./Layout";
import Home from "./pages/Home";
import StylistDetails from "./pages/StylistDetails";
//utils
import { basePath } from "./utils/basePath";

const App = () => {
  return (
    <Routes>
      <Route path={basePath} element={<Layout />}>
        <Route index element={<Home />}></Route>
        <Route path={"barbero/:id"} element={<StylistDetails />}></Route>
      </Route>
    </Routes>
  );
};

export default App;
