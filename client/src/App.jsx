import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./views/Home/Home";
import LayoutAdmin from "./views/LayoutAdmin/LayoutAdmin";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LayoutAdmin />}>
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
