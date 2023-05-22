import logo from "./logo.svg";
import "./App.css";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Routes,
  Link,
} from "react-router-dom";
import Profile from "./component/Profile";
import Product from "./component/Product";
import Setting from "./component/Setting";
import Home from "./component/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/setting" element={<Setting />} />
      <Route path="/product" element={<Product />} />
    </Routes>
  );
}

export default App;
