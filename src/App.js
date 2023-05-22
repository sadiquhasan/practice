import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./App.css";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Routes,
  Link,
} from "react-router-dom";
import Profile from "./pages/Profile";
import Product from "./pages/Product";
import Setting from "./pages/Setting";
import Home from "./pages/Home";
import Header from "./component/Header";
import Footer from "./component/Footer";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/setting" element={<Setting />} />
        <Route path="/product" element={<Product />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
