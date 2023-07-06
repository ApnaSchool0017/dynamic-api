import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Add from "./components/user/Add";
import Edit from "./components/user/Edit";
import View from "./components/user/View";

function App() {
  return (
    <div className="App">
      <div className="fixed w-full">
        <Navbar />
      </div>
      <div className="pt-16">
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/home" exact element={<Home />} />
          <Route path="/users/:id" exact element={<View />} />
          <Route path="/add-user" exact element={<Add />} />
          <Route path="/edit-user/:id" exact element={<Edit />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
